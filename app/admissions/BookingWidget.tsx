'use client'

import { useEffect, useState } from 'react'
import styles from './page.module.css'

type AvailabilitySlot = {
  startUtc: string
  endUtc: string
  startLocal: string
  endLocal: string
  startPt: string
  endPt: string
}

const PACIFIC_TIME_ZONE = 'America/Los_Angeles'

const getPacificDateString = () =>
  new Intl.DateTimeFormat('en-CA', {
    timeZone: PACIFIC_TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())

const getUserTimeZone = () =>
  Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'

export default function BookingWidget() {
  const [timeZone, setTimeZone] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [slots, setSlots] = useState<AvailabilitySlot[]>([])
  const [selectedSlot, setSelectedSlot] = useState<AvailabilitySlot | null>(null)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [booking, setBooking] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  useEffect(() => {
    setTimeZone(getUserTimeZone())
    setSelectedDate(getPacificDateString())
  }, [])

  useEffect(() => {
    if (!selectedDate || !timeZone) {
      return
    }

    const loadSlots = async () => {
      setLoadingSlots(true)
      setErrorMessage(null)
      setSuccessMessage(null)
      setSelectedSlot(null)

      try {
        const response = await fetch('/api/calendar/availability', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            date: selectedDate,
            userTimeZone: timeZone,
          }),
        })

        if (!response.ok) {
          const payload = await response.json().catch(() => ({}))
          throw new Error(payload?.error || 'Unable to load availability.')
        }

        const payload = await response.json()
        setSlots(payload.slots ?? [])
      } catch (error) {
        setErrorMessage(error instanceof Error ? error.message : 'Unable to load availability.')
        setSlots([])
      } finally {
        setLoadingSlots(false)
      }
    }

    loadSlots()
  }, [selectedDate, timeZone])

  const handleBook = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setErrorMessage(null)
    setSuccessMessage(null)

    if (!selectedSlot) {
      setErrorMessage('Please select a time slot.')
      return
    }

    if (!fullName.trim() || !email.trim()) {
      setErrorMessage('Please enter your name and email.')
      return
    }

    setBooking(true)

    try {
      const response = await fetch('/api/calendar/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          startUtc: selectedSlot.startUtc,
          name: fullName.trim(),
          email: email.trim(),
          userTimeZone: timeZone,
        }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}))
        throw new Error(payload?.error || 'Unable to complete booking.')
      }

      setSuccessMessage('Your discovery call is confirmed. Check your email for the invite.')
      setFullName('')
      setEmail('')
      setSelectedSlot(null)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to complete booking.')
    } finally {
      setBooking(false)
    }
  }

  return (
    <div className={styles.bookingWidget}>
      <div className={styles.bookingHeader}>
        <div>
          <p className={styles.bookingTitle}>Book a 15-minute discovery call</p>
          <p className={styles.bookingSubtext}>Office hours: 10:00 AM–5:00 PM Pacific Time</p>
        </div>
        <div className={styles.bookingTimeZone}>
          Your time zone: <strong>{timeZone || 'Detecting...'}</strong>
        </div>
      </div>

      <div className={styles.bookingControls}>
        <label className={styles.bookingLabel} htmlFor="booking-date">
          Select date (Pacific Time)
        </label>
        <input
          id="booking-date"
          type="date"
          className={styles.bookingInput}
          value={selectedDate}
          onChange={event => setSelectedDate(event.target.value)}
        />
      </div>

      <div className={styles.slotSection}>
        <label className={styles.bookingLabel} htmlFor="booking-slot">
          Available times
        </label>
        {loadingSlots ? (
          <p className={styles.slotStatus}>Loading availability...</p>
        ) : slots.length === 0 ? (
          <p className={styles.slotStatus}>No available slots on this date.</p>
        ) : (
          <select
            id="booking-slot"
            className={styles.bookingSelect}
            value={selectedSlot?.startUtc ?? ''}
            onChange={event => {
              const slot = slots.find(item => item.startUtc === event.target.value) ?? null
              setSelectedSlot(slot)
            }}
          >
            <option value="" disabled>
              Select a time
            </option>
            {slots.map(slot => (
              <option key={slot.startUtc} value={slot.startUtc}>
                {slot.startLocal} – {slot.endLocal} (Pacific {slot.startPt})
              </option>
            ))}
          </select>
        )}
      </div>

      <form className={styles.bookingForm} onSubmit={handleBook}>
        <div className={styles.bookingField}>
          <label className={styles.bookingLabel} htmlFor="booking-name">
            Full name
          </label>
          <input
            id="booking-name"
            type="text"
            className={styles.bookingInput}
            value={fullName}
            onChange={event => setFullName(event.target.value)}
            placeholder="Your name"
          />
        </div>
        <div className={styles.bookingField}>
          <label className={styles.bookingLabel} htmlFor="booking-email">
            Email
          </label>
          <input
            id="booking-email"
            type="email"
            className={styles.bookingInput}
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="you@example.com"
          />
        </div>
        {errorMessage && <p className={styles.bookingError}>{errorMessage}</p>}
        {successMessage && <p className={styles.bookingSuccess}>{successMessage}</p>}
        <button className={styles.bookingButton} type="submit" disabled={booking || !selectedSlot}>
          {booking ? 'Booking...' : 'Confirm 15-min Call'}
        </button>
      </form>
    </div>
  )
}
