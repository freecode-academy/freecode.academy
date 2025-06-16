import { useActivitiesSubscription } from 'src/AppContext/hooks/useActivitiesSubscription'
import { ActivitiesViewStyled, ActivitiesViewTable } from './styles'
import { useCallback, useState } from 'react'
import { useAppContext } from 'src/AppContext'
import {
  ApolloClient,
  NormalizedCacheObject,
  useApolloClient,
} from '@apollo/client'
import { ActivityFragment, ActivityType } from 'src/gql/generated'
import { ActivityMessage } from './Message'
import { GridCell, GridRow } from 'src/components/Grid/styles'
import { ActivityUser } from './User'

export const ActivitiesView: React.FC = () => {
  const { user } = useAppContext()

  const client = useApolloClient()

  const [activities, activitiesSetter] = useState<ActivityFragment[]>([])

  const onData = useCallback((activity: ActivityFragment) => {
    activitiesSetter((prev) => [...prev, activity])
  }, [])

  useActivitiesSubscription({
    currentUser: user,
    variables: {
      globalEvents: true,
    },
    onData,
    client: client as unknown as ApolloClient<NormalizedCacheObject>,
  })

  return (
    <ActivitiesViewStyled>
      <ActivitiesViewTable>
        {activities.map((n) => {
          let title: string
          let dataContent: React.ReactNode = null

          switch (n.type) {
            case ActivityType.USERCREATED:
              title = 'Новый пользователь'
              break

            case ActivityType.URLCHANGED:
              title = 'Изменен УРЛ'

              break

            case ActivityType.SENDMESSAGED: {
              title = 'Сообщение'

              if ('ChatMessage' in n) {
                dataContent = <ActivityMessage message={n.ChatMessage} />
              }

              break
            }

            case ActivityType.MINDLOG:
              title = 'MindLog'

              if ('MindLog' in n) {
                dataContent = (
                  <>
                    <h3>{n.MindLog.type}</h3>

                    {n.MindLog.data}
                  </>
                )
              }

              break
          }

          return (
            <GridRow key={n.id}>
              <GridCell>
                <ActivityUser userId={n.userId} />
              </GridCell>
              <GridCell>{title}</GridCell>
              <GridCell>{n.createdAt.toString()}</GridCell>
              <GridCell>{dataContent}</GridCell>
            </GridRow>
          )
        })}
      </ActivitiesViewTable>
    </ActivitiesViewStyled>
  )
}
