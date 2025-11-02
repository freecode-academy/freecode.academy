import { FieldResolver } from 'nexus'
import crypto from 'crypto'
import { NexusGenInputs } from 'server/nexus/generated/nexus'
import { Prisma, TelegramAccount, User } from '@prisma/client'
import { createUser } from './helpers/createUser'
import { createToken } from './helpers/createToken'

function checkTelegramAuth(
  data: NexusGenInputs['TelegramAuthDataInput']
): boolean {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

  if (!TELEGRAM_BOT_TOKEN) {
    throw new Error('TELEGRAM_BOT_TOKEN env is empty')
  }

  const { hash, ...rest } = data
  const dataCheckString = Object.keys(rest)
    .sort()
    .map((key) => `${key}=${rest[key as keyof typeof rest]}`)
    .join('\n')
  const secret = crypto.createHash('sha256').update(TELEGRAM_BOT_TOKEN).digest()
  const hmac = crypto
    .createHmac('sha256', new Uint8Array(secret))
    .update(dataCheckString)
    .digest('hex')
  return hmac === hash
}

export const authViaTelegramResolver: FieldResolver<
  'Mutation',
  'authViaTelegram'
> = async (_, { tgAuthData }, ctx) => {
  const { prisma, currentUser } = ctx

  const { id: externalKey } = tgAuthData

  const isValid = checkTelegramAuth(tgAuthData)

  if (!isValid) {
    throw new Error('Token is not valid')
  }

  let user: User | undefined
  let tgAccount: TelegramAccount | null | undefined
  let token: string | undefined

  let tgAccountResponse = await prisma.telegramAccount.findUnique({
    where: {
      externalKey,
    },
    include: {
      User: true,
    },
  })

  if (tgAccountResponse) {
    user = tgAccountResponse.User
    tgAccount = tgAccountResponse

    token = await createToken(user, ctx)
  } else {
    const { id, auth_date, first_name, last_name, photo_url, username } =
      tgAuthData

    const tgCreateData: Prisma.TelegramAccountCreateWithoutUserInput = {
      externalKey: id,
      auth_date: auth_date ? new Date(auth_date * 1000) : undefined,
      first_name,
      last_name,
      photo_url,
      username,
    }

    if (currentUser) {
      user = currentUser

      tgAccountResponse = await prisma.telegramAccount.create({
        data: {
          ...tgCreateData,
          User: {
            connect: {
              id: currentUser.id,
            },
          },
        },
        include: {
          User: true,
        },
      })

      if (tgAccountResponse) {
        token = await createToken(currentUser, ctx)
        tgAccount = tgAccountResponse
      } else {
        tgAccount = undefined
      }
    } else {
      const createUserResponse = await createUser(
        {
          showEmail: false,
          showFullname: false,

          TelegramAccount: {
            create: tgCreateData,
          },
        },
        ctx
      )

      if (createUserResponse.data && createUserResponse.token) {
        token = createUserResponse.token
        user = createUserResponse.data
        tgAccount = createUserResponse.data.TelegramAccount
      } else {
        token = undefined

        return createUserResponse
      }
    }
  }

  if (!tgAccount) {
    throw new Error('Не был получен телеграм аккаунт')
  }

  if (!user) {
    throw new Error('Не был получен пользователь')
  }

  if (!token) {
    throw new Error('Не был сформирован токен')
  }

  return {
    success: true,
    errors: [],
    token,
    data: user,
  }
}
