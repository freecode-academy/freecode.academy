import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'

export const updateMindLogResolver: FieldResolver<
  'Mutation',
  'updateMindLog'
> = async (_, args, ctx) => {
  const { currentUser, prisma } = ctx

  if (!currentUser) {
    throw new Error('Not authorized')
  }

  const { where, data: input } = args

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
    throw new Error('Cannot update another user MindLog')
  }

  const updateData: Prisma.MindLogUpdateInput = {}

  if (input.data !== undefined && input.data !== null) {
    updateData.data = input.data
  }

  if (input.quality !== undefined) {
    updateData.quality = input.quality
  }

  const mindLog = await prisma.mindLog.update({
    where: { id: where.id },
    data: updateData,
  })

  return {
    success: true,
    message: 'MindLog updated',
    errors: [],
    data: mindLog,
  }
}
