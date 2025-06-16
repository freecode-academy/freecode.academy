import { Prisma } from '@prisma/client'
import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { getChatMessageOldsConditions } from './helpers'
import { chatMessageOldsResolver } from './resolvers/chatMessages'
import { chatMessageOldResolver } from './resolvers/chatMessage'
import { chatMessageOldsDialogResolver } from './resolvers/chatMessagesDialog'

// TODO Проработать доступы
export const ChatMessageOldQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.chatMessageOld({
      resolve: chatMessageOldResolver,
    })

    t.crud.chatMessageOlds({
      filtering: true,
      ordering: true,
      resolve: chatMessageOldsResolver,
    })

    t.nonNull.int('chatMessageOldsCount', {
      args: {
        where: 'ChatMessageOldWhereInput',
      },
      resolve(_, args, ctx) {
        return ctx.prisma.chatMessageOld.count({
          where: getChatMessageOldsConditions(
            args.where as Prisma.ChatMessageOldWhereInput | undefined,
            ctx
          ),
        })
      },
    })

    t.nonNull.list.nonNull.field('chatMessageOldsDialog', {
      type: 'ChatMessageOld',
      resolve: chatMessageOldsDialogResolver,
    })
  },
})

export const ChatMessageOldExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createChatMessageOldProcessor', {
      deprecation: 'legacy',
      type: 'ChatMessageOldResponse',
      args: {
        data: nonNull('ChatMessageOldCreateInput'),
      },
    })
  },
})

export const ChatMessageOld = objectType({
  name: 'ChatMessageOld',
  sourceType: {
    module: '@prisma/client',
    export: 'ChatMessageOld',
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

export const ChatMessageOldCreateInput = inputObjectType({
  name: 'ChatMessageOldCreateInput',
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

export const ChatMessageOldResponse = objectType({
  name: 'ChatMessageOldResponse',
  definition(t) {
    t.nonNull.boolean('success')
    t.nonNull.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'ChatMessageOld',
    })
    t.field('reply', {
      type: 'ChatMessageOld',
    })
    t.field('createdUser', {
      type: 'AuthPayload',
      description: 'Created user for dialog, if user not authorized',
    })
  },
})
