// GitHub API proxy for Decap CMS
// Proxies all GitHub API requests with authentication
export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);

  // Handle OPTIONS preflight requests
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'Authorization, Content-Type',
      },
    });
  }

  // Extract the path after /github-proxy/
  const pathSegments = url.pathname.split('/').filter(Boolean);
  const apiPath = pathSegments.slice(1).join('/'); // Remove 'github-proxy' prefix

  // Get the authorization token from the request
  const authHeader = request.headers.get('Authorization');

  // Proxy the request to GitHub API
  const githubUrl = `https://api.github.com/${apiPath}${url.search}`;

  const githubHeaders = new Headers();

  // Only add Authorization if present (allows unauthenticated requests for public data)
  if (authHeader) {
    githubHeaders.set('Authorization', authHeader);
  }

  githubHeaders.set('Accept', 'application/vnd.github.v3+json');
  githubHeaders.set('User-Agent', 'Decap-CMS-Proxy');

  // Copy Content-Type if present
  const contentType = request.headers.get('Content-Type');
  if (contentType) {
    githubHeaders.set('Content-Type', contentType);
  }

  const githubRequest = new Request(githubUrl, {
    method: request.method,
    headers: githubHeaders,
    body: request.method !== 'GET' && request.method !== 'HEAD' ? await request.arrayBuffer() : undefined,
  });

  try {
    console.log(`Proxying ${request.method} ${githubUrl}`);
    const response = await fetch(githubRequest);

    // Get response body
    const body = await response.arrayBuffer();

    // Create response with CORS headers
    const responseHeaders = new Headers(response.headers);
    responseHeaders.set('Access-Control-Allow-Origin', '*');
    responseHeaders.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    responseHeaders.set('Access-Control-Allow-Headers', 'Authorization, Content-Type');

    return new Response(body, {
      status: response.status,
      statusText: response.statusText,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error('GitHub proxy error:', error);
    return new Response(JSON.stringify({ message: 'Proxy error', error: error.message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  }
}