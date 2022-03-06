import { PrismaCmsContext } from '@prisma-cms/context'
import { ZenObservable } from 'zen-observable-ts'

export interface SubscriptionProviderProps {
  client: PrismaCmsContext['client']
}

export interface SubscriptionProviderState {
  subscriptions: ZenObservable.Subscription[]
}
