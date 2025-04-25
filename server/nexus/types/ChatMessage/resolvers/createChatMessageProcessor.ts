import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { createMessage } from '../helpers/createMessage'

export const createChatMessageProcessorResolver: FieldResolver<
  'Mutation',
  'createChatMessageProcessor'
> = async (_root, args, ctx) => {
  const { currentUser } = ctx

  const { toUser, content } = args.data

  const toUserWgere = toUser as Prisma.UserWhereUniqueInput

  return createMessage({
    fromUser: currentUser,
    toUser: toUserWgere,
    message: content,
    ctx,
  })
}
