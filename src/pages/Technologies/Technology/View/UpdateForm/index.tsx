import React, { useCallback, useEffect, useMemo } from 'react'
import { NextSeo } from 'next-seo'

import { Controller, ControllerProps, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { UpdateTechnologyForm } from './styles'
import {
  TechnologyUpdateInput,
  useUpdateTechnologyMutation,
} from 'src/modules/gql/generated'
import TextField from 'src/components/ui/form/TextField'
import Button from 'src/components/ui/Button'
import { TechnologyUpdateFormProps } from './interfaces'

type DateType = TechnologyUpdateInput

/**
 * Редактирование технологии
 */
export const TechnologyUpdateForm: React.FC<TechnologyUpdateFormProps> = ({
  technology,
  editFormOpenedSetter,
}) => {
  const mutation = useUpdateTechnologyMutation()

  /**
   * Описываем структуру формы в соответствии с типизацией
   */
  const schema = useMemo(() => {
    const schema: SchemaOf<DateType> = yup
      .object({
        name: yup.string(),
        description: yup.string().nullable(),
        level1hours: yup.number().nullable(),
        level2hours: yup.number().nullable(),
        level3hours: yup.number().nullable(),
        level4hours: yup.number().nullable(),
        level5hours: yup.number().nullable(),
      })
      .defined()

    return schema
  }, [])

  const { handleSubmit, control, formState, trigger } = useForm<DateType>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
    /**
     * Устанавливаем режим ревалидации формы при изменении данных.
     * https://github.com/react-hook-form/react-hook-form/issues/2755#issuecomment-683268595
     */
    mode: 'onChange',
    defaultValues: {},
  })

  /**
   * При загрузке формы сразу вызываем валидацию формы,
   * чтобы показать обязательные поля
   */
  useEffect(() => {
    trigger()
  }, [trigger])

  /**
   * Отправка формы
   */
  const onSubmit = handleSubmit((data) => {
    if (mutation[1].loading) {
      return
    }

    /**
     * Выполняем запрос на сервер
     */
    mutation[0]({
      variables: {
        data,
        where: {
          id: technology.id,
        },
      },
    })
      .then(async (r) => {
        if (r.data?.updateTechnology) {
          try {
            await mutation[1].client.resetStore()
          } catch (error) {
            console.error(error)
          }

          editFormOpenedSetter(false)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  })

  const nameFieldRender: ControllerProps<DateType, 'name'>['render'] =
    useCallback(
      ({ field, formState }) => {
        return (
          <TextField
            {...field}
            type="text"
            title="Название"
            value={
              !formState.dirtyFields.name
                ? technology.name || ''
                : field.value || ''
            }
            error={formState.errors[field.name]}
          />
        )
      },
      [technology.name]
    )

  const descriptionFieldRender: ControllerProps<
    DateType,
    'description'
  >['render'] = useCallback(
    ({ field, formState }) => {
      return (
        <TextField
          {...field}
          type="text"
          title="Описание"
          value={
            !formState.dirtyFields.description
              ? technology.description || ''
              : field.value || ''
          }
          error={formState.errors[field.name]}
        />
      )
    },
    [technology.description]
  )

  const level1hoursFieldRender: ControllerProps<
    DateType,
    'level1hours'
  >['render'] = useCallback(
    ({ field, formState }) => {
      return (
        <TextField
          {...field}
          type="number"
          title="Уроовень 1"
          helperText="Примерно время на достижение уровня (часы)"
          value={
            !formState.dirtyFields.level1hours
              ? technology.level1hours || ''
              : field.value || ''
          }
          error={formState.errors[field.name]}
        />
      )
    },
    [technology.level1hours]
  )

  const level2hoursFieldRender: ControllerProps<
    DateType,
    'level2hours'
  >['render'] = useCallback(
    ({ field, formState }) => {
      return (
        <TextField
          {...field}
          type="number"
          title="Уроовень 2"
          helperText="Примерно время на достижение уровня (часы)"
          value={
            !formState.dirtyFields.level2hours
              ? technology.level2hours || ''
              : field.value || ''
          }
          error={formState.errors[field.name]}
        />
      )
    },
    [technology.level2hours]
  )

  const level3hoursFieldRender: ControllerProps<
    DateType,
    'level3hours'
  >['render'] = useCallback(
    ({ field, formState }) => {
      return (
        <TextField
          {...field}
          type="number"
          title="Уроовень 3"
          helperText="Примерно время на достижение уровня (часы)"
          value={
            !formState.dirtyFields.level3hours
              ? technology.level3hours || ''
              : field.value || ''
          }
          error={formState.errors[field.name]}
        />
      )
    },
    [technology.level3hours]
  )

  const level4hoursFieldRender: ControllerProps<
    DateType,
    'level4hours'
  >['render'] = useCallback(
    ({ field, formState }) => {
      return (
        <TextField
          {...field}
          type="number"
          title="Уроовень 4"
          helperText="Примерно время на достижение уровня (часы)"
          value={
            !formState.dirtyFields.level4hours
              ? technology.level4hours || ''
              : field.value || ''
          }
          error={formState.errors[field.name]}
        />
      )
    },
    [technology.level4hours]
  )

  const level5hoursFieldRender: ControllerProps<
    DateType,
    'level5hours'
  >['render'] = useCallback(
    ({ field, formState }) => {
      return (
        <TextField
          {...field}
          type="number"
          title="Уроовень 5"
          helperText="Примерно время на достижение уровня (часы)"
          value={
            !formState.dirtyFields.level5hours
              ? technology.level5hours || ''
              : field.value || ''
          }
          error={formState.errors[field.name]}
        />
      )
    },
    [technology.level5hours]
  )

  return useMemo(() => {
    return (
      <>
        <NextSeo title="Создание технологии" nofollow noindex />

        <UpdateTechnologyForm onSubmit={onSubmit}>
          <Controller name="name" control={control} render={nameFieldRender} />
          <Controller
            name="description"
            control={control}
            render={descriptionFieldRender}
          />
          <Controller
            name="level1hours"
            control={control}
            render={level1hoursFieldRender}
          />
          <Controller
            name="level2hours"
            control={control}
            render={level2hoursFieldRender}
          />
          <Controller
            name="level3hours"
            control={control}
            render={level3hoursFieldRender}
          />
          <Controller
            name="level4hours"
            control={control}
            render={level4hoursFieldRender}
          />
          <Controller
            name="level5hours"
            control={control}
            render={level5hoursFieldRender}
          />

          <Button
            type="submit"
            disabled={mutation[1].loading || !formState.isValid}
            variant={
              formState.isValid && formState.isDirty ? 'success' : 'default'
            }
          >
            Сохранить
          </Button>
        </UpdateTechnologyForm>
      </>
    )
  }, [
    control,
    descriptionFieldRender,
    formState.isDirty,
    formState.isValid,
    level1hoursFieldRender,
    level2hoursFieldRender,
    level3hoursFieldRender,
    level4hoursFieldRender,
    level5hoursFieldRender,
    mutation,
    nameFieldRender,
    onSubmit,
  ])
}
