import { FieldResolver } from 'nexus'
import { createUser } from './helpers/createUser'

// @ts-expect-error types
export const signup: FieldResolver<'Mutation', 'signup'> = async (
  _,
  args,
  ctx
) => {
  let data = args.data

  if (!data) {
    data = {
      showEmail: false,
      showFullname: false,
    }
  }

  return createUser(data, ctx)
}
