import { objectType } from 'nexus'

export const ResourceTag = objectType({
  name: 'ResourceTag',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.string('status', {
      // type: 'TagStatus',
    })
    t.id('CreatedBy')
    t.field('CreatedByUser', {
      type: 'User',

      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })
    t.id('Resource')
    t.field('ResourceTagResource', {
      type: 'Resource',

      resolve({ Resource }, _, ctx) {
        return Resource
          ? ctx.prisma.resource.findUnique({ where: { id: Resource } })
          : null
      },
    })
    t.id('Tag')
    t.field('ResourceTagTag', {
      type: 'Tag',

      resolve({ Tag }, _, ctx) {
        return Tag ? ctx.prisma.tag.findUnique({ where: { id: Tag } }) : null
      },
    })
  },
})

// export const TagStatus = enumType({
//   name: 'TagStatus',
//   members: ['Active', 'Moderated', 'Blocked'],
// })
