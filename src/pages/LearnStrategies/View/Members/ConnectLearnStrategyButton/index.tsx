import React, { useCallback, useMemo } from 'react'
import Button from 'src/components/ui/Button'
import { useCreateUserLearnStrategyMutation } from 'src/modules/gql/generated'
import { ConnectLearnStrategyButtonProps } from './interfaces'

export const ConnectLearnStrategyButton: React.FC<ConnectLearnStrategyButtonProps> =
  ({ currentUser, learnStrategy, canConnect }) => {
    const createMutation = useCreateUserLearnStrategyMutation({
      variables: {
        data: {
          LearnStrategy: {
            id: learnStrategy.id,
          },
        },
      },
    })

    const onClickConnect = useCallback(() => {
      if (createMutation[1].loading) {
        return
      }

      createMutation[0]()
        .then((r) => {
          if (r.data?.createUserLearnStrategy) {
            try {
              createMutation[1].client.resetStore()
            } catch (error) {
              console.error(error)
            }
          }
        })
        .catch(alert)
    }, [createMutation])

    return useMemo(() => {
      if (!currentUser || currentUser.id === learnStrategy.createdById) {
        return null
      }

      if (
        learnStrategy.UserLearnStrategies?.findIndex(
          (n) => n.createdById === currentUser.id
        ) !== -1
      ) {
        return (
          <Button size="small" variant="success" disabled={true}>
            Подключено
          </Button>
        )
      }

      /**
       * В некоторых местах не надо показывать кнопку для подключения
       */
      if (!canConnect) {
        return null
      }

      return (
        <Button
          size="small"
          variant="success"
          onClick={onClickConnect}
          disabled={createMutation[1].loading}
        >
          Подключить
        </Button>
      )
    }, [
      createMutation,
      currentUser,
      learnStrategy.UserLearnStrategies,
      learnStrategy.createdById,
      onClickConnect,
      canConnect,
    ])
  }
