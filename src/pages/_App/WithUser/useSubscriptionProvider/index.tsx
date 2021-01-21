import { useCallback, useEffect } from 'react'

import gql from 'graphql-tag'
import { SubscriptionProviderProps } from './interfaces'

const useSubscriptionProvider = ({ client }: SubscriptionProviderProps) => {
  const resetStore = useCallback(() => {
    client.resetStore().catch(console.error)
  }, [client])

  useEffect(
    function () {
      const nodes = [
        'user',
        'resource',
        // "lesson",
        'task',
        'timer',
        'comment',
        'technology',
        'userTechnology',
        'career',

        // TODO: Check maybe deprecated
        'technologyLesson',

        // TODO: Check maybe deprecated
        'technologyLessonUser',
      ]

      const subscriptions: ZenObservable.Subscription[] = []

      nodes.forEach((n) => {
        const subscription = client
          .subscribe({
            query: gql`
          subscription Resource {
            ${n} {
              mutation
              node {
                id
              }
            }
          }
        `,
          })
          .subscribe({
            next: () => {
              resetStore()
            },
            error(error) {
              console.error('subscribeCalls callback with error: ', n, error)
            },
          })

        subscriptions.push(subscription)
      })

      return () => {
        /**
         * Unsubscribe all
         */
        subscriptions.map((n) => {
          n.unsubscribe()
        })
      }
    },
    [client, resetStore]
  )
}

export default useSubscriptionProvider
