import { useRouter } from 'next/router'
import { PoliciesBanner } from '../Policies/Banner'

export function usePolicies() {
  const router = useRouter()

  if (router.asPath.startsWith('/signin')) {
    return {}
  }

  return {
    policies: <PoliciesBanner />,
  }
}
