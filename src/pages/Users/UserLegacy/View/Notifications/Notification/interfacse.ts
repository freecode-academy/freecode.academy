// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { NotificationTypeNoNestingFragment } from 'src/gql/generated'

export type UserNotificationProps = {
  object: NotificationTypeNoNestingFragment
  checked: boolean
  label: string
}
