import React from 'react'
import {
  MeQuery,
  SigninMutation,
  SignupMutation,
} from 'src/modules/gql/generated'

export type ContextValue = {
  user: MeQuery['user']

  onAuthSuccess: (
    data: SignupMutation['signup'] | SigninMutation['response']
  ) => void
}

export const Context = React.createContext<ContextValue | null>(null)
