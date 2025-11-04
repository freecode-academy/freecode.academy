import { FieldResolver } from 'nexus'

export const n8nSendAiMessage: FieldResolver<
  'Mutation',
  'n8nSendAiMessage'
> = async (_, { text, devMode = false }, ctx) => {
  const N8N_SERVICE_URL = process.env.N8N_SERVICE_URL

  if (!N8N_SERVICE_URL) {
    throw new Error('N8N_SERVICE_URL env is empty')
  }

  const { req } = ctx

  const token = req?.headers.authorization ?? ''

  return fetch(
    `${N8N_SERVICE_URL}/${devMode ? 'webhook-test' : 'webhook'}/message`,
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        accept: 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ text }),
    }
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.statusText)
    }

    return response
  })
}
