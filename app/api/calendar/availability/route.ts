import { NextResponse } from 'next/server'
import { listAvailability } from '@/lib/googleCalendar'

const isValidDate = (value: string) => /^\d{4}-\d{2}-\d{2}$/.test(value)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const date = typeof body?.date === 'string' ? body.date : ''
    const userTimeZone = typeof body?.userTimeZone === 'string' ? body.userTimeZone : undefined

    if (!date || !isValidDate(date)) {
      return NextResponse.json({ error: 'Invalid date.' }, { status: 400 })
    }

    const availability = await listAvailability(date, userTimeZone)
    return NextResponse.json(availability)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : String(error)
    console.error('Availability lookup failed:', errorMessage)
    console.error('Stack:', errorStack)
    return NextResponse.json(
      { 
        error: 'Unable to load availability.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    )
  }
}
