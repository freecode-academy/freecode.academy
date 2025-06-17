import { enumType, objectType } from 'nexus'

export const ProjectMember = objectType({
  name: 'ProjectMember',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.field('User', {
      type: 'User',
      // @ts-expect-error types
      resolve({ User }, _, ctx) {
        return User ? ctx.prisma.user.findUnique({ where: { id: User } }) : null
      },
    })
    t.field('status', {
      type: 'ProjectMemberStatus',
    })
    t.field('Project', {
      type: 'Project',
      // @ts-expect-error types
      resolve({ Project }, _, ctx) {
        return Project
          ? ctx.prisma.project.findUnique({ where: { id: Project } })
          : null
      },
    })
  },
})

export const ProjectMemberStatus = enumType({
  name: 'ProjectMemberStatus',
  members: ['Invited', 'Active', 'Fired', 'Quit'],
})
