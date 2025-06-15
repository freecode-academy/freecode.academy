import { NotificationTypeNoNestingFragment } from 'src/gql/generated'

export type UserNotificationsProps = {
  /**
   * Настройки уведомлений
   */
  NotificationTypes: NotificationTypeNoNestingFragment[] | null | undefined
}
