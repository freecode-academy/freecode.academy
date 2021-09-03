import React, { useCallback, useEffect, useMemo } from 'react'
import { NextSeo } from 'next-seo'

import { Controller, ControllerProps, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { Page } from 'src/pages/_App/interfaces'
import { CreateTechnologyForm } from './styles'
import {
  TechnologyCreateInput,
  useCreateTechnologyMutation,
} from 'src/modules/gql/generated'
import TextField from 'src/components/ui/form/TextField'
import { useRouter } from 'next/router'
import Button from 'src/components/ui/Button'

type DateType = TechnologyCreateInput

/**
 * Создание технологии
 */
export const CreateTechnologyPage: Page = () => {
  const router = useRouter()

  const mutation = useCreateTechnologyMutation()

  /**
   * Описываем структуру формы в соответствии с типизацией
   */
  const schema = useMemo(() => {
    const schema: SchemaOf<DateType> = yup
      .object({
        name: yup.string().required('Не заполнено название'),
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
      },
    })
      .then(async (r) => {
        if (r.data?.createTechnology) {
          try {
            await mutation[1].client.resetStore()
          } catch (error) {
            console.error(error)
          }

          router.push(`/technologies/${r.data.createTechnology.id}`)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  })

  const nameFieldRender: ControllerProps<DateType, 'name'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          {...field}
          type="text"
          title="Название"
          value={field.value || ''}
          error={formState.errors[field.name]}
        />
      )
    }, [])

  return useMemo(() => {
    return (
      <>
        <NextSeo title="Создание технологии" nofollow noindex />

        <CreateTechnologyForm onSubmit={onSubmit}>
          <h2>Новая технология</h2>

          <Controller name="name" control={control} render={nameFieldRender} />

          <Button
            type="submit"
            disabled={mutation[1].loading || !formState.isValid}
            variant={formState.isValid ? 'success' : 'default'}
          >
            Сохранить
          </Button>
        </CreateTechnologyForm>
      </>
    )
  }, [control, formState.isValid, mutation, nameFieldRender, onSubmit])
}
