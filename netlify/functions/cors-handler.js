// netlify/functions/cors-handler.js

exports.handler = async (event, context) => {
    const allowedOrigins = ['https://*.netlify.app'];
  
    // Get the Origin header
    const origin = event.headers.origin;
  
    // Check if the request's origin matches the allowed origins
    if (!origin || allowedOrigins.some((allowedOrigin) => origin.endsWith(allowedOrigin))) {
      return {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': origin || '*', // Allow the origin if matched
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
        body: JSON.stringify({ message: 'Hello from Netlify function with CORS!' }),
      };
    } else {
      return {
        statusCode: 403,
        body: JSON.stringify({ message: 'Forbidden: Origin not allowed' }),
      };
    }
  };
  