import { Prisma, Resource } from '@prisma/client'
import { PrismaContext } from 'server/nexus/context'

import { uid } from 'uid'
import { createNotifications } from './helpers/createNotifications'
import { prepareContent } from './helpers/prepareContent'
import { prepareName, prepareUri } from './helpers/prepareUri'

// TODO Надо перенести в отдельный метод формирования ответов процессоров
export function addError(message: string) {
  throw new Error(message)
}

/**
 * Создание ресурса
 */
export const createResource = async (
  args: Prisma.ResourceCreateArgs,
  ctx: PrismaContext
): Promise<Resource | undefined> => {
  const { currentUser } = ctx

  const { id: currentUserId } = currentUser || {}

  if (!currentUserId) {
    throw new Error('Необходимо авторизоваться')
  }

  const { data } = args

  const { id: newResourceId = uid(25) } = data

  Object.assign(data, {
    id: newResourceId,
  })

  Object.assign(args, {
    data,
  })

  const uriData = await prepareUri(args, undefined, ctx)

  prepareContent(args.data, data)

  Object.assign(data, {
    // PrismaProject,
    ...uriData,
    // ...this.getCreatedBy(),
    name: prepareName(args),
  })

  Object.assign(args, {
    data,
  })

  if (!data.uri) {
    // return this.addError("Не был сформирован uri документа");

    throw new Error('Не был сформирован uri документа')
  }

  // return super.create(method, args, info);

  const createData: Prisma.ResourceCreateInput = args.data

  // CreatedBy
  createData.User = {
    connect: {
      id: currentUserId,
    },
  }

  const result = await ctx.prisma.resource.create({
    data: createData,
  })

  /**
   * Отправляем уведомления
   */
  createNotifications(result, ctx)

  return result
}
