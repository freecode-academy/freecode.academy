import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { checkUserUniqueness } from './helpers/checkUserUniqueness'

export const updateOneUser: FieldResolver<'Mutation', 'updateOneUser'> = async (
  _,
  args,
  ctx
) => {
  const { currentUser } = ctx

  const data = args.data as Prisma.UserUpdateArgs['data']
  const where = args.where as Prisma.UserUpdateArgs['where']

  if (!currentUser) {
    throw new Error('Please sign in to continue')
  }

  if (!currentUser.sudo) {
    throw new Error('Access denied')
  }

  const username =
    typeof data.username === 'string' ? data.username : data.username?.set
  const email = typeof data.email === 'string' ? data.email : data.email?.set

  const uniquenessCheck = await checkUserUniqueness({
    prisma: ctx.prisma,
    username: username ?? undefined,
    email: email ?? undefined,
    excludeUserId: where.id,
  })

  if (!uniquenessCheck.isUnique) {
    throw new Error(uniquenessCheck.error)
  }

  const updateData: Prisma.UserUpdateArgs['data'] = data

  return ctx.prisma.user.update({
    data: updateData,
    where,
  })
}
