import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { createPassword } from './helpers/createPassword'
import { checkUserUniqueness } from './helpers/checkUserUniqueness'

export const updateCurrentUser: FieldResolver<
  'Mutation',
  'updateCurrentUser'
> = async (_, args, ctx) => {
  const { currentUser } = ctx

  const { password: passwordProps, ...data } = args.data

  if (!currentUser) {
    throw new Error('Please sign in to continue')
  }

  const uniquenessCheck = await checkUserUniqueness({
    prisma: ctx.prisma,
    username: data.username ?? undefined,
    email: undefined,
    excludeUserId: currentUser.id,
  })

  if (!uniquenessCheck.isUnique) {
    throw new Error(uniquenessCheck.error)
  }

  const updateData: Prisma.UserUpdateArgs['data'] = data

  if (passwordProps) {
    updateData.password = await createPassword(passwordProps)
  }

  return ctx.prisma.user.update({
    data: updateData,
    where: {
      id: currentUser.id,
    },
  })
}
