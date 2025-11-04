import { openWebuiRequest } from './openWebuiRequest'

export type OpenWebUiUser = {
  id: string
  email: string
  name?: string
}

export type OpenWebUiUsersResponse = {
  users: OpenWebUiUser[]
  total: number
}

export async function fetchOpenWebUiUsers(): Promise<OpenWebUiUsersResponse> {
  const data: OpenWebUiUsersResponse = await openWebuiRequest('/api/v1/users/')

  return data
}
