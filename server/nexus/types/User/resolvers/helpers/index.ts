import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { User } from '@prisma/client'
import { PrismaContext } from 'server/nexus/context'
import { generateId } from '../../../../../helpers/generateId'

export type AuthTokenData = {
  tokenId: string
}

/**
 * Создание пароля
 */
export const createPassword = async (password: string | null | undefined) => {
  return await bcrypt.hash(password ?? generateId(), 10)
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
