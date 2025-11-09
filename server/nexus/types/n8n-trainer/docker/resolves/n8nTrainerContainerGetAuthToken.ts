import { FieldResolver } from 'nexus'
import { N8nTrainerContainerAthMap } from '../interfaces'

export const n8nTrainerContainerGetAuthTokenResolver: FieldResolver<
  'Query',
  'n8nTrainerContainerGetAuthToken'
> = async (_, { browserId }) => {
  const token = N8nTrainerContainerAthMap.get(browserId)

  if (!token) {
    return new Promise((_, reject) => {
      setTimeout(() => reject(new Error('Can not get token')), 3000)
    })
  }

  N8nTrainerContainerAthMap.delete(browserId)

  return token
}
