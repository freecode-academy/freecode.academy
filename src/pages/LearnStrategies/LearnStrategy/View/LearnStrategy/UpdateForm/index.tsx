import React, { useCallback, useMemo } from 'react'

import { Controller, ControllerProps, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { SchemaOf } from 'yup'

import TextField from 'src/components/ui/form/TextField'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  LearnStrategyUpdateInput,
  useUpdateLearnStrategyMutation,
} from 'src/modules/gql/generated'

import { LearnStrategyUpdateFormProps } from './interfaces'
import Button from 'src/components/ui/Button'

type DataInput = LearnStrategyUpdateInput

/**
 * Форма редактирования стратегии развития
 */
export const LearnStrategyUpdateForm: React.FC<
  LearnStrategyUpdateFormProps
> = ({ learnStrategy, inEditModeSetter }) => {
  /**
   * Описываем структуру формы в соответствии с типизацией
   */
  const schema = useMemo(() => {
    const schema: SchemaOf<DataInput> = yup
      .object({
        name: yup.string(),
        description: yup.string().nullable(),
        level: yup.mixed().oneOf([1, 2, 3, 4, 5]),
      })
      .defined()

    return schema
  }, [])

  const { handleSubmit, control } = useForm<DataInput>({
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
   * Мутация
   */
  const [updateMutation, { loading: inRequest }] =
    useUpdateLearnStrategyMutation()

  /**
   * Отправка формы
   */
  const onSubmit = handleSubmit((data) => {
    if (inRequest) {
      return
    }

    /**
     * Выполняем запрос на сервер
     */
    updateMutation({
      variables: {
        data,
        where: {
          id: learnStrategy.id,
        },
      },
    })
      .then(() => {
        inEditModeSetter(false)
      })
      .catch((error) => {
        alert(error.message)
      })
  })

  const nameFieldRender: ControllerProps<DataInput, 'name'>['render'] =
    useCallback(
      ({ field, formState, fieldState: { isDirty } }) => {
        return (
          <TextField
            type="text"
            title="Название"
            {...field}
            value={!isDirty ? learnStrategy.name : field.value || ''}
            error={formState.errors[field.name]}
            fullWidth
          />
        )
      },
      [learnStrategy.name]
    )

  const descriptionFieldRender: ControllerProps<
    DataInput,
    'description'
  >['render'] = useCallback(
    ({ field, formState, fieldState: { isDirty } }) => {
      return (
        <TextField
          type="text"
          title="Краткое описание"
          {...field}
          value={!isDirty ? learnStrategy.description || '' : field.value || ''}
          error={formState.errors[field.name]}
          fullWidth
        />
      )
    },
    [learnStrategy.description]
  )

  return useMemo(() => {
    return (
      <form onSubmit={onSubmit}>
        <Controller name="name" control={control} render={nameFieldRender} />

        <Controller
          name="description"
          control={control}
          render={descriptionFieldRender}
        />

        <Button size="small" type="submit">
          Сохранить
        </Button>
      </form>
    )
  }, [control, descriptionFieldRender, nameFieldRender, onSubmit])
}
