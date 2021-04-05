import React from 'react'
import { useNotificationTypesQuery } from 'src/modules/gql/generated'
import Grid from 'src/uikit/Grid'
import Paper from 'src/uikit/Paper'
import Title from 'src/uikit/Title'
import { UserNotificationsProps } from './interfacse'
import UserNotification from './Notification'

const UserNotifications: React.FC<UserNotificationsProps> = ({
  NotificationTypes,
  userId,
}) => {
  const notifications =
    useNotificationTypesQuery().data?.notificationTypes ?? []

  return (
    <Grid container spacing={8}>
      <Paper>
        <Title>Настройки уведомлений</Title>
        {notifications.map((n) => {
          if (!n) {
            return null
          }

          const { id, name, comment } = n

          return (
            <Grid key={id} item xs={12}>
              <UserNotification
                object={n}
                checked={
                  NotificationTypes?.findIndex((n) => n.id === id) !== -1 ??
                  false
                }
                label={comment || name}
                userId={userId}
              />
            </Grid>
          )
        })}
      </Paper>
    </Grid>
  )
}

export default UserNotifications
