import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export const handler = async (event) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    }
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers,
      body: 'Method Not Allowed' 
    }
  }

  try {
    const { email } = JSON.parse(event.body)

    // Validate email
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Invalid email address' })
      }
    }

    const { data, error } = await supabase
      .from('newsletter_subscriptions')
      .insert([{ email }])

    if (error) {
      // Check if the error is due to a unique constraint violation
      if (error.code === '23505') {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'This email is already subscribed' })
        }
      }
      throw error
    }

    console.log(`New newsletter subscription: ${email}`)

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Subscribed successfully' })
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Failed to subscribe' })
    }
  }
}