import { PrismaContext } from '../context'

/**
 * Получаем текущего пользователя. Иначе возвращаем ошибку
 */
export const getCurrentUser = (ctx: PrismaContext) => {
  if (!ctx.currentUser) {
    throw new ReferenceError('Please sign in to continue')
  }

  return ctx.currentUser
}
