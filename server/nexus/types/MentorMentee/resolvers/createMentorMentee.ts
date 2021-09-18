import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'

export const createMentorMentee: FieldResolver<
  'Mutation',
  'createMentorMentee'
> = async (_, args, ctx) => {
  if (!ctx.currentUser) {
    throw new Error('Необходимо авторизоваться')
  }

  const currentUserId = ctx.currentUser.id

  const menteeId = currentUserId

  const mentorId = args.data.mentorId

  if (menteeId === mentorId) {
    throw new Error('Нельзя в менти себе назначиться :)')
  }

  /**
   * Получаем ментора
   */
  const Mentor = await ctx.prisma.user.findUnique({
    where: {
      id: mentorId,
    },
  })

  if (!Mentor) {
    throw new Error('Не был получен ментор')
  }

  if (!Mentor.isMentor) {
    throw new Error('Пользователь не готов быть ментором')
  }

  const createData: Prisma.MentorMenteeCreateInput = {
    // TODO Реализовать процедуру заявок. Сейчас сразу делаем принято
    status: 'Accepted',
    Mentor: {
      connect: {
        id: mentorId,
      },
    },
    Mentee: {
      connect: {
        id: menteeId,
      },
    },
  }

  const result = await ctx.prisma.mentorMentee
    .create({
      data: createData,
    })
    .then((r) => {
      /**
       * Отправляем уведомление ментору
       */
      if (Mentor.email && ctx.sendmail) {
        ctx.sendmail(
          {
            to: Mentor.email,
            subject: 'Новый менти',
            html: `<h3>У вас новый менти</h3>
          <p>
            ${ctx.currentUser?.fullname} ${ctx.currentUser?.username}
          </p> 
        `,
            from: ctx.mailSender,
          },
          (err?: Error | null) => {
            if (err) {
              console.error(err)
            }
          }
        )
      }

      return r
    })

  return result
}
