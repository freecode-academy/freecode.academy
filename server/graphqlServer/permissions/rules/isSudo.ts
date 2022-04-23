import { rule } from 'graphql-shield'
import { PrismaContext } from 'server/nexus/context'

/**
 * Авторизованный пользователь является sudo
 */
export const isSudo = rule()((_parent, _args, ctx: PrismaContext) => {
  return ctx.currentUser?.sudo === true
})
