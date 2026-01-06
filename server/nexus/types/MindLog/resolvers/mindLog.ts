import { FieldResolver } from 'nexus'

export const mindLogResolver: FieldResolver<'Query', 'mindLog'> = async (
  _,
  args,
  ctx
) => {
  const { currentUser, prisma } = ctx

  if (!currentUser) {
    throw new Error('Not authorized')
  }

  const { where } = args

  if (!where.id) {
    throw new Error('MindLog ID is required')
  }

  const mindLog = await prisma.mindLog.findUnique({
    where: { id: where.id },
  })

  if (!mindLog) {
    return null
  }

  if (mindLog.createdById !== currentUser.id) {
    throw new Error('Cannot access another user MindLog')
  }

  return mindLog
}
