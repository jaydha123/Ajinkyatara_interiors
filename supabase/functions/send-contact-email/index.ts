import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { lookingFor, houseType, carpetArea, name, phone, city } = await req.json()

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    
    console.log('RESEND_API_KEY exists:', !!RESEND_API_KEY)
    console.log('RESEND_API_KEY length:', RESEND_API_KEY?.length || 0)
    
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set in environment variables')
      throw new Error('RESEND_API_KEY is not configured')
    }

    // Send email using Resend API
    const emailData = {
      from: 'onboarding@resend.dev',
      to: ['dhamalejay007@gmail.com'],
      subject: `New Contact Form Submission - ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>City:</strong> ${city}</p>
        <p><strong>Looking for:</strong> ${lookingFor}</p>
        <p><strong>House Type:</strong> ${houseType}</p>
        <p><strong>Carpet Area:</strong> ${carpetArea}</p>
        <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
      `,
    }

    console.log('Sending email to Resend API...')
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    console.log('Resend API response status:', response.status)
    
    const responseText = await response.text()
    console.log('Resend API response body:', responseText)

    if (!response.ok) {
      console.error('Resend API error:', responseText)
      throw new Error(`Resend API error (${response.status}): ${responseText}`)
    }

    const result = JSON.parse(responseText)
    console.log('Email sent successfully:', result.id)

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully', id: result.id }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    return new Response(
      JSON.stringify({ success: false, error: errorMessage }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    )
  }
})