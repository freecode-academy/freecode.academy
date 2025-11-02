import { useRouter } from 'next/router'
import { PoliciesBanner } from '../Policies/Banner'
import { useAppContext } from 'src/AppContext'

/**
 * @deprecated
 */
export function usePolicies() {
  const router = useRouter()

  const { user, loginComplete } = useAppContext()

  if (router.asPath.startsWith('/signin')) {
    return {}
  }

  return {
    policies: <PoliciesBanner user={user} loginComplete={loginComplete} />,
  }
}
