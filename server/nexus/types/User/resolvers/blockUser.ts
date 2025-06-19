import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'

/**
 * Блокировка пользователя
 */
// @ts-expect-error types
export const blockUser: FieldResolver<'Mutation', 'blockUser'> = async (
  _,
  args,
  ctx
) => {
  const where = args.where as Prisma.UserWhereUniqueInput

  return ctx.prisma.user.update({
    where,
    data: {
      blocked: true,

      // Сразу удаляем и токены авторизации
      Tokens: {
        deleteMany: {},
      },
    },
  })
}
