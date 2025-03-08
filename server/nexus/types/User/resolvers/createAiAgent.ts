import { FieldResolver } from 'nexus'
import { createUser } from './helpers/createUser'

export const createAiAgentUserResolver: FieldResolver<
  'Mutation',
  'createAiAgentUser'
> = async (_, args, ctx) => {
  const { currentUser } = ctx

  const { prompt, userData } = args.data

  if (!currentUser?.sudo) {
    throw new Error('Accee denied')
  }

  return createUser(
    {
      ...userData,
      AiAgent: {
        create: {
          prompt,
        },
      },
    },
    ctx
  )
}
