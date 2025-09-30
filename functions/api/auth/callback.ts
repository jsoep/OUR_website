export async function onRequest(context: any) {
  const { request, env } = context;
  const url = new URL(request.url);

  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  if (!code) {
    return new Response('No code provided', { status: 400 });
  }

  // GitHub OAuth App credentials
  const clientId = env.GITHUB_CLIENT_ID;
  const clientSecret = env.GITHUB_CLIENT_SECRET;

  // Debug: log what we received (don't log secrets in production!)
  console.log('clientId:', clientId ? 'present' : 'missing');
  console.log('clientSecret:', clientSecret ? 'present' : 'missing');
  console.log('env keys:', Object.keys(env));

  if (!clientId || !clientSecret) {
    return new Response(`OAuth not configured. ClientId: ${clientId ? 'present' : 'missing'}, ClientSecret: ${clientSecret ? 'present' : 'missing'}`, { status: 500 });
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }),
    });

    const tokenData = await tokenResponse.json();

    // Debug: log the response from GitHub
    console.log('GitHub response:', tokenData);

    if (tokenData.error) {
      return new Response(`GitHub OAuth error: ${tokenData.error_description || tokenData.error}. Response: ${JSON.stringify(tokenData)}`, { status: 400 });
    }

    // Return the token in the format Decap CMS expects
    const responseHtml = `
<!DOCTYPE html>
<html>
<head>
  <title>Authenticating...</title>
</head>
<body>
  <script>
    (function() {
      function receiveMessage(e) {
        console.log("receiveMessage %o", e);
        window.opener.postMessage(
          'authorization:github:success:${JSON.stringify(tokenData)}',
          e.origin
        );
        window.removeEventListener("message", receiveMessage, false);
      }
      window.addEventListener("message", receiveMessage, false);
      console.log("Sending message to opener");
      window.opener.postMessage("authorizing:github", "*");
    })();
  </script>
</body>
</html>`;

    return new Response(responseHtml, {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  } catch (error) {
    return new Response(`Error during OAuth: ${error}`, { status: 500 });
  }
}