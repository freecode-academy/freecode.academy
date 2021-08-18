/**
 * Отправка емейл-уведомлений
 */

import { Prisma, User } from '@prisma/client'
import { PrismaContext } from 'server/nexus/context'

/**
 * Создаем уведомления на отправку
 */
export async function sendNotifications(
  data: Omit<Prisma.LetterCreateInput, 'email'>,
  where: Prisma.UserWhereInput,
  ctx: PrismaContext
) {
  // const {
  //   db,
  // } = ctx;

  const users = await ctx.prisma.user
    .findMany({
      where: {
        ...where,
        // email_gt: "",
        email: {
          gt: '',
        },
      },
    })
    .catch((error: Error) => {
      console.error(error)
    })
  if (users?.length) {
    // const processor = getProcessor(data, users, writeEmail.bind(this));
    const processor = getProcessor(data, users, writeEmail, ctx)

    // eslint-disable-next-line no-unused-vars
    for await (const result of processor) {
      result
    }
  }
}

async function* getProcessor(
  data: Omit<Prisma.LetterCreateInput, 'email'>,
  users: User[],
  processor: typeof writeEmail,
  ctx: PrismaContext
) {
  while (users && users.length) {
    const user = users.splice(0, 1)[0]

    const result = await processor(data, user, ctx).catch((error: Error) => {
      // this.error(error);
      console.error(error)

      return error
    })

    yield result
  }

  // await this.log(`Записано: ${writed}, пропущено: ${skiped}, ошибок: ${errors}`, "Info");

  // if (errors) {
  //   throw new Error("Есть ошибки при импорте");
  // }
}

async function writeEmail(
  data: Omit<Prisma.LetterCreateInput, 'email'>,
  user: User,
  ctx: PrismaContext
) {
  // const {
  //   db,
  // } = this.ctx;

  // const {
  //   email,
  // } = user;

  if (!user.email) {
    return
  }

  // data.email = user.email

  const createData: Prisma.LetterCreateInput = Object.assign(data, {
    email: user.email,
  })

  const result = await ctx.prisma.letter
    .create({
      data: createData,
    })
    .catch((error: Error) => {
      console.error('writeEmail error', error)
    })

  return result
}
