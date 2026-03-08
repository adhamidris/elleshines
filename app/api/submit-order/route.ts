import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL

    if (!scriptUrl) {
      // Script URL not yet configured — log the order and accept it gracefully
      console.log('[Elle Shines] Order received (Google Script not configured):', body)
      return NextResponse.json({ success: true })
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10000),
    })

    if (!response.ok) {
      throw new Error(`Google Script returned ${response.status}`)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('[Elle Shines] Order submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit order. Please try again.' },
      { status: 500 }
    )
  }
}
