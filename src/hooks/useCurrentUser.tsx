import { useApolloClient } from '@apollo/client'
import { useContext, useCallback } from 'react'
// import { Context } from 'src/pages/_App/Context'
import Context, { PrismaCmsContext } from '@prisma-cms/context'

/**
 * Get current authorized user
 */
export const useCurrentUser = () => {
  const context = useContext(Context) as PrismaCmsContext

  const apolloClient = useApolloClient()

  const logout = useCallback(() => {
    global.localStorage?.removeItem('token')

    apolloClient.resetStore().catch(console.error)
  }, [apolloClient])

  return {
    user: context?.user,
    logout,
  }
}
