import { Prisma } from '@prisma/client'
import { PrismaContext } from 'server/nexus/context'
import { getChatRoomsConditions } from '../../ChatRoom/helpers'

type Where = NonNullable<Prisma.ChatMessageOldFindManyArgs['where']>
type WhereAnd = NonNullable<Where['AND']>
type WhereOr = NonNullable<Where['OR']>

export function getChatMessageOldsConditions(
  whereProps: Where | undefined,
  ctx: PrismaContext
) {
  const { currentUser } = ctx

  const whereAnd: WhereAnd = []

  if (whereProps) {
    whereAnd.push(whereProps as Where)
  }

  if (!currentUser?.sudo) {
    const whereOr: WhereOr = []

    // TODO Adde isPublic field to ChatMessageOld
    // whereOr.push({
    //   isPublic: true,
    // })

    // if (currentUser) {
    whereOr.push({
      OR: [
        // {
        //   CreatedBy: currentUser.id,
        // },
        {
          ChatRoom: getChatRoomsConditions(undefined, ctx),
        },
      ],
    })
    // }

    whereAnd.push({
      OR: whereOr,
    })
  }

  const where: Where | undefined = whereAnd.length
    ? { AND: whereAnd }
    : undefined

  return where
}
