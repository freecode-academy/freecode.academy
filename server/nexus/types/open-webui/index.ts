import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { openWebUiUsersResolver } from './resolvers/openWebUiUsers'
import { createOpenWebUiUserResolver } from './resolvers/createOpenWebUiUser'
import { hasWebUiProfile } from './helpers/hasWebUiProfile'

export const OpenWebUiExtendsUser = extendType({
  type: 'User',
  definition(t) {
    t.nonNull.boolean('hasWebUiProfile', {
      async resolve(parent) {
        return hasWebUiProfile(parent)
      },
    })
  },
})

export const OpenWebUiExtendsQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('openWebUiUsers', {
      type: 'OpenWebUiUsersResponse',
      resolve: openWebUiUsersResolver,
    })
  },
})

export const OpenWebUiExtendsMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('createOpenWebUiUser', {
      type: 'User',
      args: {
        data: nonNull('OpenWebUiUserCreateInput'),
      },
      resolve: createOpenWebUiUserResolver,
    })
  },
})

export const OpenWebUiUsersResponse = objectType({
  name: 'OpenWebUiUsersResponse',
  definition(t) {
    t.nonNull.int('total')
    t.nonNull.list.nonNull.field('users', {
      type: 'OpenWebUiUser',
    })
  },
})

export const OpenWebUiUser = objectType({
  name: 'OpenWebUiUser',
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.string('email')
    t.string('name')
  },
})

export const OpenWebUiUserCreateInput = inputObjectType({
  name: 'OpenWebUiUserCreateInput',
  definition(t) {
    t.nonNull.string('password')
    t.string('email')
  },
})
