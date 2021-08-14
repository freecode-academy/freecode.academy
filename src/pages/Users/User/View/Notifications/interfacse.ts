import { NotificationTypeNoNestingFragment } from 'src/modules/gql/generated'

export type UserNotificationsProps = {
  /**
   * Настройки уведомлений
   */
  NotificationTypes: NotificationTypeNoNestingFragment[] | null | undefined
}
