import { Prisma } from '@prisma/client'
import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { getChatMessagesConditions } from './helpers'
import { chatMessagesResolver } from './resolvers/chatMessages'
import { chatMessageResolver } from './resolvers/chatMessage'
import { chatMessagesDialogResolver } from './resolvers/chatMessagesDialog'

// TODO Проработать доступы
export const ChatMessageQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.chatMessage({
      resolve: chatMessageResolver,
    })

    t.crud.chatMessages({
      filtering: true,
      ordering: true,
      resolve: chatMessagesResolver,
    })

    t.nonNull.int('chatMessagesCount', {
      args: {
        where: 'ChatMessageWhereInput',
      },
      resolve(_, args, ctx) {
        return ctx.prisma.chatMessage.count({
          where: getChatMessagesConditions(
            args.where as Prisma.ChatMessageWhereInput | undefined,
            ctx
          ),
        })
      },
    })

    t.nonNull.list.nonNull.field('chatMessagesDialog', {
      type: 'ChatMessage',
      resolve: chatMessagesDialogResolver,
    })
  },
})

export const ChatMessageExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createChatMessageProcessor', {
      deprecation: 'legacy',
      type: 'ChatMessageResponse',
      args: {
        data: nonNull('ChatMessageCreateInput'),
      },
    })
  },
})

export const ChatMessage = objectType({
  name: 'ChatMessage',
  sourceType: {
    module: '@prisma/client',
    export: 'ChatMessage',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.field('content', {
      type: 'JSON',
    })
    t.string('contentText')
    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })
    t.string('toUser')
    t.field('ToUser', {
      type: 'User',
      resolve({ toUser }, _, ctx) {
        return toUser
          ? ctx.prisma.user.findUnique({ where: { id: toUser } })
          : null
      },
    })
    t.field('Room', {
      type: 'ChatRoom',
      resolve({ Room }, _, ctx) {
        return Room
          ? ctx.prisma.chatRoom.findUnique({ where: { id: Room } })
          : null
      },
    })
  },
})

export const ChatMessageCreateInput = inputObjectType({
  name: 'ChatMessageCreateInput',
  definition(t) {
    t.nonNull.string('content')
    t.nonNull.field('toUser', {
      type: 'UserWhereUniqueInput',
    })
    // t.field('Room', {
    //   type: 'ChatRoomCreateOneWithoutMessagesInput',
    // })
  },
})

export const ChatRoomCreateOneWithoutMessagesInput = inputObjectType({
  name: 'ChatRoomCreateOneWithoutMessagesInput',
  definition(t) {
    t.id('to')
    t.field('connect', {
      type: 'ChatRoomWhereUniqueInput',
    })
  },
})

export const ChatMessageResponse = objectType({
  name: 'ChatMessageResponse',
  definition(t) {
    t.nonNull.boolean('success')
    t.nonNull.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'ChatMessage',
    })
    t.field('reply', {
      type: 'ChatMessage',
    })
    t.field('createdUser', {
      type: 'AuthPayload',
      description: 'Created user for dialog, if user not authorized',
    })
  },
})
