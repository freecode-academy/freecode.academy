import { Prisma } from '@prisma/client'
import { extendType, objectType } from 'nexus'

export const Donate = objectType({
  name: 'Donate',
  sourceType: {
    module: '@prisma/client',
    export: 'Donate',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('date')
    t.nonNull.float('sum')
    t.string('title')
    t.id('donatorId')
    t.field('Donator', {
      type: 'User',
      resolve({ donatorId }, _, ctx) {
        return donatorId
          ? ctx.prisma.user.findUnique({
              where: {
                id: donatorId,
              },
            })
          : null
      },
    })
  },
})

export const DonateExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.donate({})
    t.crud.donates({
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('donatesCount', {
      args: {
        where: 'DonateWhereInput',
      },
      resolve(_, args, ctx) {
        const where = args.where as Prisma.DonateWhereInput

        return ctx.prisma.donate.count({
          where,
        })
      },
    })
  },
})

export const DonateExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    // t.nonNull.field('deleteDonate', {
    //   type: 'Donate',
    //   args: {
    //     where: nonNull('DonateWhereUniqueInput'),
    //   },
    //   resolve: deleteDonate,
    // })

    t.crud.createOneDonate({})
  },
})
