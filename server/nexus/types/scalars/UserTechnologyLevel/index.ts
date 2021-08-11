import { scalarType } from 'nexus'
// import { GraphQLError } from 'graphql'
// import * as FileType from "file-type";

export const UserTechnologyLevel = scalarType({
  name: 'UserTechnologyLevel',
  // asNexusMethod: 'userTechnologyLevel', // We set this to be used as a method later as `t.upload()` if needed
  description: 'UserTechnologyLevel from 1 to 5',
  // parseValue: async (value) => {
  // },
  parseValue(value) {
    return value
  },
  // serialize: () => {
  //   throw new GraphQLError('UserTechnologyLevel serialization unsupported.')
  // },
  // parseLiteral: (ast) => {
  //   throw new GraphQLError('UserTechnologyLevel literal unsupported.', ast)
  // },
})
