import jwt from 'jsonwebtoken'
import { context, PrismaContext } from '../nexus/context'
import { AuthTokenData } from './types/User/interfaces'
// import { applyMiddleware } from 'graphql-middleware'
// import { permissions } from './permissions'
import { pubsub } from '../PubSub'

// Функция для получения контекста запроса
export async function createApolloContext({
  req,
  // TODO Remove
  /**
   * @deprecated
   */
  type: _type,
  currentUser = null,
}: {
  req?: PrismaContext['req']
  type: 'ws' | 'other' | 'ai'
  currentUser?: PrismaContext['currentUser']
}): Promise<PrismaContext> {
  // let currentUser: PrismaContext['currentUser'] = null
  let ContextToken: PrismaContext['Token'] = null

  /**
   * Если есть токен, пытаемся получить текущего пользователя
   */
  if (req?.headers.authorization) {
    try {
      const token = req.headers.authorization.replace('Bearer ', '')
      const tokenData = jwt.verify(
        token,
        context.APP_SECRET
      ) as AuthTokenData | null

      if (tokenData?.tokenId) {
        /**
         * Получаем токен
         */
        const Token = await context.prisma.token.findUnique({
          where: {
            id: tokenData.tokenId,
          },
          select: {
            id: true,
            expiredAt: true,
            createdAt: true,
            userId: true,

            /**
             * Включаем в выборку и данные пользователя
             */
            User: true,
          },
        })

        /**
         * Проверяем данные токена
         */
        if (
          Token &&
          (!Token.expiredAt || new Date(Token.expiredAt) > new Date())
        ) {
          /**
           * Если все ОК, возвращаем данные пользователя
           */
          currentUser = Token.User

          /**
           * И пробрасывает токен в контекст
           */
          ContextToken = Token
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {
    ...context,
    req,
    currentUser,
    Token: ContextToken,
    pubsub, // Добавляем pubsub в контекст для доступа из резолверов
  }
}
