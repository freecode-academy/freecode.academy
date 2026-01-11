import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { myMindLogsResolver } from './resolvers/myMindLogs'
import { myMindLogsCountResolver } from './resolvers/myMindLogsCount'
import { mindLogResolver } from './resolvers/mindLog'
import { createMindLogResolver } from './resolvers/createMindLog'
import { updateMindLogResolver } from './resolvers/updateMindLog'
import { deleteMindLogResolver } from './resolvers/deleteMindLog'

export const MindLog = objectType({
  name: 'MindLog',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.field('type', { type: 'MindLogType' })
    t.nonNull.string('data')
    t.float('quality')
    t.nonNull.id('createdById')
    t.field('CreatedBy', { type: 'User' })
    t.id('relatedToUserId')
  },
})

export const MindLogResponse = objectType({
  name: 'MindLogResponse',
  definition(t) {
    t.nonNull.boolean('success')
    t.nonNull.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'MindLog',
    })
  },
})

export const MindLogCreateInput = inputObjectType({
  name: 'MindLogCreateInput',
  definition(t) {
    t.nonNull.field('type', { type: 'MindLogType' })
    t.nonNull.string('data')
    t.float('quality')
    t.id('relatedToUserId')
  },
})

export const MindLogUpdateInput = inputObjectType({
  name: 'MindLogUpdateInput',
  definition(t) {
    t.string('data')
    t.float('quality')
  },
})

export const MindLogExtendsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.mindLogs({
      filtering: true,
      ordering: true,
    })

    t.crud.mindLogs({
      alias: 'myMindLogs',
      filtering: true,
      ordering: true,
      resolve: myMindLogsResolver,
    })

    t.nonNull.int('myMindLogsCount', {
      args: {
        where: 'MindLogWhereInput',
      },
      resolve: myMindLogsCountResolver,
    })

    t.field('mindLog', {
      type: 'MindLog',
      args: {
        where: nonNull('MindLogWhereUniqueInput'),
      },
      resolve: mindLogResolver,
    })
  },
})

export const MindLogExtendsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createMindLog', {
      type: 'MindLogResponse',
      args: {
        data: nonNull('MindLogCreateInput'),
      },
      resolve: createMindLogResolver,
    })

    t.nonNull.field('updateMindLog', {
      type: 'MindLogResponse',
      args: {
        where: nonNull('MindLogWhereUniqueInput'),
        data: nonNull('MindLogUpdateInput'),
      },
      resolve: updateMindLogResolver,
    })

    t.nonNull.field('deleteMindLog', {
      type: 'MindLogResponse',
      args: {
        where: nonNull('MindLogWhereUniqueInput'),
      },
      resolve: deleteMindLogResolver,
    })
  },
})
