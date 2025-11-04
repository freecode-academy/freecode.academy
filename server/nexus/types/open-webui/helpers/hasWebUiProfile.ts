import { User } from '@prisma/client'
import { fetchOpenWebUiUsers } from './fetchOpenWebUiUsers'
import { NexusGenObjects } from 'server/nexus/generated/nexus'

export async function hasWebUiProfile(
  user: User | NexusGenObjects['User'],
  strict = false
) {
  const email = 'email' in user && typeof user.email === 'string' && user.email

  if (!email) {
    return false
  }

  try {
    const { users } = await fetchOpenWebUiUsers()
    return users.some((user: { email: string }) => user.email === email)
  } catch (error) {
    if (strict) {
      throw error
    }

    console.error('Error checking WebUI profile:', error)
    return false
  }
}
