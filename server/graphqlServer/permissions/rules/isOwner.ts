import { rule } from 'graphql-shield'
import { PrismaContext } from 'server/nexus/context'
import { NexusGenScalars } from 'server/nexus/generated/nexus'

type WithCreatedBy = {
  createdById?: NexusGenScalars['ID'] | null
  CreatedBy?: NexusGenScalars['ID'] | null
}

/**
 * Пользователь является владельцем объекта.
 * Это работает только на Query
 */
export const isOwner = <T extends WithCreatedBy>() => {
  // return rule({ cache: 'contextual' })(
  return rule()((parent: T, _args, ctx: PrismaContext) => {
    /**
     * Сравниваем свойство объекта с id текущего пользователя
     */

    return ctx.currentUser &&
      (ctx.currentUser.id === parent.createdById ||
        ctx.currentUser.id === parent.CreatedBy)
      ? true
      : false
  })
  // return rule()((parent: T, _args, ctx: PrismaContext) => {
  //   /**
  //    * Сравниваем свойство объекта с id текущего пользователя
  //    */
  //   return ctx.currentUser && ctx.currentUser.id === parent.createdById
  //     ? true
  //     : false
  // })
}
