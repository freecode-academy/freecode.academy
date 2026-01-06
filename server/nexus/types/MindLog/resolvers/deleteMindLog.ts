import { FieldResolver } from 'nexus'

export const deleteMindLogResolver: FieldResolver<
  'Mutation',
  'deleteMindLog'
> = async (_, args, ctx) => {
  const { currentUser, prisma } = ctx

  if (!currentUser) {
    throw new Error('Not authorized')
  }

  const { where } = args

  if (!where.id) {
    throw new Error('MindLog ID is required')
  }

  const existing = await prisma.mindLog.findUnique({
    where: { id: where.id },
  })

  if (!existing) {
    throw new Error('MindLog not found')
  }

  if (existing.createdById !== currentUser.id) {
    throw new Error('Cannot delete another user MindLog')
  }

  await prisma.mindLog.delete({
    where: { id: where.id },
  })

  return {
    success: true,
    message: 'MindLog deleted',
    errors: [],
    data: null,
  }
}
