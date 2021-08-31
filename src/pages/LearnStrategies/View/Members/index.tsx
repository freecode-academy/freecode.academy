import React, { useCallback, useMemo } from 'react'
import Button from 'src/components/ui/Button'
import { useCreateUserLearnStrategyMutation } from 'src/modules/gql/generated'
import { UikitUserLink } from 'src/uikit/Link/User'
import { LearnStrategiesViewMembersProps } from './interfaces'
import { LearnStrategiesViewMembersStyled } from './styles'

export const LearnStrategiesViewMembers: React.FC<LearnStrategiesViewMembersProps> =
  ({ learnStrategy, currentUser }) => {
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

    const connect = useMemo(() => {
      if (!currentUser || currentUser.id === learnStrategy.createdById) {
        return null
      }

      if (
        learnStrategy.UserLearnStrategies?.findIndex(
          (n) => n.createdById === currentUser.id
        ) !== -1
      ) {
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
    ])

    return useMemo(() => {
      return (
        <LearnStrategiesViewMembersStyled>
          {connect}
          {learnStrategy.UserLearnStrategies?.map((n) => {
            return (
              <div key={n.id}>
                <UikitUserLink user={n.CreatedBy} />
              </div>
            )
          })}
        </LearnStrategiesViewMembersStyled>
      )
    }, [connect, learnStrategy.UserLearnStrategies])
  }
