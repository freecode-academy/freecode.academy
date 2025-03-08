/* eslint-disable no-console */
import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { createMessage } from '../helpers/createMessage'

export const createChatMessageProcessorResolver: FieldResolver<
  'Mutation',
  'createChatMessageProcessor'
> = async (_root, args, ctx) => {
  const { currentUser } = ctx

  if (!currentUser) {
    throw new Error('Access denied')
  }

  const { toUser, content } = args.data

  const toUserWgere = toUser as Prisma.UserWhereUniqueInput

  // const ToUser = await prisma.user.findUnique({
  //   where: toUserWgere,
  // })

  // if (!ToUser) {
  //   throw new Error('User not found')
  // }

  // if (currentUser.id === ToUser.id) {
  //   throw new Error('You can not send message to yourself')
  // }

  // const message = await prisma.chatMessage.create({
  //   data: {
  //     contentText: content,
  //     ToUser: {
  //       connect: toUserWgere,
  //     },
  //     User: {
  //       connect: {
  //         id: currentUser.id,
  //       },
  //     },
  //   },
  // })

  // console.log('message', message)

  // if (ToUser.isAiAgent) {
  //   // TODO Implement AI agent
  // }

  // return {
  //   success: true,
  //   message: '',
  //   errors: [],
  //   data: message,
  // }

  return createMessage({
    fromUser: currentUser,
    toUser: toUserWgere,
    message: content,
    ctx,
  })
}
