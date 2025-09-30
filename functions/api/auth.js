// GitHub OAuth handler for Decap CMS on Cloudflare Pages
export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  // Handle OAuth initiation
  if (url.pathname === '/api/auth') {
    const clientId = env.GITHUB_CLIENT_ID;
    console.log('OAuth initiation - Client ID present:', !!clientId);

    if (!clientId) {
      return new Response('GitHub Client ID not configured', { status: 500 });
    }

    const redirectUri = `${url.origin}/api/auth/callback`;
    const githubUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo`;

    console.log('Redirecting to GitHub OAuth with redirect_uri:', redirectUri);
    return Response.redirect(githubUrl, 302);
  }

  // Handle OAuth callback
  if (url.pathname === '/api/auth/callback') {
    const code = url.searchParams.get('code');
    const clientId = env.GITHUB_CLIENT_ID;
    const clientSecret = env.GITHUB_CLIENT_SECRET;

    if (!code) {
      return new Response('Authorization code not provided', { status: 400 });
    }

    if (!clientId || !clientSecret) {
      return new Response('GitHub OAuth credentials not configured', { status: 500 });
    }

    try {
      // Exchange code for access token
      const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          client_id: clientId,
          client_secret: clientSecret,
          code,
        }),
      });

      const tokenData = await tokenResponse.json();

      if (tokenData.error) {
        console.error('GitHub OAuth error:', tokenData);
        return new Response('OAuth authentication failed', { status: 400 });
      }

      const { access_token } = tokenData;

      if (!access_token) {
        console.error('No access token in response:', tokenData);
        return new Response('Failed to obtain access token', { status: 500 });
      }

      console.log('Access token obtained successfully');

      // Return success page that posts message to parent window (for CMS)
      const content = JSON.stringify({ token: access_token, provider: 'github' });

      return new Response(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Authentication Success</title>
        </head>
        <body>
          <script>
            (function() {
              function postMessageToParent(message) {
                console.log('Sending message to opener:', message);
                if (window.opener) {
                  window.opener.postMessage(message, '*');
                }
              }

              try {
                const content = ${JSON.stringify(content)};
                const message = 'authorization:github:success:' + content;
                postMessageToParent(message);

                setTimeout(function() {
                  window.close();
                }, 1000);
              } catch (error) {
                console.error('Error in callback:', error);
                document.body.innerHTML = '<h1>Authentication successful!</h1><p>You can close this window.</p>';
              }
            })();
          </script>
          <h1>Authentication successful!</h1>
          <p>Completing authentication...</p>
        </body>
        </html>
      `, {
        headers: { 'Content-Type': 'text/html' },
      });
    } catch (error) {
      console.error('OAuth callback error:', error);
      return new Response('Authentication failed', { status: 500 });
    }
  }

  return new Response('Not found', { status: 404 });
}