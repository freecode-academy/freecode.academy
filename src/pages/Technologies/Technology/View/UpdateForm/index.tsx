import React, { useCallback, useEffect, useMemo, useState } from 'react'
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
import SiteFrontEditor from 'src/components/SiteFrontEditor'
import {
  EditorComponentObject,
  EditorComponentProps,
} from '@prisma-cms/front-editor'

type DateType = Omit<TechnologyUpdateInput, 'components'>

/**
 * Редактирование технологии
 */
export const TechnologyUpdateForm: React.FC<TechnologyUpdateFormProps> = ({
  technology,
  editFormOpenedSetter,
}) => {
  const mutation = useUpdateTechnologyMutation()

  const technologyEditedDataState = useState<Pick<
    TechnologyUpdateInput,
    'components'
  > | null>(null)

  /**
   * Описываем структуру формы в соответствии с типизацией
   */
  const schema = useMemo(() => {
    const schema: SchemaOf<DateType> = yup
      .object({
        name: yup.string(),
        site_url: yup.string(),
        // TODO Сейчас не понятно как валидировать рекурсивные объекты.
        // Вроде как предлагается создавать рекурсивные фнукции, но TS на них ругается
        // components: yup.object().shape({}).nullable(),
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
        data: {
          ...data,
          ...technologyEditedDataState[0],
        },
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
          technologyEditedDataState[1](null)
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

  const site_urlFieldRender: ControllerProps<DateType, 'site_url'>['render'] =
    useCallback(
      ({ field, formState }) => {
        return (
          <TextField
            {...field}
            type="text"
            title="Описание"
            value={
              !formState.dirtyFields.site_url
                ? technology.site_url || ''
                : field.value || ''
            }
            error={formState.errors[field.name]}
          />
        )
      },
      [technology.site_url]
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
          title="Уровень 1"
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
          title="Уровень 2"
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
          title="Уровень 3"
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
          title="Уровень 4"
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
          title="Уровень 5"
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

  const object = useMemo<EditorComponentObject>(() => {
    return (
      technologyEditedDataState[0]?.components ||
      technology.components || {
        name: 'RichText',
        component: 'RichText',
        components: [],
        props: {},
      }
    )
  }, [technology.components, technologyEditedDataState])

  const onChangeState: EditorComponentProps['onChangeState'] = useCallback(
    (data) => {
      technologyEditedDataState[1]({
        ...technologyEditedDataState[0],
        components: {
          name: 'RichText',
          component: 'RichText',
          components: [],
          ...data,
        },
      })

      return data
    },
    [technologyEditedDataState]
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
            name="site_url"
            control={control}
            render={site_urlFieldRender}
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

          <SiteFrontEditor
            inEditMode={true}
            itemsOnly
            onChangeState={onChangeState}
            object={object}
            className="componentsEditor"
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
    object,
    onChangeState,
    onSubmit,
    site_urlFieldRender,
  ])
}
