import { FieldResolver } from 'nexus'
import { isOwnLearnStrategyStage } from '.'

export const deleteLearnStrategyStage: FieldResolver<
  'Mutation',
  'deleteLearnStrategyStage'
> = async (_, args, ctx) => {
  // const {
  //   id: currentUserId,
  // } = ctx.currentUser || {}

  // if(!currentUserId) {
  //   throw new Error ("Please sign in to continue")
  // }

  const where = args.where

  await isOwnLearnStrategyStage(ctx, where)

  return ctx.prisma.learnStrategyStage.delete({
    where,
  })
}
