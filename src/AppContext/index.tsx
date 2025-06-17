import { useApolloClient } from '@apollo/client'
import React, { Dispatch, useCallback, useMemo } from 'react'

import {
  AuthPayloadFragment,
  MeQuery,
  SigninMutation,
  SignupMutation,
} from 'src/gql/generated'
import { useAppReducer } from './reducer'
import { AppAction, AppActions, AppState } from './reducer/interfaces'
import { AuthFormResponse } from 'src/components/Auth/forms/interfaces'
import {
  useActivitiesSubscription,
  useActivitiesSubscriptionProps,
} from './hooks/useActivitiesSubscription'
import { ApolloClientNormolized } from 'src/pages/_App/interfaces'

export type AppContextValue = {
  user: MeQuery['me']
  loginComplete: (data: AuthFormResponse) => Promise<void>

  onAuthSuccess: (
    data:
      | SignupMutation['response']
      | SigninMutation['response']
      | AuthPayloadFragment
  ) => void

  appDispatch: Dispatch<AppAction>
  appState: AppState
}

export const Context = React.createContext<AppContextValue | null>(null)

type AppContextProviderProps = React.PropsWithChildren<{
  user: AppContextValue['user']
  loginComplete: AppContextValue['loginComplete']
}>

/**
 * Вообще есть более глобальный контекст, но этот мне тоже нужен
 */
export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  user,
  loginComplete,
  children,
}) => {
  const apolloClient = useApolloClient()

  const onAuthSuccess = useCallback<AppContextValue['onAuthSuccess']>(
    async (data) => {
      const { token } = data

      if (token) {
        global.localStorage.setItem('token', token)
      } else {
        global.localStorage.removeItem('token')
      }

      await apolloClient.resetStore().catch(console.error)
    },
    [apolloClient]
  )

  const { state: appState, dispatch: appDispatch } = useAppReducer()

  const onData = useCallback<
    NonNullable<useActivitiesSubscriptionProps['onData']>
  >(
    (activity) => {
      switch (activity.__typename) {
        case 'ActivityMessage':
          appDispatch({
            type: AppActions.ChatAddMessage,
            message: activity.ChatMessage,
          })
          break
      }
    },
    [appDispatch]
  )

  useActivitiesSubscription({
    currentUser: user,
    client: apolloClient as ApolloClientNormolized,
    variables: {
      globalEvents: false,
    },
    onData,
  })

  const context = useMemo<AppContextValue>(() => {
    return {
      onAuthSuccess,
      user,
      loginComplete,
      appDispatch,
      appState,
    }
  }, [onAuthSuccess, user, loginComplete, appDispatch, appState])

  return <Context.Provider value={context}>{children}</Context.Provider>
}

export const useAppContext = () => {
  const context = React.useContext(Context)

  if (!context) {
    throw new Error('Please, provide AppContextProvider')
  }

  return context
}
