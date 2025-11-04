import { Prisma } from '@prisma/client'
import { intArg, objectType } from 'nexus'

export const User = objectType({
  name: 'User',
  description: 'Пользователь',
  definition(t) {
    t.nonNull.string('id')
    t.nonNull.date('createdAt', {
      description: 'Когда создан',
    })
    t.nonNull.date('updatedAt', {
      description: 'Когда обновлен',
    })
    t.string('email', {
      resolve(parent, _args, ctx) {
        return (
          // parent.showEmail === true ||
          (ctx.currentUser?.sudo === true ||
            ctx.currentUser?.id === parent.id) &&
            'email' in parent &&
            typeof parent.email === 'string'
            ? parent.email
            : null
        )
      },
    })
    t.string('fullname', {
      resolve(parent, _args, ctx) {
        return (parent.showFullname === true ||
          ctx.currentUser?.sudo === true ||
          ctx.currentUser?.id === parent.id) &&
          'fullname' in parent &&
          typeof parent.fullname === 'string'
          ? parent.fullname
          : null
      },
    })
    t.string('username')
    t.boolean('sudo')
    t.boolean('showEmail', {
      description: 'Показывать емейл другим пользователям',
    })
    t.nonNull.boolean('showFullname', {
      description: 'Показывать ФИО другим пользователям',
    })
    t.string('image', {
      description: 'Avatar',
    })

    t.boolean('showPhone')
    t.boolean('active', {
      description: 'Активирован ли пользователь',
    })
    t.nonNull.boolean('blocked', {
      description: 'Заблокирован ли пользователь',
    })
    t.boolean('activated')
    t.boolean('deleted')
    t.boolean('hasEmail')
    t.boolean('hasPhone')

    t.string('phone')
    t.string('fullname')
    t.string('address')
    t.boolean('isMentor', {
      description: 'Готов быть ментором',
    })
    t.boolean('isAiAgent', {
      description: 'Является ли пользователь AI агентом',
    })
    t.string('intro')
    t.string('content')
    t.int('rating', {
      description: 'Рейтинг от 0 до 1000',
    })
    t.string('telegram', {
      description: 'Аккаунт в телеграм',
    })
    t.int('technologyLevel')

    t.list.nonNull.field('CodeChallengeCompletions', {
      type: 'CodeChallengeCompletion',
      resolve({ id }, _, ctx) {
        return ctx.prisma.codeChallengeCompletion.findMany({
          where: {
            CreatedBy: id,
          },
        })
      },
    })

    // t.list.nonNull.field('EthAccounts', {
    //   type: 'EthAccount',
    //   resolve({ id }, _, ctx) {
    //     return ctx.prisma.ethAccount.findMany({
    //       where: {
    //         CreatedBy: id,
    //       },
    //     })
    //   },
    // })

    t.list.nonNull.field('Timers', {
      type: 'Timer',
      args: {
        first: intArg(),
        where: 'TimerWhereInput',
      },
      resolve({ id }, args, ctx) {
        const first = args.first || undefined
        // const where = args.where || {} as Omit<Prisma.TimerWhereInput, "CreatedBy">;
        const where = {
          ...args.where,
          CreatedBy: id,
        } as Prisma.TimerWhereInput

        return ctx.prisma.timer.findMany({
          where,
          take: first,
        })
      },
    })

    // TODO Restore logic
    // t.list.nonNull.field('NotificationTypes', {
    //   type: 'NotificationType',
    //   resolve({ id }, _, ctx) {
    //     /**
    //      * Если это не текущий пользователь, то ничего не выводим
    //      */
    //     if (ctx.currentUser?.id !== id) {
    //       return null
    //     }

    //     return ctx.prisma.user
    //       .findUnique({ where: { id } })
    //       .NotificationTypes_UserNotificationTypes()
    //   },
    // })

    t.list.nonNull.field('UserTechnologies', {
      type: 'UserTechnology',

      resolve({ id }, _, ctx) {
        return ctx.prisma.userTechnology.findMany({
          where: {
            CreatedBy: id,
          },
        })
      },
    })

    t.list.nonNull.field('ProjectsCreated', {
      type: 'Project',
      description: 'Проекты, созданные пользователем',
      args: {
        take: intArg(),
        where: 'ProjectWhereInput',
      },
      resolve({ id }, args, ctx) {
        const where = args.where as Prisma.ProjectWhereInput | null | undefined
        const take = args.take

        return ctx.prisma.project.findMany({
          take: take || undefined,
          where: {
            ...where,
            CreatedBy: id,
          },
        })
      },
    })

    t.list.nonNull.field('Projects', {
      type: 'ProjectMember',
      description: 'Проекты, в которых участвует пользователь',
      resolve({ id }, _, ctx) {
        return ctx.prisma.projectMember.findMany({
          where: {
            User: id,
          },
        })
      },
    })

    t.list.nonNull.field('MentorMenteeMentors', {
      type: 'MentorMentee',
      description: 'Список менторов пользователя',
      resolve({ id }, _args, ctx) {
        return ctx.prisma.mentorMentee.findMany({
          where: {
            menteeId: id,
          },
        })
      },
    })
    t.list.nonNull.field('MentorMenteeMentees', {
      type: 'MentorMentee',
      description: 'Список менти пользователя',
      resolve({ id }, _args, ctx) {
        return ctx.prisma.mentorMentee.findMany({
          where: {
            mentorId: id,
          },
        })
      },
    })

    t.field('TelegramAccount', {
      type: 'TelegramAccount',
      resolve({ id }, _, { prisma }) {
        return prisma.telegramAccount.findUnique({
          where: {
            userId: id,
          },
        })
      },
    })
  },
})

// export const WebUiProfile = objectType({
//   name: "WebUiProfile",
//   def
// })
