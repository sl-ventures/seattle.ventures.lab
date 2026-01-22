import path from 'path'
import { DateTime } from 'luxon'
import { google } from 'googleapis'
import fs from 'fs'

const PACIFIC_TIME_ZONE = 'America/Los_Angeles'
const SLOT_MINUTES = 15
// Calendar ID - ensure this calendar is shared with the service account with "Make changes to events" permission
// Set via GOOGLE_CALENDAR_ID env var to override
const DEFAULT_CALENDAR_ID = 'jsong@seattlepartners.us'

const getServiceAccountFile = () => {
  const envPath = process.env.GOOGLE_SERVICE_ACCOUNT_FILE
  if (envPath) {
    return envPath
  }

  const defaultPath = path.join(process.cwd(), 'service-account-key.json')
  if (fs.existsSync(defaultPath)) {
    return defaultPath
  }

  throw new Error(
    `Service account file not found at ${defaultPath}. Set GOOGLE_SERVICE_ACCOUNT_FILE or GOOGLE_SERVICE_ACCOUNT_JSON.`
  )
}

const getCalendarId = () => process.env.GOOGLE_CALENDAR_ID || DEFAULT_CALENDAR_ID

type ServiceAccountCredentials = {
  client_email: string
  private_key: string
}

const getServiceAccountCredentials = (): ServiceAccountCredentials => {
  const jsonEnv = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
  if (jsonEnv) {
    return JSON.parse(jsonEnv) as ServiceAccountCredentials
  }

  const keyFile = getServiceAccountFile()
  const content = fs.readFileSync(keyFile, 'utf8')
  return JSON.parse(content) as ServiceAccountCredentials
}

const getCalendarClient = () => {
  try {
    const subject = process.env.GOOGLE_WORKSPACE_SUBJECT
    const scopes = ['https://www.googleapis.com/auth/calendar']

    if (subject) {
      const credentials = getServiceAccountCredentials()
      const auth = new google.auth.JWT({
        email: credentials.client_email,
        key: credentials.private_key,
        scopes,
        subject,
      })
      return google.calendar({ version: 'v3', auth })
    }

    const jsonEnv = process.env.GOOGLE_SERVICE_ACCOUNT_JSON
    const auth = jsonEnv
      ? new google.auth.GoogleAuth({
          credentials: JSON.parse(jsonEnv),
          scopes,
        })
      : new google.auth.GoogleAuth({
          keyFile: getServiceAccountFile(),
          scopes,
        })

    return google.calendar({ version: 'v3', auth })
  } catch (error) {
    console.error('Failed to initialize Google Calendar client:', error)
    throw error
  }
}

const coerceTimeZone = (timeZone?: string) => {
  if (!timeZone) {
    return PACIFIC_TIME_ZONE
  }

  const resolved = DateTime.now().setZone(timeZone)
  return resolved.isValid ? timeZone : PACIFIC_TIME_ZONE
}

const isOverlapping = (start: DateTime, end: DateTime, busyStart: DateTime, busyEnd: DateTime) =>
  start < busyEnd && end > busyStart

export const listAvailability = async (date: string, userTimeZone?: string) => {
  const calendar = getCalendarClient()
  const calendarId = getCalendarId()
  const validTimeZone = coerceTimeZone(userTimeZone)

  const dayStart = DateTime.fromISO(date, { zone: PACIFIC_TIME_ZONE }).set({
    hour: 10,
    minute: 0,
    second: 0,
    millisecond: 0,
  })
  const dayEnd = dayStart.set({ hour: 17, minute: 0 })

  const freeBusy = await calendar.freebusy.query({
    requestBody: {
      timeMin: dayStart.toUTC().toISO(),
      timeMax: dayEnd.toUTC().toISO(),
      items: [{ id: calendarId }],
    },
  })

  const busyEntries = freeBusy.data.calendars?.[calendarId]?.busy ?? []

  const busySlots = busyEntries
    .map(entry => ({
      start: entry.start ? DateTime.fromISO(entry.start) : null,
      end: entry.end ? DateTime.fromISO(entry.end) : null,
    }))
    .filter(slot => slot.start && slot.end) as { start: DateTime; end: DateTime }[]

  const slots = []
  let cursor = dayStart

  while (cursor < dayEnd) {
    const slotEnd = cursor.plus({ minutes: SLOT_MINUTES })
    if (slotEnd > dayEnd) {
      break
    }

    const overlaps = busySlots.some(slot => isOverlapping(cursor, slotEnd, slot.start, slot.end))
    if (!overlaps) {
      slots.push({
        startUtc: cursor.toUTC().toISO(),
        endUtc: slotEnd.toUTC().toISO(),
        startLocal: cursor.setZone(validTimeZone).toFormat('h:mm a'),
        endLocal: slotEnd.setZone(validTimeZone).toFormat('h:mm a'),
        startPt: cursor.setZone(PACIFIC_TIME_ZONE).toFormat('h:mm a'),
        endPt: slotEnd.setZone(PACIFIC_TIME_ZONE).toFormat('h:mm a'),
      })
    }

    cursor = slotEnd
  }

  return {
    date,
    timeZone: validTimeZone,
    slots,
  }
}

export const bookSlot = async ({
  startUtc,
  name,
  email,
  userTimeZone,
}: {
  startUtc: string
  name: string
  email: string
  userTimeZone?: string
}) => {
  const calendar = getCalendarClient()
  const calendarId = getCalendarId()
  const validTimeZone = coerceTimeZone(userTimeZone)

  const start = DateTime.fromISO(startUtc, { zone: 'utc' })
  const end = start.plus({ minutes: SLOT_MINUTES })

  const event = await calendar.events.insert({
    calendarId,
    sendUpdates: 'all',
    conferenceDataVersion: 1,
    requestBody: {
      summary: 'Discovery Call',
      description: `Discovery call booked via website.\n\nAttendee:\nName: ${name}\nEmail: ${email}\nUser Time Zone: ${validTimeZone}`,
      start: {
        dateTime: start.toISO(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: end.toISO(),
        timeZone: 'UTC',
      },
      attendees: [{ email }],
      conferenceData: {
        createRequest: {
          requestId: start.toISO(),
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    },
  })

  return {
    eventId: event.data.id,
    meetingLink: event.data.hangoutLink ?? null,
  }
}
