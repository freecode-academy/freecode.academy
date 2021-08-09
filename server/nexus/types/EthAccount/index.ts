import { enumType, objectType } from 'nexus'

export const EthAccount = objectType({
  name: 'EthAccount',
  sourceType: {
    module: '@prisma/client',
    export: 'EthAccount',
  },
  definition(t) {
    t.nonNull.id('id')
    t.nonNull.date('createdAt')
    t.nonNull.date('updatedAt')
    t.string('name')
    t.field('description', {
      type: 'JSON',
    })
    t.field('abi', {
      type: 'JSON',
    })
    t.nonNull.string('address')
    t.field('type', {
      type: 'EthAccountType',
    })
    t.string('source')
    t.string('bytecode')
    t.float('balance', {
      args: {
        convert: 'EthAmountConvert',
      },
    })
  },
})

export const EthAmountConvert = enumType({
  name: 'EthAmountConvert',
  members: [
    'wei',
    'Kwei',
    'Mwei',
    'Gwei',
    'nano',
    'ether',
    'kether',
    'mether',
    'gether',
    'tether',
  ],
})

export const EthAccountType = enumType({
  name: 'EthAccountType',
  members: ['Account', 'Contract'],
})
