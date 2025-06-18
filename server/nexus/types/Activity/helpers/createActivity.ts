import {
  ActivityType,
  ChatMessage,
  MindLog,
  Prisma,
  User,
} from '@prisma/client'
import { PrismaContext } from '../../../context'
import { PUBSUB_TYPE } from '../../../../PubSub/interfaces'
import {
  NexusGenInterfaces,
  NexusGenRootTypes,
} from 'server/nexus/generated/nexus'

type createActivityProps = {
  ctx: PrismaContext
  userId: string
  payload:
    | {
        type: typeof ActivityType.UrlChanged
        url: string
      }
    | {
        type: typeof ActivityType.UserCreated
        user: User
      }
    | {
        type: typeof ActivityType.SendMessaged
        message: ChatMessage
      }
    | {
        type: typeof ActivityType.MindLog
        MindLog: MindLog
      }
    | ({
        type: typeof ActivityType.ToolCall
      } & Pick<NexusGenRootTypes['ActivityToolCall'], 'name' | 'args'>)
}

export function createActivity({
  ctx,
  userId,
  payload,
}: createActivityProps): void {
  const activityData: Prisma.ActivityCreateInput = {
    User: {
      connect: {
        id: userId,
      },
    },
    type: payload.type,
  }

  ctx.prisma.activity
    .create({
      data: activityData,
    })
    .then((activity) => {
      let activityInterface: NexusGenInterfaces['Activity']

      switch (payload.type) {
        case 'UrlChanged':
          activityInterface = {
            ...activity,
            url: '/???',
          }

          break

        case 'SendMessaged':
          activityInterface = {
            ...activity,
            ChatMessage: payload.message,
          }

          break

        case 'UserCreated':
          activityInterface = {
            ...activity,
            // @ts-expect-error types
            User: payload.user,
          }

          break

        case 'MindLog':
          activityInterface = {
            ...activity,
            MindLog: payload.MindLog,
          }

          break

        case 'ToolCall':
          activityInterface = {
            ...activity,
            ...payload,
          }

          break
      }

      ctx.pubsub.publish(PUBSUB_TYPE.ACTIVITY_ADDED, activityInterface)
    })
    .catch(console.error)
}
