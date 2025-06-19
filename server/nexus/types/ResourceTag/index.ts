import { enumType, objectType } from 'nexus'

export const ResourceTag = objectType({
  name: 'ResourceTag',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.field('status', {
      type: 'TagStatus',
    })

    t.field('CreatedBy', {
      type: 'User',
      // @ts-expect-error types
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })
    t.field('Resource', {
      type: 'Resource',
      // @ts-expect-error types
      resolve({ Resource }, _, ctx) {
        return Resource
          ? ctx.prisma.resource.findUnique({ where: { id: Resource } })
          : null
      },
    })
    t.field('Tag', {
      type: 'Tag',
      // @ts-expect-error types
      resolve({ Tag }, _, ctx) {
        return Tag ? ctx.prisma.tag.findUnique({ where: { id: Tag } }) : null
      },
    })
  },
})

export const TagStatus = enumType({
  name: 'TagStatus',
  members: ['Active', 'Moderated', 'Blocked'],
})
