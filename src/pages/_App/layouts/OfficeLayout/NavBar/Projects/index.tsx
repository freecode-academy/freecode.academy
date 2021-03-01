import React, { useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconButton } from 'material-ui'
import AddIcon from 'material-ui-icons/Add'
import { SideBarProjectProps } from './interfaces'
import { SideBarProjectStyled } from './styles'

/**
 * Меню проектов
 */
const SideBarProject: React.FC<SideBarProjectProps> = ({ projects, tasks }) => {
  const router = useRouter()

  const { projectId } = router.query

  return useMemo(() => {
    return (
      <>
        <SideBarProjectStyled>
          <div className="title">
            <strong>Проекты</strong>{' '}
            <Link href="/office/projects/create">
              <IconButton>
                <AddIcon />
              </IconButton>
            </Link>
          </div>
          {projects.map((project) => {
            const tasksCount = tasks.filter((n) =>
              n.TaskProjects?.find((p) => p.Project.id === project.id)
            ).length

            const isActive = projectId === project.id

            return (
              <div key={project.id}>
                <Link href={`/office/projects/${project.id}`}>
                  <a
                    title={project.name}
                    className={['project', isActive ? 'active' : ''].join(' ')}
                  >
                    {project.name}{' '}
                    {tasksCount ? (
                      <span title="Количество активных задач в проекте">
                        {' '}
                        ({tasksCount})
                      </span>
                    ) : null}
                  </a>
                </Link>
              </div>
            )
          })}
        </SideBarProjectStyled>
      </>
    )
  }, [projectId, projects, tasks])
}

export default SideBarProject
