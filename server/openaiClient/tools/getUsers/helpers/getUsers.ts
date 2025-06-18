import { Prisma } from '@prisma/client'
import { execute, parse } from 'graphql'

import { GetUsersArgs } from '..'
import { schema } from '../../../../nexus'
import { PrismaContext } from '../../../../nexus/context'

type getUsersProps = {
  args: GetUsersArgs
  ctx: PrismaContext
}

export async function getUsers({ args, ctx }: getUsersProps) {
  const { ids, search, withSkills = false, withMentors = false } = args

  const query = `query users($where: UserWhereInput, $limit: Int, $withSkills: Boolean = false, $withMentors: Boolean = false ) {
  usersCount(where: $where)

  users(take: $limit, where: $where, orderBy: { updatedAt: desc }) {
    ...UserNoNesting

    intro
    content
    about

    UserTechnologies @include(if: $withSkills) {
      id
      date_from
      date_till
      hiring_status
      isMentor
      level
      status
      updatedAt
      Technology: UserTechnologyTechnology {
        id
        name
      }
    }
    MentorMenteeMentees @include(if: $withMentors) {
      id
      createdAt
      status
      Mentee {
        ...UserNoNesting
      }
    }
    MentorMenteeMentors @include(if: $withMentors) {
      id
      createdAt
      status
      Mentor {
        ...UserNoNesting
      }
    }
  }
}

fragment UserNoNesting on User {
  id
  fullname
  username
  technologyLevel
}
  `

  const where: Prisma.UserWhereInput = {
    UserTechnologies: {
      some: {
        id: {},
      },
    },
  }

  if (search) {
    where.AND = [
      {
        OR: [
          {
            username: {
              contains: search,
            },
          },
          {
            fullname: {
              contains: search,
            },
          },
        ],
      },
    ]
  }

  if (ids?.length) {
    where.id = {
      in: ids,
    }
  }

  return execute({
    schema: schema,
    document: parse(query),
    contextValue: ctx,
    variableValues: {
      where,
      // limit,
      withSkills,
      withMentors,
    },
  })
}
