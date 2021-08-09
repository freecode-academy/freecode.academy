import { enumType, extendType, objectType } from 'nexus'

export const ProjectTaskExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.projectTasks({
      filtering: true,
      ordering: true,
    })
  },
})

export const ProjectTask = objectType({
  name: 'ProjectTask',
  sourceType: {
    module: '@prisma/client',
    export: 'ProjectTask',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })
    t.field('Project', {
      type: 'Project',
      resolve({ Project }, _, ctx) {
        return Project
          ? ctx.prisma.project.findUnique({ where: { id: Project } })
          : null
      },
    })
    t.field('Task', {
      type: 'Task',
      resolve({ Task }, _, ctx) {
        return Task ? ctx.prisma.task.findUnique({ where: { id: Task } }) : null
      },
    })
  },
})

export const ProjectTaskType = enumType({
  name: 'ProjectTaskType',
  members: [
    'Blog',
    'Comment',
    'PersonalBlog',
    'Project',
    'ProjectTask',
    'Service',
    'Team',
    'Topic',
  ],
})
