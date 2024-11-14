import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)

export const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' }
  }

  try {
    const { name, email, subject, message } = JSON.parse(event.body)

    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        { name, email, subject, message }
      ])

    if (error) throw error

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form submitted successfully' })
    }
  } catch (error) {
    console.error('Error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to submit form' })
    }
  }
}