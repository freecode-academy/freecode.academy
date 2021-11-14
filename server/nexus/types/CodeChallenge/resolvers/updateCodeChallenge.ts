import { Prisma } from '.prisma/client'
import { FieldResolver } from 'nexus'

export const updateCodeChallenge: FieldResolver<
  'Mutation',
  'updateCodeChallenge'
> = async (_, args, ctx) => {
  const where = args.where as Prisma.CodeChallengeWhereUniqueInput

  const { localeTitle, description, instructions } = args.data

  const updateData: Prisma.CodeChallengeUpdateInput = {
    localeTitle,
    description,
    instructions,
  }

  return ctx.prisma.codeChallenge.update({
    where,
    data: updateData,
  })
}
