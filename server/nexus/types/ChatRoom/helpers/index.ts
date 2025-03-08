import { Prisma } from '@prisma/client'
import { PrismaContext } from 'server/nexus/context'

type Where = NonNullable<Prisma.ChatRoomFindManyArgs['where']>
type WhereAnd = NonNullable<Where['AND']>
type WhereOr = NonNullable<Where['OR']>

export function getChatRoomsConditions(
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

    whereOr.push({
      isPublic: true,
    })

    if (currentUser) {
      whereOr.push({
        OR: [
          {
            CreatedBy: currentUser.id,
          },
          {
            User_ChatRoomsMembers: {
              some: {
                User: {
                  id: currentUser.id,
                },
              },
            },
          },
        ],
      })
    }

    whereAnd.push({
      OR: whereOr,
    })
  }

  const where: Where | undefined = whereAnd.length
    ? { AND: whereAnd }
    : undefined

  return where
}
