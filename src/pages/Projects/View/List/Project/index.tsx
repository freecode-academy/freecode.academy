import { ProjectsConnectionProjectFragment } from 'src/gql/generated'
import {
  ProjectListProjectStyled,
  ProjectListProjectTitleStyled,
} from './styles'
import UserLink from 'src/uikit/Link/User'

type ProjectViewProps = {
  project: ProjectsConnectionProjectFragment
}

export const ProjectListProject: React.FC<ProjectViewProps> = ({
  project,
  ...other
}) => {
  const { CreatedBy } = project

  return (
    <ProjectListProjectStyled {...other}>
      <ProjectListProjectTitleStyled object={project} />

      {CreatedBy && <UserLink user={CreatedBy} />}
    </ProjectListProjectStyled>
  )
}
