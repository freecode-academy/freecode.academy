import { PrismaCmsContext } from '@prisma-cms/context'

export interface SubscriptionProviderProps {
  client: PrismaCmsContext['client']
}

export interface SubscriptionProviderState {
  subscriptions: ZenObservable.Subscription[]
}
