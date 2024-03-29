import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { createResource } from '../../resolvers/createResource'

export const createBlogProcessor: FieldResolver<
  'Mutation',
  'createBlogProcessor'
> = async (_, args, ctx) => {
  const {
    data: { name },
  } = args

  const uri = `/blogs/${name}`

  // Object.assign(data, {
  //   uri,
  //   isfolder: true,
  // })

  // Object.assign(args, {
  //   data,
  // })

  const createData: Prisma.ResourceCreateInput = {
    name,
    uri,
    isfolder: true,
    type: 'Blog',
  }

  const resource = await createResource(
    {
      data: createData,
    },
    ctx
  )

  return {
    success: !!resource,
    message: '',
    errors: [],
    data: resource || null,
  }
}
