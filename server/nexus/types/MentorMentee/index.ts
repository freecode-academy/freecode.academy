import { Prisma } from '.prisma/client'
import {
  enumType,
  extendType,
  inputObjectType,
  nonNull,
  objectType,
} from 'nexus'
import { createMentorMentee } from './resolvers/createMentorMentee'

export const MentorMenteeExtendQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.mentorMentee({})

    t.crud.mentorMentees({
      filtering: true,
      ordering: true,
    })

    t.nonNull.int('mentorMenteesCount', {
      args: {
        where: 'MentorMenteeWhereInput',
      },
      resolve(_, args, ctx) {
        const where = args.where as Prisma.MentorMenteeWhereInput

        return ctx.prisma.mentorMentee.count({
          where,
        })
      },
    })
  },
})

export const MentorMenteeExtendMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.nonNull.field('createMentorMentee', {
      type: 'MentorMentee',
      description: 'Создает заявку на менторство',
      args: {
        data: nonNull('MentorMenteeCreateInput'),
      },
      resolve: createMentorMentee,
    })
  },
})

export const MentorMentee = objectType({
  name: 'MentorMentee',
  description: 'Связка Метнор-Менти',
  sourceType: {
    module: '@prisma/client',
    export: 'MentorMentee',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.nonNull.field('status', {
      type: 'MentorMenteeStatus',
    })
    t.nonNull.id('mentorId')
    t.field('Mentor', {
      description: 'Ментор',
      type: 'User',
      resolve({ mentorId }, _args, ctx) {
        return ctx.prisma.user.findUnique({
          where: {
            id: mentorId,
          },
        })
      },
    })
    t.nonNull.id('menteeId')
    t.field('Mentee', {
      description: 'Менти',
      type: 'User',
      resolve({ menteeId }, _args, ctx) {
        return ctx.prisma.user.findUnique({
          where: {
            id: menteeId,
          },
        })
      },
    })
  },
})

export const MentorMenteeStatus = enumType({
  name: 'MentorMenteeStatus',
  members: [
    {
      name: 'Request',
      description: 'Отправлен запрос',
    },
    {
      name: 'Accepted',
      description: 'Запрос принят',
    },
    {
      name: 'Rejected',
      description: 'Запрос отклонен',
    },
  ],
})

export const MentorMenteeCreateInput = inputObjectType({
  name: 'MentorMenteeCreateInput',
  definition(t) {
    t.nonNull.id('mentorId', {
      description: 'ID ментора',
    })
  },
})
