import { useEffect } from 'react'
import {
  N8nTrainerContainerGetAuthTokenDocument,
  N8nTrainerContainerGetAuthTokenQuery,
  N8nTrainerContainerGetAuthTokenQueryVariables,
} from 'src/gql/generated'
import { Page, PageProps } from 'src/pages/_App/interfaces'

type N8nSsoAuthProps = PageProps & {
  browserId: string
}

const N8nSsoAuth: Page<N8nSsoAuthProps> = ({ browserId }) => {
  useEffect(() => {
    localStorage.setItem('n8n-browserId', browserId)

    window.location.replace('/')
  }, [browserId])

  return <></>
}

export default N8nSsoAuth

N8nSsoAuth.getInitialProps = async ({ query, apolloClient, req, res }) => {
  const browserId = query.browserId

  if (!browserId || !(typeof browserId === 'string')) {
    throw new Error('Can not get browserId')
  }

  if (req && res) {
    const result = await apolloClient.query<
      N8nTrainerContainerGetAuthTokenQuery,
      N8nTrainerContainerGetAuthTokenQueryVariables
    >({
      query: N8nTrainerContainerGetAuthTokenDocument,
      variables: {
        browserId,
      },
    })

    const token = result.data?.n8nTrainerContainerGetAuthToken

    if (token) {
      res.setHeader(
        'Set-Cookie',
        `n8n-auth=${token}; Path=/; HttpOnly; SameSite=Lax`
      )
    }
  }

  return {
    browserId,
  }
}
