export async function onRequest(context: any) {
  const { request, env } = context;
  const url = new URL(request.url);

  const provider = url.searchParams.get('provider');
  const site_id = url.searchParams.get('site_id');

  if (provider !== 'github') {
    return new Response('Only GitHub provider is supported', { status: 400 });
  }

  // GitHub OAuth App credentials (these will be set as environment variables)
  const clientId = env.GITHUB_OAUTH_CLIENT_ID;
  const redirectUri = `${url.origin}/api/callback`;

  if (!clientId) {
    return new Response('OAuth not configured', { status: 500 });
  }

  // Generate a random state for CSRF protection
  const state = crypto.randomUUID();

  // Build GitHub OAuth authorization URL
  const githubAuthUrl = new URL('https://github.com/login/oauth/authorize');
  githubAuthUrl.searchParams.set('client_id', clientId);
  githubAuthUrl.searchParams.set('redirect_uri', redirectUri);
  githubAuthUrl.searchParams.set('scope', 'repo,user');
  githubAuthUrl.searchParams.set('state', state);

  // Redirect to GitHub
  return Response.redirect(githubAuthUrl.toString(), 302);
}