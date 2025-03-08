import { Prisma } from '@prisma/client'
import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { getChatMessagesConditions } from './helpers'
import { chatMessagesResolver } from './resolvers/chatMessages'
import { chatMessageResolver } from './resolvers/chatMessage'

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
  },
})

export const ChatMessageExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createChatMessageProcessor', {
      type: 'ChatMessageResponse',
      args: {
        data: nonNull('ChatMessageCreateInput'),
      },
      // TODO Restore logic
      resolve(_, _args, _ctx) {
        return {
          success: false,
          message: 'Not implemented',
          errors: [],
        }
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
    t.field('content', {
      type: 'JSON',
    })
    t.field('Room', {
      type: 'ChatRoomCreateOneWithoutMessagesInput',
    })
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
  },
})
