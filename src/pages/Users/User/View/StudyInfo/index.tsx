import ProjectLink from 'src/uikit/Link/Project'
import { UserPageViewProps } from '../interfaces'

type UserStudyInfoProps = {
  user: UserPageViewProps['user']
}

export const UserStudyInfo: React.FC<UserStudyInfoProps> = ({ user }) => {
  const project =
    (user.EducationProjects && user.EducationProjects[0]) || undefined

  if (!project) {
    return null
  }

  return (
    <>
      <ProjectLink object={project}>Пройденные уроки</ProjectLink>
    </>
  )
}
