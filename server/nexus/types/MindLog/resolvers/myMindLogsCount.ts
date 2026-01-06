import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'

export const myMindLogsCountResolver: FieldResolver<
  'Query',
  'myMindLogsCount'
> = async (_, args, ctx) => {
  const { currentUser, prisma } = ctx

  if (!currentUser) {
    throw new Error('Not authorized')
  }

  const whereProps = args.where as Prisma.MindLogWhereInput | null | undefined

  const AND: Prisma.MindLogWhereInput['AND'] = [
    {
      createdById: currentUser.id,
    },
  ]

  if (whereProps) {
    AND.push(whereProps)
  }

  return prisma.mindLog.count({
    where: {
      AND,
    },
  })
}
