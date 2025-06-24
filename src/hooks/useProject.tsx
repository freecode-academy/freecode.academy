import { useProjectQuery } from 'src/gql/generated'

export function useProject(projectId: string | null | undefined) {
  const response = useProjectQuery({
    variables: projectId
      ? {
          where: {
            id: projectId,
          },
        }
      : undefined,
    skip: !projectId,
  })

  return response.data?.project
}
