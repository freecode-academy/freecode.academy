import React from 'react'
import { ChatMessageFragment } from 'src/gql/generated'
import { ActivityUser } from '../User'

export type ActivityMessageProps = {
  message: ChatMessageFragment
}

export const ActivityMessage: React.FC<ActivityMessageProps> = ({
  message,
}) => {
  const { toUserId } = message
  return (
    <>
      {toUserId && <ActivityUser userId={toUserId} />} {message.text}
    </>
  )
}
