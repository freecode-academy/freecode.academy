import { Prisma } from '@prisma/client'
import { extendType, intArg, list, nonNull, objectType } from 'nexus'

export const CodeChallengeExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.codeChallenge({})
    t.crud.codeChallenges({
      filtering: true,
      ordering: true,
    })
  },
})

export const CodeChallenge = objectType({
  name: 'CodeChallenge',
  sourceType: {
    module: '@prisma/client',
    export: 'CodeChallenge',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.id('externalKey')
    t.string('name')
    t.string('dashedName')
    t.string('localeTitle')
    t.string('description')
    t.string('instructions')
    t.string('videoUrl')
    t.string('template')
    t.string('time')

    t.int('challengeType')
    t.int('forumTopicId')
    t.int('order')
    t.int('superOrder')
    t.int('challengeOrder')
    t.int('rank')

    t.field('translations', { type: 'JSON' })
    t.field('tests', { type: 'JSON' })
    t.field('solutions', { type: 'JSON' })
    t.field('files', { type: 'JSON' })
    t.field('required', { type: 'JSON' })

    t.boolean('isRequired')
    t.boolean('isPrivate')
    t.boolean('isBeta')

    t.field('CreatedBy', {
      type: 'User',
      resolve({ CreatedBy }, _, ctx) {
        return CreatedBy
          ? ctx.prisma.user.findUnique({ where: { id: CreatedBy } })
          : null
      },
    })

    t.field('Topic', {
      type: 'Resource',
      resolve({ Topic }, _, ctx) {
        return Topic
          ? ctx.prisma.resource.findUnique({ where: { id: Topic } })
          : null
      },
    })

    t.field('Block', {
      type: 'CodeChallengeBlock',
      resolve({ Block }, _, ctx) {
        return Block
          ? ctx.prisma.codeChallengeBlock.findUnique({ where: { id: Block } })
          : null
      },
    })

    t.list.nonNull.field('CodeChallengeCompletions', {
      type: 'CodeChallengeCompletion',
      args: {
        orderBy: list(nonNull('CodeChallengeCompletionOrderByInput')),
        where: 'CodeChallengeCompletionWhereInput',
        take: intArg(),
        skip: intArg(),
      },
      resolve({ id }, args, ctx) {
        const orderBy =
          args.orderBy as Prisma.CodeChallengeCompletionFindManyArgs['orderBy']
        const where =
          args.where as Prisma.CodeChallengeCompletionFindManyArgs['where']

        return ctx.prisma.codeChallengeCompletion.findMany({
          where: {
            AND: [
              {
                CodeChallenge: id,
              },
              {
                ...where,
              },
            ],
          },
          orderBy,
          take: args.take || undefined,
          skip: args.skip || undefined,
        })
      },
    })
  },
})
