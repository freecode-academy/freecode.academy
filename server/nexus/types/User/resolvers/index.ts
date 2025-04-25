import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '@prisma/client'
import { PrismaContext } from 'server/nexus/context'
import { randomBytes } from 'crypto'

export type AuthTokenData = {
  tokenId: string
}

/**
 * Создание пароля
 */
export const createPassword = async (password: string | null | undefined) => {
  if (!password) {
    const length = 10
    password = randomBytes(length).toString('base64').slice(0, length)
  }

  return await bcrypt.hash(password, 10)
}

/**
 * Записываем токен доступа в базу
 */
export const createToken = async (user: User, ctx: PrismaContext) => {
  const Token = await ctx.prisma.token.create({
    data: {
      User: {
        connect: {
          id: user.id,
        },
      },
    },
  })

  const tokenData: AuthTokenData = {
    tokenId: Token.id,
  }

  const token = jwt.sign(tokenData, ctx.APP_SECRET)

  return token
}
