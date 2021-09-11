import { Prisma } from '@prisma/client'
import { extendType, objectType } from 'nexus'

export const TagExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.tag({})
    t.crud.tags({
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('tagsCount', {
      args: {
        where: 'TagWhereInput',
      },
      resolve(_, args, ctx) {
        const where = args.where as Prisma.TagWhereInput

        return ctx.prisma.tag.count({
          where,
        })
      },
    })
  },
})

export const Tag = objectType({
  name: 'Tag',
  sourceType: {
    module: '@prisma/client',
    export: 'Tag',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.string('name')
    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })
    t.list.nonNull.field('Resources', {
      type: 'ResourceTag',
      resolve({ id }, _, ctx) {
        return ctx.prisma.resourceTag.findMany({
          where: {
            Tag: id,
          },
        })
      },
    })
  },
})
