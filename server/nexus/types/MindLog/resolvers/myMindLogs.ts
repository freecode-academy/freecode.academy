// import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'

export const myMindLogsResolver: FieldResolver<'Query', 'myMindLogs'> = async (
  _,
  _args,
  ctx
) => {
  const { currentUser } = ctx

  if (!currentUser) {
    throw new Error('Now authorized')
  }

  // const whereProps = args.where

  // const where: Prisma.MindLogWhereInput = {
  //   AND: [],
  // }

  return []
}
