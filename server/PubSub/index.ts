import { PubSub } from 'graphql-subscriptions'
import { NexusGenInterfaces } from '../nexus/generated/nexus'
import { PUBSUB_TYPE } from './interfaces'

export type PubSubInterface = {
  [PUBSUB_TYPE.ACTIVITY_ADDED]: NexusGenInterfaces['Activity']
}

// Создаем экземпляр PubSub для использования в GraphQL подписках
export const pubsub = new PubSub<PubSubInterface>()
