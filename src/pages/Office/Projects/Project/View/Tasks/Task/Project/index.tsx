import Link from 'next/link'
import React, { useCallback, useMemo } from 'react'
import { OfficeProjectPageViewTaskProjectProps } from './interfaces'
import { OfficeProjectPageViewTaskProjectStyled } from './styles'
import FilterIcon from 'material-ui-icons/FilterList'
import { IconButton } from 'material-ui'

/**
 * Информация о проекте в задаче
 */
const OfficeProjectPageViewTaskProject: React.FC<OfficeProjectPageViewTaskProjectProps> =
  ({ project, filterByProject, ...other }) => {
    const onFilterClick = useCallback(() => {
      filterByProject && filterByProject(project)
    }, [filterByProject, project])

    return useMemo(() => {
      return (
        <OfficeProjectPageViewTaskProjectStyled {...other}>
          <Link href={`/office/projects/${project.id}`}>
            <a title={project.name}>{project.name}</a>
          </Link>{' '}
          {filterByProject ? (
            <IconButton
              className="icon"
              value={project.id}
              onClick={onFilterClick}
            >
              <FilterIcon />
            </IconButton>
          ) : null}
        </OfficeProjectPageViewTaskProjectStyled>
      )
    }, [filterByProject, onFilterClick, other, project.id, project.name])
  }

export default OfficeProjectPageViewTaskProject
