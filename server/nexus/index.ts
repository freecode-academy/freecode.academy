import { makeSchema, asNexusMethod } from 'nexus'

import './fix/pluralize'

import { GraphQLDateTime } from 'graphql-iso-date'
import { nexusPrisma } from 'nexus-plugin-prisma'

import * as types from './types'
import { applyMiddleware } from 'graphql-middleware'
import { permissions } from '../graphqlServer/permissions'

// @ts-expect-error types
export const DateTime = asNexusMethod(GraphQLDateTime, 'date')

const schemaBase = makeSchema({
  /**
   * Надо будет перепроверить правильно ли использовать эти настройки
   */
  // shouldGenerateArtifacts: process.env.NODE_ENV === 'development',
  // shouldExitAfterGenerateArtifacts: process.env.NODE_ENV !== 'development',
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
      // atomicOperations: true,

      /**
       * Это обязательно, иначе в аргументах будет first, который призма теперь не знает
       */
      paginationStrategy: 'prisma',

      outputs: {
        typegen: __dirname + '/generated/nexusPrisma.ts',
      },
    }),
  ],
  types: {
    ...types,
    // Query,
    // Resource,
    DateTime,
  },
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  contextType: {
    module: require.resolve('./context'),
    export: 'PrismaContext',
  },
  sourceTypes: {
    debug: process.env.NODE_ENV === 'development',
    modules: [
      // {
      //   alias: 'EditorComponent',
      //   module: '@prisma-cms/front-editor/dist/EditorComponent/interfaces',
      //   onlyTypes: ['EditorComponentObject'],
      // },
      // {
      //   module: '@prisma/client',
      //   alias: 'prisma',
      // },
      // {
      //   module: require.resolve('/disk480/www/gorodskie-bani.ru/v2/front/node_modules/.prisma/client/index.d.ts'),
      //   alias: 'prisma',
      // },
      // {
      //   module: require.resolve('/disk480/www/gorodskie-bani.ru/v2/front/server/nexus/types/index.ts'),
      //   alias: 'inputs',
      // },
      // {
      //   module: '@prisma/client',
      //   alias: 'bani684_site_contentWhereInput',
      // },
      // sourceType: {
      // },
      // {
      //   module: path.join(
      //     __dirname,
      //     './endpoints/landing-public/api/generated/PromoCode_.ts'
      //   ),
      //   alias: 'PromoCode_',
      // },
    ],
  },
  prettierConfig:
    process.env.NODE_ENV === 'development'
      ? require.resolve(process.cwd() + '/.prettierrc')
      : undefined,
})

export const schema = applyMiddleware(schemaBase, permissions)
