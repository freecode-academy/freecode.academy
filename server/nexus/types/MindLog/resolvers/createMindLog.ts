import { FieldResolver } from 'nexus'

export const createMindLogResolver: FieldResolver<
  'Mutation',
  'createMindLog'
> = async (_, args, ctx) => {
  const { currentUser, prisma } = ctx

  if (!currentUser) {
    throw new Error('Not authorized')
  }

  const { data: input } = args

  const mindLog = await prisma.mindLog.create({
    data: {
      type: input.type,
      data: input.data,
      quality: input.quality,
      createdById: currentUser.id,
    },
  })

  return {
    success: true,
    message: 'MindLog created',
    errors: [],
    data: mindLog,
  }
}
