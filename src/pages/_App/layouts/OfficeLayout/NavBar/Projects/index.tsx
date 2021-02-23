import React, { useMemo } from 'react'
import { SideBarProjectProps } from './interfaces'
import { SideBarProjectStyled } from './styles'

/**
 * Меню проектов
 */
const SideBarProject: React.FC<SideBarProjectProps> = ({ projects }) => {
  return useMemo(() => {
    return (
      <>
        <SideBarProjectStyled>
          {projects.map((project) => {
            return <div key={project.id}>{project.name}</div>
          })}
        </SideBarProjectStyled>
      </>
    )
  }, [projects])
}

export default SideBarProject
