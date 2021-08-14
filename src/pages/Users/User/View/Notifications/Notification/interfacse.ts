import { NotificationTypeNoNestingFragment } from 'src/modules/gql/generated'

export type UserNotificationProps = {
  object: NotificationTypeNoNestingFragment
  checked: boolean
  label: string
}
