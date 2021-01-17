import React, { useCallback, useMemo, useState } from 'react'
import Button from 'material-ui/Button/Button'
import { TextField } from 'material-ui'
import Grid from 'src/uikit/Grid'
import { CreateTaskFormProps } from './interfaces'

import { useCreateTaskProcessorMutation } from 'src/modules/gql/generated'
import useProcessorMutation from 'src/hooks/useProcessorMutation'
import Editor from 'src/uikit/Editor'
import { PrismaCmsEditorRawContent } from '@prisma-cms/editor/dist'
import { useRouter } from 'next/router'

/**
 * Форма создания задачи
 */
const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ options }) => {
  type Data = typeof options.variables.data
  type Name = keyof Data

  const router = useRouter()

  // useFormField({
  //   Component: TextField,
  //   data: options.variables.data,
  //   name: "nameffef",
  // });

  const [opened, setOpened] = useState(false)

  const toggleOpened = useCallback(() => {
    setOpened(!opened)
  }, [opened])

  // const defaultData = useMemo<TaskCreateInput>(() => ({
  //   Project: {
  //     connect: {
  //       id: project.id,
  //     },
  //   },
  //   name: "",
  // }), [project.id]);

  const [variables, setVariables] = useState(options.variables)

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name
      const value = event.target.value

      if (!name) {
        return
      }

      // switch (name) {

      //   case "":

      //     break;

      // }

      const data = variables.data

      setVariables({
        ...variables,
        data: {
          ...data,
          // ...variables?.data,
          [name]: value,
        },
      })
    },
    [variables]
  )

  const resetForm = useCallback(() => {
    setOpened(false)
    setVariables(options.variables)
  }, [options.variables])

  const [
    createTaskProcessor,
    createTaskProcessorResult,
  ] = useCreateTaskProcessorMutation({
    onCompleted: (data) => {
      if (data.response.success && data.response.data?.id) {
        resetForm()
        router.push(`/tasks/${data.response.data?.id}`)
      }
    },
  })

  const createMutation = useProcessorMutation({
    processor: createTaskProcessor,
    loading: createTaskProcessorResult.loading,
  })

  const errors = createMutation.errors

  const createTask = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()

      createMutation.mutation({
        variables,
      })
    },
    [createMutation, variables]
  )

  const onEditorChange = useCallback(
    (content: PrismaCmsEditorRawContent) => {
      const data = variables.data

      setVariables({
        ...variables,
        data: {
          ...data,
          // ...variables?.data,
          content: content,
        },
      })
    },
    [variables]
  )

  /**
   * Удаляем ошибку при фокусе
   */
  const onFocus = useCallback(
    (event: React.FocusEvent<HTMLInputElement>) => {
      const name = event.target.name

      const error = errors.find((n) => n.key === name)

      error && createMutation.removeError(error)
    },
    [createMutation, errors]
  )

  /**
   * Название
   */
  const name = useMemo(() => {
    const fieldName: Name = 'name'

    const error = errors.find((n) => n.key === fieldName)

    return (
      <TextField
        name={fieldName}
        onChange={onChange}
        value={variables.data.name}
        fullWidth
        label="Название задачи"
        error={!!error}
        helperText={error?.message}
        onFocus={onFocus}
      />
    )
  }, [errors, onChange, onFocus, variables.data.name])

  const startDatePlaning = useMemo(() => {
    const fieldName: Name = 'startDatePlaning'

    const error = errors.find((n) => n.key === fieldName)

    let value: typeof variables.data.startDatePlaning | string =
      variables.data.startDatePlaning

    if (value && value instanceof Date) {
      value = value.toString()
    }

    return (
      <TextField
        name={fieldName}
        onChange={onChange}
        value={value || ''}
        type="date"
        fullWidth
        error={!!error}
        helperText={error?.message || 'Планируемая дата начала'}
        onFocus={onFocus}
      />
    )
  }, [errors, onChange, onFocus, variables])

  const endDatePlaning = useMemo(() => {
    const fieldName: Name = 'endDatePlaning'

    const error = errors.find((n) => n.key === fieldName)

    let value: typeof variables.data.endDatePlaning | string =
      variables.data.endDatePlaning

    if (value && value instanceof Date) {
      value = value.toString()
    }

    return (
      <TextField
        name={fieldName}
        onChange={onChange}
        value={value || ''}
        type="date"
        fullWidth
        error={!!error}
        helperText={error?.message || 'Планируемая дата завершения'}
        onFocus={onFocus}
      />
    )
  }, [errors, onChange, onFocus, variables])

  const startDate = useMemo(() => {
    const fieldName: Name = 'startDate'

    const error = errors.find((n) => n.key === fieldName)

    let value: typeof variables.data.startDate | string =
      variables.data.startDate

    if (value && value instanceof Date) {
      value = value.toString()
    }

    return (
      <TextField
        name={fieldName}
        onChange={onChange}
        value={value || ''}
        type="date"
        fullWidth
        error={!!error}
        helperText={error?.message || 'Дата начала'}
        onFocus={onFocus}
      />
    )
  }, [errors, onChange, onFocus, variables])

  const endDate = useMemo(() => {
    const fieldName: Name = 'endDate'

    const error = errors.find((n) => n.key === fieldName)

    let value: typeof variables.data.endDate | string = variables.data.endDate

    if (value && value instanceof Date) {
      value = value.toString()
    }

    return (
      <TextField
        name={fieldName}
        onChange={onChange}
        value={value || ''}
        type="date"
        fullWidth
        error={!!error}
        helperText={error?.message || 'Дата завершения'}
        onFocus={onFocus}
      />
    )
  }, [errors, onChange, onFocus, variables])

  const form = useMemo(() => {
    if (!opened) {
      return null
    }

    const content: Data['content'] = variables?.data.content

    return (
      <form onSubmit={createTask}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            {name}
          </Grid>
          <Grid item xs={12}>
            <Editor
              editorKey="task-editor"
              onChange={onEditorChange}
              value={content}
              readOnly={false}
            />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            {startDatePlaning}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            {endDatePlaning}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            {startDate}
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            {endDate}
          </Grid>

          <Grid item xs={12}>
            <Grid container spacing={8}>
              <Grid item xs></Grid>

              <Grid item>
                <Button
                  variant="raised"
                  disabled={createTaskProcessorResult.loading}
                  onClick={resetForm}
                >
                  Отмена
                </Button>
              </Grid>

              <Grid item>
                <Button
                  type="submit"
                  variant="raised"
                  color="primary"
                  disabled={createTaskProcessorResult.loading}
                >
                  Сохранить
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    )
  }, [
    createTask,
    createTaskProcessorResult.loading,
    endDate,
    endDatePlaning,
    name,
    onEditorChange,
    opened,
    resetForm,
    startDate,
    startDatePlaning,
    variables?.data.content,
  ])

  return useMemo(() => {
    return (
      <>
        <div>
          <Button onClick={toggleOpened} variant="raised" size="small">
            {opened ? 'Закрыть форму' : 'Добавить задачу'}
          </Button>
        </div>

        {form}

        {createMutation.snakbar}
      </>
    )
  }, [createMutation.snakbar, form, opened, toggleOpened])
}

export default CreateTaskForm
