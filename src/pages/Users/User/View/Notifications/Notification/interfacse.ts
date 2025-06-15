import { NotificationTypeNoNestingFragment } from 'src/gql/generated'

export type UserNotificationProps = {
  object: NotificationTypeNoNestingFragment
  checked: boolean
  label: string
}
