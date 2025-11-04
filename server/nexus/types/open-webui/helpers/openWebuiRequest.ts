type openWebuiRequestProps = {
  method?: 'GET' | 'POST'
  body?: Record<string, unknown>
}

export async function openWebuiRequest(
  endpoint: string,
  { method = 'GET', body }: openWebuiRequestProps = {}
) {
  const OPEN_WEBUI_URL = process.env.OPEN_WEBUI_URL
  const OPEN_WEBUI_API_ADMIN_TOKEN = process.env.OPEN_WEBUI_API_ADMIN_TOKEN

  if (!OPEN_WEBUI_URL) {
    throw new Error('OPEN_WEBUI_URL env is empty')
  }

  if (!OPEN_WEBUI_API_ADMIN_TOKEN) {
    throw new Error('OPEN_WEBUI_API_ADMIN_TOKEN env is empty')
  }

  const headers: HeadersInit = {
    Authorization: `Bearer ${OPEN_WEBUI_API_ADMIN_TOKEN}`,
  }

  if (method === 'POST') {
    headers['Content-Type'] = 'application/json'
  }

  const response = await fetch(`${OPEN_WEBUI_URL}${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  })

  if (!response.ok) {
    throw new Error(
      `Failed to fetch users: ${response.status} ${response.statusText}`
    )
  }

  return response.json()
}
