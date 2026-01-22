import { NextResponse } from 'next/server'
import { bookSlot } from '@/lib/googleCalendar'

const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const startUtc = typeof body?.startUtc === 'string' ? body.startUtc : ''
    const name = typeof body?.name === 'string' ? body.name.trim() : ''
    const email = typeof body?.email === 'string' ? body.email.trim() : ''
    const userTimeZone = typeof body?.userTimeZone === 'string' ? body.userTimeZone : undefined

    if (!startUtc) {
      return NextResponse.json({ error: 'Missing time slot.' }, { status: 400 })
    }

    if (!name) {
      return NextResponse.json({ error: 'Missing name.' }, { status: 400 })
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const booking = await bookSlot({ startUtc, name, email, userTimeZone })
    return NextResponse.json(booking)
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    const errorStack = error instanceof Error ? error.stack : String(error)
    console.error('Booking failed:', errorMessage)
    console.error('Stack:', errorStack)
    return NextResponse.json(
      { 
        error: 'Unable to complete booking.',
        details: process.env.NODE_ENV === 'development' ? errorMessage : undefined
      },
      { status: 500 }
    )
  }
}
