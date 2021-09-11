import { Prisma } from '@prisma/client'
import { extendType, objectType } from 'nexus'

export const CodeChallengeBlockQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.codeChallengeBlocks({
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('codeChallengeBlocksCount', {
      args: {
        where: 'CodeChallengeBlockWhereInput',
      },
      resolve(_, args, ctx) {
        return ctx.prisma.codeChallengeBlock.count({
          where: args.where as Prisma.CodeChallengeBlockCountArgs['where'],
        })
      },
    })

    t.crud.codeChallengeBlock({})
  },
})

export const CodeChallengeBlock = objectType({
  name: 'CodeChallengeBlock',
  sourceType: {
    module: '@prisma/client',
    export: 'CodeChallengeBlock',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.string('name')

    t.field('Parent', {
      type: 'CodeChallengeBlock',
      resolve({ Parent }, _, ctx) {
        return Parent
          ? ctx.prisma.codeChallengeBlock.findUnique({ where: { id: Parent } })
          : null
      },
    })

    t.list.nonNull.field('Challenges', {
      type: 'CodeChallenge',
      args: {
        orderBy: 'CodeChallengeOrderByInput',
      },
      resolve({ id }, args, ctx) {
        const orderBy = args.orderBy as
          | Prisma.CodeChallengeOrderByInput
          | undefined

        return ctx.prisma.codeChallenge.findMany({
          where: { Block: id },
          orderBy: orderBy ? [orderBy] : undefined,
        })
      },
    })

    t.list.nonNull.field('Children', {
      type: 'CodeChallengeBlock',
      args: {
        orderBy: 'CodeChallengeBlockOrderByInput',
      },
      resolve({ id }, args, ctx) {
        const orderBy = args.orderBy as
          | Prisma.CodeChallengeBlockOrderByInput
          | undefined

        return ctx.prisma.codeChallengeBlock.findMany({
          where: { Parent: id },
          orderBy: orderBy ? [orderBy] : undefined,
        })
      },
    })
  },
})
