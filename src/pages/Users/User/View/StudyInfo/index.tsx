import ProjectLink from 'src/uikit/Link/Project'
import { UserPageViewProps } from '../interfaces'

type UserStudyInfoProps = {
  user: UserPageViewProps['user']
}

export const UserStudyInfo: React.FC<UserStudyInfoProps> = ({ user }) => {
  const project = user.EducationProjects?.at(0)

  if (!project) {
    return null
  }

  return (
    <>
      <ProjectLink object={project}>Пройденные уроки</ProjectLink>
    </>
  )
}
