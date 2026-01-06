import React, { useMemo } from 'react'
import { FormattedDate } from 'src/ui-kit/format/FormattedDate'
import { UserLink } from 'src/uikit/Link/User'

import {
  GridTableAttributeStyled,
  GridTableItemStyled,
  GridTableAttributesContainerStyled,
} from 'src/components/GridTable/styles'
import TaskStatus from '../../TaskStatus'
import { TasksViewTaskProps } from './interfaces'
// import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'
import TaskLink from 'src/uikit/Link/Task'
// import { ProjectLink } from 'src/uikit/Link/Project'
import TaskButtons from './TaskButtons'
import TechnologyLink from 'src/uikit/Link/Technology'
import Typography from 'material-ui/Typography'
import { SiteFrontEditor } from 'src/components/SiteFrontEditor'
import { useProject } from 'src/hooks/useProject'
import { ProjectLink } from 'src/uikit/Link/Project'

const TasksViewTask: React.FC<TasksViewTaskProps> = ({ object, ...other }) => {
  // const context = useContext(PrismaContext) as PrismaCmsContext

  const buttons = useMemo(() => {
    return <TaskButtons object={object} />
  }, [object])

  const timers = useMemo(() => {
    const activeTimers = object.Timers?.filter((n) => n.stopedAt === null)

    return activeTimers?.map((n) => {
      const { id, CreatedBy } = n

      return CreatedBy ? (
        <UserLink key={id} user={CreatedBy} size="small" showName={false} />
      ) : null
    })
  }, [object.Timers])

  // const projects = useMemo(() => {
  //   if (object.TaskProjects?.length) {
  //     return (
  //       <p>
  //         Проект{object.TaskProjects?.length > 1 ? 'ы' : ''}:{' '}
  //         {object.TaskProjects.map((n) => {
  //           return <ProjectLink key={n.id} object={n.Project} />
  //         }).reduce<React.ReactNode>(
  //           (curr, next) => (curr ? [curr, ', ', next] : next),
  //           null
  //         )}
  //       </p>
  //     )
  //   }

  //   return null
  // }, [object.TaskProjects])

  /**
   * Требуемые технологии
   */
  const technologies = useMemo(() => {
    if (!object.TaskTechnologies?.length) {
      return null
    }

    const technologies = object.TaskTechnologies?.map((n) =>
      n.Technology ? (
        <span key={n.id}>
          <TechnologyLink object={n.Technology} />{' '}
          {n.level ? (
            <span title={'Требуемый уровень'}>({n.level})</span>
          ) : null}
        </span>
      ) : null
    ).reduce<React.ReactNode[]>(
      (curr, next) => (curr.length ? [curr, ', ', next] : [next]),
      []
    )

    return (
      <div>
        <Typography variant="subheading">Требуемые технологии</Typography>{' '}
        {technologies}
      </div>
    )
  }, [object.TaskTechnologies])

  const project = useProject(object.projectId)

  return (
    <>
      <GridTableItemStyled {...other}>
        <GridTableAttributeStyled className="buttons">
          {buttons}
        </GridTableAttributeStyled>

        <GridTableAttributeStyled data-label="Статус" className="status">
          <TaskStatus value={object.status} />
        </GridTableAttributeStyled>

        <GridTableAttributeStyled className="content" data-label="Описание">
          <p>
            Задача: <TaskLink object={object} />{' '}
            {object.needHelp ? (
              <Typography component="span" color="primary">
                Нужна помощь
              </Typography>
            ) : null}
          </p>

          {project && (
            <div>
              Проект: <ProjectLink object={project} />
            </div>
          )}

          <SiteFrontEditor
            // readOnly={!inEditMode}
            // onChange={this.onEditorChange}
            // editorKey={`task-${object.id}`}
            value={object.content}
          />

          {technologies}
        </GridTableAttributeStyled>

        <GridTableAttributesContainerStyled>
          <GridTableAttributeStyled>
            <FormattedDate value={object.createdAt} format="dateTimeMedium" />
          </GridTableAttributeStyled>

          <GridTableAttributeStyled>
            <FormattedDate
              value={object.startDatePlaning}
              format="dateTimeMedium"
            />
          </GridTableAttributeStyled>

          <GridTableAttributeStyled>
            <FormattedDate
              value={object.endDatePlaning}
              format="dateTimeMedium"
            />
          </GridTableAttributeStyled>

          <GridTableAttributeStyled>
            <FormattedDate value={object.startDate} format="dateTimeMedium" />
          </GridTableAttributeStyled>

          <GridTableAttributeStyled>
            <FormattedDate value={object.endDate} format="dateTimeMedium" />
          </GridTableAttributeStyled>
        </GridTableAttributesContainerStyled>

        {object.CreatedBy ? (
          <GridTableAttributeStyled data-label="Постановщик">
            <UserLink user={object.CreatedBy} />
          </GridTableAttributeStyled>
        ) : null}

        <GridTableAttributeStyled data-label="Кто работает">
          {timers}
        </GridTableAttributeStyled>
      </GridTableItemStyled>
    </>
  )
}

export default TasksViewTask
