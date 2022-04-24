import React, { useMemo } from 'react'
import Editor from '@prisma-cms/editor'
import moment from 'moment'
import UserLink from 'src/uikit/Link/User'

import {
  GridTableAttributeStyled,
  GridTableItemStyled,
  GridTableAttributesContainerStyled,
} from 'src/components/GridTable/styles'
import TaskStatus from '../../TaskStatus'
import { TasksViewTaskProps } from './interfaces'
import UikitUserLink from 'src/uikit/Link/User'
// import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'
import TaskLink from 'src/uikit/Link/Task'
import ProjectLink from 'src/uikit/Link/Project'
import TaskButtons from './TaskButtons'
import TechnologyLink from 'src/uikit/Link/Technology'
import Typography from 'material-ui/Typography'

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

  const projects = useMemo(() => {
    if (object.TaskProjects?.length) {
      return (
        <p>
          Проект{object.TaskProjects?.length > 1 ? 'ы' : ''}:{' '}
          {object.TaskProjects.map((n) => {
            return <ProjectLink key={n.id} object={n.Project} />
          }).reduce<React.ReactNode>(
            (curr, next) => (curr ? [curr, ', ', next] : next),
            null
          )}
        </p>
      )
    }

    return null
  }, [object.TaskProjects])

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

  return useMemo(() => {
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

            {projects}

            <Editor
              // readOnly={!inEditMode}
              // onChange={this.onEditorChange}
              editorKey={`task-${object.id}`}
              value={object.content}
            />

            {technologies}
          </GridTableAttributeStyled>

          <GridTableAttributesContainerStyled>
            <GridTableAttributeStyled>
              {object.createdAt ? moment(object.createdAt).format('lll') : null}
            </GridTableAttributeStyled>
            <GridTableAttributeStyled>
              {object.startDatePlaning
                ? moment(object.startDatePlaning).format('lll')
                : null}
            </GridTableAttributeStyled>
            <GridTableAttributeStyled>
              {object.endDatePlaning
                ? moment(object.endDatePlaning).format('lll')
                : null}
            </GridTableAttributeStyled>

            <GridTableAttributeStyled>
              {object.startDate ? moment(object.startDate).format('lll') : null}
            </GridTableAttributeStyled>
            <GridTableAttributeStyled>
              {object.endDate ? moment(object.endDate).format('lll') : null}
            </GridTableAttributeStyled>
          </GridTableAttributesContainerStyled>

          {object.CreatedBy ? (
            <GridTableAttributeStyled data-label="Постановщик">
              <UikitUserLink user={object.CreatedBy} />
            </GridTableAttributeStyled>
          ) : null}

          <GridTableAttributeStyled data-label="Кто работает">
            {timers}
          </GridTableAttributeStyled>
        </GridTableItemStyled>
      </>
    )
  }, [buttons, object, other, projects, technologies, timers])
}

export default TasksViewTask
