import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    
    // Get form fields
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const email = formData.get('email') as string
    const subject = formData.get('subject') as string
    const message = formData.get('message') as string
    const botField = formData.get('bot-field') as string
    
    // Check for spam (honeypot)
    if (botField) {
      return NextResponse.json({ error: 'Spam detected' }, { status: 400 })
    }
    
    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    
    // Forward to Netlify Forms
    const netlifyFormData = new FormData()
    netlifyFormData.append('form-name', 'contact')
    netlifyFormData.append('firstName', firstName)
    netlifyFormData.append('lastName', lastName)
    netlifyFormData.append('email', email)
    netlifyFormData.append('subject', subject)
    netlifyFormData.append('message', message)
    
    // Submit to Netlify
    const netlifyResponse = await fetch(`${process.env.URL || 'https://subtle-sawine-4de7d5.netlify.app'}/contact`, {
      method: 'POST',
      body: netlifyFormData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    
    if (netlifyResponse.ok) {
      return NextResponse.json({ success: true })
    } else {
      throw new Error('Failed to submit form')
    }
  } catch (error) {
    console.error('Form submission error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}