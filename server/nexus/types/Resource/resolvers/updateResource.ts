import { Prisma } from '@prisma/client'
import { PrismaContext } from 'server/nexus/context'
import { prepareContent } from './helpers/prepareContent'
import { prepareName } from './helpers/prepareUri'

export const updateResource = async (
  args: Prisma.ResourceUpdateArgs,
  ctx: PrismaContext
) => {
  const {
    data: { name, ...data },
    where,
  } = args

  if (!ctx.currentUser) {
    throw new Error('Необходимо авторизоваться')
  }

  const resource = await ctx.prisma.resource.findUnique({
    where,
  })

  if (!resource) {
    throw new Error('Не был получен объект')
  }

  if (resource.CreatedBy !== ctx.currentUser.id) {
    throw new Error('Нельзя редактировать чужой объект')
  }

  const updateData: Prisma.ResourceUpdateInput = data

  if (name) {
    updateData.name = prepareName(args)
  }

  prepareContent(args.data, data)

  return ctx.prisma.resource.update({
    data: updateData,
    where,
  })
}
