import { extendType, inputObjectType, nonNull, objectType } from 'nexus'
import { n8nTrainerContainersResolver } from './resolves/n8nTrainerContainers'
import { n8nTrainerCreateContainerResolver } from './resolves/n8nTrainerCreateContainer'
import { n8nTrainerContainerCreateAuthResolver } from './resolves/n8nTrainerContainerCreateAuth'
import { n8nTrainerContainerGetAuthTokenResolver } from './resolves/n8nTrainerContainerGetAuthToken'

export const N8nTrainerContainer = objectType({
  name: 'N8nTrainerContainer',
  definition(t) {
    t.nonNull.string('name')
    t.nonNull.id('lesson')
    t.nonNull.string('status')
  },
})

export const N8nTrainerListContainers = extendType({
  type: 'Query',
  definition(t) {
    t.nonNull.list.nonNull.field('n8nTrainerContainers', {
      type: 'N8nTrainerContainer',
      resolve: n8nTrainerContainersResolver,
    })

    t.nonNull.string('n8nTrainerContainerGetAuthToken', {
      args: {
        browserId: nonNull('String'),
      },
      resolve: n8nTrainerContainerGetAuthTokenResolver,
    })
  },
})

export const N8nTrainerCreateContainer = extendType({
  type: 'Mutation',
  definition(t) {
    t.field('n8nTrainerCreateContainer', {
      type: 'N8nTrainerContainer',
      args: {
        lesson: nonNull('String'),
      },
      resolve: n8nTrainerCreateContainerResolver,
    })
    t.field('n8nTrainerContainerCreateAuth', {
      type: 'N8nTrainerCreateContainerResponse',
      args: {
        data: nonNull('N8nTrainerCreateContainerInput'),
      },
      resolve: n8nTrainerContainerCreateAuthResolver,
    })
  },
})

export const N8nTrainerCreateContainerResponse = objectType({
  name: 'N8nTrainerCreateContainerResponse',
  definition(t) {
    t.nonNull.string('browserId')
  },
})

export const N8nTrainerCreateContainerInput = inputObjectType({
  name: 'N8nTrainerCreateContainerInput',
  definition(t) {
    t.nonNull.string('lesson')
    t.string('email')
  },
})
