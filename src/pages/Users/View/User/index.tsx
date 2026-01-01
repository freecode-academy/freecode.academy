// import Typography from 'material-ui/Typography'
// import moment from 'moment'
import {
  // GridTableAttributesContainerStyled,
  GridTableAttributeStyled,
  GridTableItemStyled,
} from 'src/components/GridTable/styles'
import { getUserTechnologyLevelText } from 'src/helpers/getUserTechnologyLevelText'
import { UsersConnectionUserFragment } from 'src/gql/generated'
// import Link from 'src/uikit/Link'
// import ProjectLink from 'src/uikit/Link/Project'
import { UserLink } from 'src/uikit/Link/User'
import { MarkdownField } from 'src/components/MarkdownField'

type UsersViewUserProps = {
  user: UsersConnectionUserFragment
}

export const UsersViewUser: React.FC<UsersViewUserProps> = ({ user }) => {
  // const projectsCreated = useMemo(() => {
  //   const { username, ProjectsCreated } = user

  //   let output

  //   const max = 3

  //   if (ProjectsCreated && ProjectsCreated.length) {
  //     const projects = ProjectsCreated.map((n) => {
  //       const { id } = n

  //       return <ProjectLink key={id} object={n} />
  //     })

  //     const listProjects: any[] = projects.splice(0, max)

  //     const moreProjects = projects.length

  //     output = (
  //       <>
  //         {listProjects.reduce((a, b) => [a, ', ', b])}{' '}
  //         {moreProjects ? (
  //           <Link
  //             // TODO поправить ссылки
  //             href={`/projects?filters=%7B"CreatedBy"%3A%7B"username"%3A"${username}"%7D%7D`}
  //           >
  //             <a>
  //               <Typography variant="caption">и еще {moreProjects}</Typography>
  //             </a>
  //           </Link>
  //         ) : null}
  //       </>
  //     )
  //   }

  //   return output
  // }, [user])

  // const projectsMember = useMemo(() => {
  //   const { username,   } = user

  //   let output

  //   const max = 3

  //   if (Projects && Projects.length) {
  //     const projects = Projects.map((n) => {
  //       const { id, Project } = n

  //       return <ProjectLink key={id} object={Project} />
  //     })

  //     const listProjects: any[] = projects.splice(0, max)

  //     const moreProjects = projects.length

  //     output = (
  //       <>
  //         {listProjects.reduce((a, b) => [a, ', ', b])}{' '}
  //         {moreProjects ? (
  //           <Link
  //             // TODO поправить ссылки
  //             href={`/projects?filters=%7B"Members_some"%3A%7B"User"%3A%7B"username"%3A"${username}"%7D%7D%7D`}
  //           >
  //             <a>
  //               <Typography variant="caption">и еще {moreProjects}</Typography>
  //             </a>
  //           </Link>
  //         ) : null}
  //       </>
  //     )
  //   }

  //   return output
  // }, [user])

  return (
    <>
      <GridTableItemStyled>
        <GridTableAttributeStyled data-label="Пользователь">
          <UserLink user={user} />
        </GridTableAttributeStyled>
        <GridTableAttributeStyled data-label="Рейтинг">
          {user.rating ? user.rating : null}
        </GridTableAttributeStyled>

        <GridTableAttributeStyled data-label="Технологический уровень">
          {user.technologyLevel &&
            getUserTechnologyLevelText(user.technologyLevel)}
        </GridTableAttributeStyled>

        <GridTableAttributeStyled data-label="О себе">
          {user.intro && <MarkdownField>{user.intro}</MarkdownField>}
        </GridTableAttributeStyled>

        {/* <GridTableAttributeStyled data-label="Участвует в проектах">
            {projectsMember}
          </GridTableAttributeStyled> */}

        {/* <GridTableAttributesContainerStyled>
          <GridTableAttributeStyled>
            <span
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              {moment(user.createdAt).format('YYYY-MM-DD HH:mm:ss')}
            </span>
          </GridTableAttributeStyled>

          <GridTableAttributeStyled>
            <span
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              {moment(user.updatedAt).format('YYYY-MM-DD HH:mm:ss')}
            </span>
          </GridTableAttributeStyled>
        </GridTableAttributesContainerStyled> */}
      </GridTableItemStyled>
    </>
  )
}
