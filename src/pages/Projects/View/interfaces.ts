import { ObjectsListViewProps } from 'src/components/view/List/interfaces'
import {
  ProjectsConnectionProjectFragment,
  ProjectsConnectionQueryVariables,
} from 'src/gql/generated'

export interface ProjectsViewProps extends ObjectsListViewProps {
  objects: ProjectsConnectionProjectFragment[]

  variables?: ProjectsConnectionQueryVariables
}
