import { enumType, objectType } from 'nexus'

export const TaskReaction = objectType({
  name: 'TaskReaction',
  sourceType: {
    module: '@prisma/client',
    export: 'TaskReaction',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.field('type', {
      type: 'TaskReactionType',
    })
  },
})

export const TaskReactionType = enumType({
  name: 'TaskReactionType',
  members: ['UpVote'],
})
