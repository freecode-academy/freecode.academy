type JsonRpcRequest = {
  jsonrpc: '2.0'
  id: number
  method: string
  params?: Record<string, unknown>
}

type JsonRpcResponse = {
  jsonrpc: '2.0'
  id: number
  result?: unknown
  error?: {
    code: number
    message: string
    data?: unknown
  }
}

export class McpClient {
  private baseUrl: string
  private sessionId: string | null = null
  private requestId = 0
  private pendingRequests = new Map<
    number,
    {
      resolve: (value: JsonRpcResponse) => void
      reject: (error: Error) => void
    }
  >()
  private sseReader: ReadableStreamDefaultReader<Uint8Array> | null = null
  private initialized = false

  constructor(baseUrl = '/webhook/mcp') {
    this.baseUrl = baseUrl
  }

  private async sendRequest(
    method: string,
    params?: Record<string, unknown>
  ): Promise<JsonRpcResponse> {
    if (!this.sessionId) {
      await this.connect()
    }

    const id = ++this.requestId
    const request: JsonRpcRequest = {
      jsonrpc: '2.0',
      id,
      method,
      ...(params && { params }),
    }

    const responsePromise = new Promise<JsonRpcResponse>((resolve, reject) => {
      this.pendingRequests.set(id, { resolve, reject })
    })

    const response = await fetch(
      `${this.baseUrl}?sessionId=${this.sessionId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json, text/event-stream',
        },
        body: JSON.stringify(request),
      }
    )

    if (!response.ok) {
      this.pendingRequests.delete(id)
      throw new Error(`MCP request failed: ${response.status}`)
    }

    const contentType = response.headers.get('content-type')
    if (contentType?.includes('application/json')) {
      this.pendingRequests.delete(id)
      return response.json()
    }

    return responsePromise
  }

  async connect(): Promise<void> {
    const response = await fetch(this.baseUrl, {
      headers: {
        Accept: 'application/json, text/event-stream',
      },
    })

    if (!response.ok) {
      throw new Error(`Failed to connect to MCP: ${response.status}`)
    }

    const reader = response.body?.getReader()
    if (!reader) {
      throw new Error('No response body')
    }

    this.sseReader = reader
    const decoder = new TextDecoder()
    let buffer = ''

    const processStream = async () => {
      try {
        // eslint-disable-next-line no-constant-condition
        while (true) {
          const { done, value } = await reader.read()
          if (done) {
            break
          }

          buffer += decoder.decode(value, { stream: true })

          const lines = buffer.split('\n')
          buffer = lines.pop() || ''

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6).trim()
              if (!data) {
                continue
              }

              try {
                const json = JSON.parse(data) as JsonRpcResponse
                if (json.id && this.pendingRequests.has(json.id)) {
                  const pending = this.pendingRequests.get(json.id)
                  this.pendingRequests.delete(json.id)
                  pending?.resolve(json)
                }
              } catch {
                const match = data.match(/sessionId=([a-f0-9-]+)/)
                if (match && !this.sessionId) {
                  this.sessionId = match[1]
                }
              }
            }
          }
        }
      } catch (error) {
        console.error('SSE stream error:', error)
      }
    }

    const waitForSession = new Promise<void>((resolve, reject) => {
      const checkSession = () => {
        if (this.sessionId) {
          resolve()
        } else {
          setTimeout(checkSession, 50)
        }
      }
      setTimeout(
        () => reject(new Error('Timeout waiting for sessionId')),
        10000
      )
      checkSession()
    })

    processStream()
    await waitForSession
    await this.initialize()
  }

  private async initialize(): Promise<void> {
    if (this.initialized) {
      return
    }

    await this.sendRequest('initialize', {
      protocolVersion: '2024-11-05',
      capabilities: {},
      clientInfo: {
        name: 'n8n-selfhost-chat',
        version: '1.0.0',
      },
    })

    await this.sendRequest('notifications/initialized')
    this.initialized = true
  }

  async listTools(): Promise<unknown[]> {
    const response = await this.sendRequest('tools/list')
    return (response.result as { tools: unknown[] })?.tools || []
  }

  async callTool(
    name: string,
    args: Record<string, unknown>
  ): Promise<unknown> {
    const response = await this.sendRequest('tools/call', {
      name,
      arguments: args,
    })

    if (response.error) {
      throw new Error(response.error.message)
    }

    return response.result
  }

  async sendMessage(message: string): Promise<string> {
    if (!this.sessionId) {
      await this.connect()
    }

    if (!this.sessionId) {
      throw new Error('Failed to establish session')
    }

    const result = await this.callTool('Send_Message', {
      message,
      sessionId: this.sessionId,
      // TODO refactor
      token: localStorage.getItem('token') || '',
    })

    const content = (
      result as { content?: Array<{ type?: string; text?: string }> }
    )?.content
    if (content?.[0]?.type === 'text' && content[0].text) {
      try {
        const parsed = JSON.parse(content[0].text)
        if (Array.isArray(parsed) && parsed[0]?.output) {
          return parsed[0].output
        }
        if (parsed?.output) {
          return parsed.output
        }
        return content[0].text
      } catch {
        return content[0].text
      }
    }

    return JSON.stringify(result)
  }

  disconnect(): void {
    this.sseReader?.cancel()
    this.sseReader = null
    this.sessionId = null
    this.initialized = false
    this.pendingRequests.clear()
  }
}

let mcpClientInstance: McpClient | null = null

export function getMcpClient(): McpClient {
  if (!mcpClientInstance) {
    mcpClientInstance = new McpClient()
  }
  return mcpClientInstance
}
