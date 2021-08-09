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

    // t.nonNull.field("codeChallengeBlocksConnection", {
    //   type: "CodeChallengeBlockConnection",
    //   args: {
    //     where: "CodeChallengeBlockWhereInput",
    //     orderBy: "CodeChallengeBlockOrderByInput",
    //     first: "Int",
    //     skip: "Int",
    //   },
    //   resolve: async (_, args, ctx) => {

    //     const where = args.where as Prisma.CodeChallengeBlockWhereInput;
    //     const orderBy = args.orderBy as Prisma.CodeChallengeBlockOrderByInput;
    //     const take = args.first || undefined;
    //     const skip = args.skip || undefined;

    //     const countPromise = ctx.prisma.codeChallengeBlock.count({
    //       where,
    //     })

    //     const codeChallengeBlocksPromise = ctx.prisma.codeChallengeBlock.findMany({
    //       where,
    //       orderBy: orderBy ? [orderBy] : undefined,
    //       take,
    //       skip,
    //     })

    //     return Promise.all([countPromise, codeChallengeBlocksPromise]).then(results => {

    //       return {
    //         aggregate: {
    //           count: results[0],
    //         },
    //         edges: results[1].map(n => {
    //           return {
    //             node: n,
    //           }
    //         })
    //       }
    //     })
    //   }
    // })
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
