// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { NotificationTypeNoNestingFragment } from 'src/gql/generated'

export type UserNotificationsProps = {
  /**
   * Настройки уведомлений
   */
  NotificationTypes: NotificationTypeNoNestingFragment[] | null | undefined
}
