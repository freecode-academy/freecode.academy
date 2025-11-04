import { FieldResolver } from 'nexus'
import { fetchOpenWebUiUsers } from '../helpers/fetchOpenWebUiUsers'

export const openWebUiUsersResolver: FieldResolver<
  'Query',
  'openWebUiUsers'
> = async () => {
  return fetchOpenWebUiUsers()
}
