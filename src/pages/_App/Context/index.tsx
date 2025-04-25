import { useApolloClient } from '@apollo/client'
import React, { useCallback, useMemo } from 'react'

import {
  AuthPayloadFragment,
  MeQuery,
  SigninMutation,
  SignupMutation,
} from 'src/modules/gql/generated'

export type ContextValue = {
  user: MeQuery['me']

  onAuthSuccess: (
    data:
      | SignupMutation['response']
      | SigninMutation['response']
      | AuthPayloadFragment
  ) => void
}

export const Context = React.createContext<ContextValue | null>(null)

type AppContextProviderProps = React.PropsWithChildren<{
  user: ContextValue['user']
}>

/**
 * Вообще есть более глобальный контекст, но этот мне тоже нужен
 */
export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  user,
  children,
}) => {
  const apolloClient = useApolloClient()

  const onAuthSuccess = useCallback<ContextValue['onAuthSuccess']>(
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

  const context = useMemo<ContextValue>(() => {
    return {
      onAuthSuccess,
      user,
    }
  }, [onAuthSuccess, user])

  return <Context.Provider value={context}>{children}</Context.Provider>
}

export const useAppContext = () => {
  return React.useContext(Context)
}
