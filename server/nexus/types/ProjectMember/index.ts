import { enumType, objectType } from 'nexus'

export const ProjectMember = objectType({
  name: 'ProjectMember',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.id('User')
    t.field('ProjectMemberUser', {
      type: 'User',

      resolve({ User }, _, ctx) {
        return User ? ctx.prisma.user.findUnique({ where: { id: User } }) : null
      },
    })
    t.field('status', {
      type: 'ProjectMemberStatus',
    })
    t.id('Project')
    t.field('ProjectMemberProject', {
      type: 'Project',

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
