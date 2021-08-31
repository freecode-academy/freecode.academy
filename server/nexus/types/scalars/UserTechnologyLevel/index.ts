import { asNexusMethod } from 'nexus'
import { GraphQLScalarType, Kind } from 'graphql'
import { NexusGenScalars } from 'server/nexus/generated/nexus'

const validateUserTechnologyLevel = (value: number) => {
  if (value < 1) {
    throw new TypeError('Не должно быть меньше 1')
  } else if (value > 5) {
    throw new TypeError('Не должно быть больше 5')
  }

  return value as NexusGenScalars['UserTechnologyLevel']
}

export const UserTechnologyLevel = asNexusMethod(
  new GraphQLScalarType({
    name: 'UserTechnologyLevel',
    description: 'UserTechnologyLevel from 1 to 5',
    // parseValue: async (value) => {
    // },
    parseValue(value) {
      return value
    },
    serialize: (value) => {
      if (validateUserTechnologyLevel(value)) {
        return value
      }

      throw new TypeError(
        `UserTechnologyLevel cannot represent an invalid value ${value}.`
      )
    },
    parseLiteral: (ast) => {
      if (ast.kind !== Kind.INT) {
        throw new TypeError(`Значение должно быть числом`)
      }
      const { value } = ast

      return validateUserTechnologyLevel(parseInt(value))
    },
  }),
  'technologyLevel',
  '1 | 2 | 3 | 4 | 5'
)
