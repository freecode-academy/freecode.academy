import { yupResolver } from '@hookform/resolvers/yup/dist/yup.js'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useMemo } from 'react'
import { Controller, ControllerProps, useForm } from 'react-hook-form'
import { Page } from 'src/pages/_App/interfaces'
import * as yup from 'yup'
import { SchemaOf } from 'yup'
import Button from 'src/components/ui/Button'
import TextField from 'src/components/ui/form/TextField'
import {
  LearnStrategyCreateInput,
  Scalars,
  useCreateLearnStrategyMutation,
} from 'src/modules/gql/generated'
import {
  CreateLearnStrategyFormStyled,
  CreateLearnStrategyPageStyled,
} from './styles'
import UserTechnologyLevel from 'src/pages/Technologies/Technology/View/UserTechnologyRow/UserTechnologyLevel'

type DataInput = LearnStrategyCreateInput

/**
 * Создание стратегии развития
 */
export const CreateLearnStrategyPage: Page = () => {
  const router = useRouter()

  /**
   * Описываем структуру формы в соответствии с типизацией
   */
  const schema = useMemo(() => {
    const schema: SchemaOf<DataInput> = yup
      .object({
        name: yup.string().required('Укажите название'),
        description: yup.string(),
        level: yup
          .mixed()
          .oneOf([1, 2, 3, 4, 5])
          .required('Укажите уровень от 1 до 5'),
      })
      .defined()

    return schema
  }, [])

  const { handleSubmit, control, formState, trigger, setValue } =
    useForm<DataInput>({
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
   * Мутация
   */
  const [createMutation, { loading: inRequest, client }] =
    useCreateLearnStrategyMutation()

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
    createMutation({
      variables: {
        data,
      },
    })
      .then(async (r) => {
        if (r.data?.createLearnStrategy.id) {
          try {
            await client.resetStore()
          } catch (error) {
            console.error(error)
          }

          router.push(`/learnstrategies/${r.data?.createLearnStrategy.id}`)
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  })

  const nameFieldRender: ControllerProps<DataInput, 'name'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="text"
          title="Название"
          {...field}
          value={field.value || ''}
          error={formState.errors[field.name]}
          fullWidth
        />
      )
    }, [])

  const descriptionFieldRender: ControllerProps<
    DataInput,
    'description'
  >['render'] = useCallback(({ field, formState }) => {
    return (
      <TextField
        type="text"
        title="Краткое описание"
        {...field}
        value={field.value || ''}
        error={formState.errors[field.name]}
        fullWidth
      />
    )
  }, [])

  const onLevelChange = useCallback(
    (
      _event: React.ChangeEvent<HTMLInputElement>,
      value: Scalars['UserTechnologyLevel'] | null
    ) => {
      value &&
        setValue('level', value, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        })
    },
    [setValue]
  )

  const levelFieldRender: ControllerProps<DataInput, 'level'>['render'] =
    useCallback(
      ({ field, formState }) => {
        return (
          <UserTechnologyLevel
            // type="text"
            // title="Технологический уровень"
            {...field}
            onChange={onLevelChange}
            value={field.value}
            error={
              formState.errors[field.name]
                ? {
                    name: 'level',
                    message: formState.errors[field.name]?.message || '',
                  }
                : undefined
            }
            // fullWidth
            inEditMode={true}
          />
        )
      },
      [onLevelChange]
    )

  return useMemo(() => {
    return (
      <>
        <NextSeo noindex nofollow title="Новая стратегия развития" />

        <CreateLearnStrategyPageStyled>
          <CreateLearnStrategyFormStyled onSubmit={onSubmit}>
            <h2>Новая стратегия развития</h2>

            <Controller
              name="name"
              control={control}
              render={nameFieldRender}
            />

            <Controller
              name="description"
              control={control}
              render={descriptionFieldRender}
            />

            <Controller
              name="level"
              control={control}
              render={levelFieldRender}
            />

            <div>
              <Button
                type="submit"
                disabled={inRequest || !formState.isValid}
                variant={formState.isValid ? 'success' : 'default'}
              >
                Сохранить
              </Button>
            </div>
          </CreateLearnStrategyFormStyled>
        </CreateLearnStrategyPageStyled>
      </>
    )
  }, [
    control,
    descriptionFieldRender,
    formState.isValid,
    inRequest,
    levelFieldRender,
    nameFieldRender,
    onSubmit,
  ])
}
