// Cloudflare Pages Function to handle contact form submissions
export async function onRequestPost(context) {
  try {
    const { request } = context;
    const formData = await request.formData();

    // Get form fields
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    const botField = formData.get('bot-field');

    // Check for spam (honeypot)
    if (botField) {
      return new Response(JSON.stringify({ error: 'Spam detected' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Validate required fields
    if (!firstName || !lastName || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // For now, just return success
    // TODO: Integrate with email service (e.g., SendGrid, Mailgun, or Cloudflare Email Workers)
    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      subject,
      message
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}