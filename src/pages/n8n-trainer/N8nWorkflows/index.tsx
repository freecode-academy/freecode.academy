import { Page } from 'src/pages/_App/interfaces'
import { N8nWorkflowsPageStyled } from './styles'
import {
  N8nWorkflowsDocument,
  N8nWorkflowsQuery,
  N8nWorkflowsQueryVariables,
  useN8nTrainerContainersQuery,
  useN8nWorkflowsQuery,
} from 'src/gql/generated'
import { N8nWorkflow } from './N8nWorkflow/N8nWorkflow'
import { NextSeo } from 'next-seo'
import { useCurrentUser } from 'src/hooks/useCurrentUser'

export const N8nWorkflowsPage: Page = () => {
  const { user } = useCurrentUser()

  const response = useN8nWorkflowsQuery()

  const n8nTrainerContainersResponse = useN8nTrainerContainersQuery({
    skip: !user,
    fetchPolicy: 'network-only',
  })

  const n8nTrainerContainers =
    n8nTrainerContainersResponse.data?.n8nTrainerContainers

  return (
    <N8nWorkflowsPageStyled>
      <NextSeo
        title="Учебные N8n Workflows - Готовые примеры для изучения"
        description="Коллекция готовых N8n workflows для начинающих программистов. Запускайте и изучайте примеры автоматизации и интеграций."
      />

      {response.data?.n8nWorkflows.map((n) => (
        <N8nWorkflow
          key={n.key}
          n8nWorkflow={n}
          n8nTrainerContainer={n8nTrainerContainers?.find(
            (c) => c.lesson === n.key
          )}
        />
      ))}
    </N8nWorkflowsPageStyled>
  )
}

N8nWorkflowsPage.getInitialProps = async ({ apolloClient }) => {
  await apolloClient.query<N8nWorkflowsQuery, N8nWorkflowsQueryVariables>({
    query: N8nWorkflowsDocument,
  })

  return {}
}
