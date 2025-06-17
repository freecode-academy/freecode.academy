import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'

// @ts-expect-error types
export const deleteResource: FieldResolver<
  'Mutation',
  'deleteResource'
> = async (_, args, ctx) => {
  const where = args.where as Prisma.ResourceWhereUniqueInput

  return ctx.prisma.resource.delete({
    where,
  })
}
