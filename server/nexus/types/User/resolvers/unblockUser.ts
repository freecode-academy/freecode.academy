import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'

/**
 * Разблокировка пользователя
 */
// @ts-expect-error types
export const unblockUser: FieldResolver<'Mutation', 'unblockUser'> = async (
  _,
  args,
  ctx
) => {
  const where = args.where as Prisma.UserWhereUniqueInput

  return ctx.prisma.user.update({
    where,
    data: {
      blocked: false,
    },
  })
}
