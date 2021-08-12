import { extendType, inputObjectType, nonNull, objectType } from 'nexus'

export const CodeChallengeCompletionExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.codeChallengeCompletion({})
    t.crud.codeChallengeCompletions({
      ordering: true,
      filtering: true,
    })
  },
})

export const CodeChallengeCompletionExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createCodeChallengeCompletionProcessor', {
      type: 'CodeChallengeCompletionResponse',
      args: {
        data: nonNull('CodeChallengeCompletionCreateInput'),
      },
      // TODO Restore logic
      resolve(_, _args, _ctx) {
        throw new Error('Not implemented')

        // return {
        //   success: false,
        //   message: 'Not implemented',
        //   errors: [],
        // }
      },
    })
    t.nonNull.field('updateCodeChallengeCompletionProcessor', {
      type: 'CodeChallengeCompletionResponse',
      args: {
        data: nonNull('CodeChallengeCompletionUpdateInput'),
        where: nonNull('CodeChallengeCompletionWhereUniqueInput'),
      },
      // TODO Restore logic
      resolve(_, _args, _ctx) {
        throw new Error('Not implemented')

        // return {
        //   success: false,
        //   message: 'Not implemented',
        //   errors: [],
        // }
      },
    })
  },
})

export const CodeChallengeCompletion = objectType({
  name: 'CodeChallengeCompletion',
  sourceType: {
    module: '@prisma/client',
    export: 'CodeChallengeCompletion',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.boolean('success')
    t.string('content')
    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })
    t.field('Task', {
      type: 'Task',
      resolve({ Task }, _, ctx) {
        return Task ? ctx.prisma.task.findUnique({ where: { id: Task } }) : null
      },
    })
    t.field('CodeChallenge', {
      type: 'CodeChallenge',
      resolve({ CodeChallenge }, _, ctx) {
        return CodeChallenge
          ? ctx.prisma.codeChallenge.findUnique({
              where: { id: CodeChallenge },
            })
          : null
      },
    })
  },
})

export const CodeChallengeCompletionCreateInput = inputObjectType({
  name: 'CodeChallengeCompletionCreateInput',
  definition(t) {
    t.nonNull.field('CodeChallenge', {
      type: 'CodeChallengeCreateOneWithoutCompletionsInput',
    })
  },
})

export const CodeChallengeCreateOneWithoutCompletionsInput = inputObjectType({
  name: 'CodeChallengeCreateOneWithoutCompletionsInput',
  definition(t) {
    t.field('connect', {
      type: 'CodeChallengeWhereUniqueInput',
    })
  },
})

export const CodeChallengeCompletionResponse = objectType({
  name: 'CodeChallengeCompletionResponse',
  definition(t) {
    t.nonNull.boolean('success')
    t.nonNull.string('message')
    t.nonNull.list.nonNull.field('errors', {
      type: 'RequestError',
    })
    t.field('data', {
      type: 'CodeChallengeCompletion',
    })
  },
})

export const CodeChallengeCompletionUpdateInput = inputObjectType({
  name: 'CodeChallengeCompletionUpdateInput',
  definition(t) {
    t.string('content')
    t.boolean('success')
  },
})
