import { Prisma } from '@prisma/client'
import { FieldResolver } from 'nexus'
import { createResource } from '../../resolvers/createResource'

export const createTopicProcessor: FieldResolver<
  'Mutation',
  'createTopicProcessor'
> = async (_, args, ctx) => {
  const {
    id,
    name,
    components,
    // uri,
    blogID,
    // CodeChallenge,
  } = args.data

  const CodeChallenge = args.data.CodeChallenge as
    | Prisma.CodeChallengeCreateNestedManyWithoutResourceInput
    | undefined

  const uri = args.data.uri || `/topics/${name}`

  const createData: Prisma.ResourceCreateInput = {
    type: 'Topic',
    isfolder: false,
    id: id === null ? undefined : id,
    name,
    components,
    CodeChallenge,
    Resource_ResourceToResource_Blog: blogID
      ? { connect: { id: blogID } }
      : undefined,

    // TODO Надо из createResource вынести метод создания УРЛа
    uri,
  }

  if (uri) {
    createData.uri = uri
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
