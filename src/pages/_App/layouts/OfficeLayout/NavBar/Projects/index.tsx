import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import { SideBarProjectProps } from './interfaces'
import { SideBarProjectStyled } from './styles'

/**
 * Меню проектов
 */
const SideBarProject: React.FC<SideBarProjectProps> = ({ projects }) => {
  const router = useRouter()

  const { projectId } = router.query

  return useMemo(() => {
    return (
      <>
        <SideBarProjectStyled>
          {projects.map((project) => {
            const isActive = projectId === project.id

            return (
              <div key={project.id}>
                <Link href={`/office/projects/${project.id}`}>
                  <a
                    title={project.name}
                    className={['project', isActive ? 'active' : ''].join(' ')}
                  >
                    {project.name}
                  </a>
                </Link>
              </div>
            )
          })}
        </SideBarProjectStyled>
      </>
    )
  }, [projectId, projects])
}

export default SideBarProject
