import React, { useCallback, useContext, useMemo } from 'react'

import { Controller, ControllerProps, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { SchemaOf } from 'yup'
import {
  SigninMutationVariables,
  useSigninMutation,
} from 'src/modules/gql/generated'
import TextField from 'src/components/ui/form/TextField'
import Button from 'src/components/ui/Button'
// import { FormStyled } from "src/components/ui/form/styles";

import { SigninFormStyled } from './styles'
import { Context } from 'src/pages/_App/Context'
import Link from 'next/link'

type FormData = Pick<SigninMutationVariables['where'], 'username'> &
  SigninMutationVariables['data']

/**
 * Форма регистрации
 */
const SigninForm: React.FC = () => {
  const context = useContext(Context)

  /**
   * Описываем структуру формы в соответствии с типизацией
   */
  const schema = useMemo(() => {
    const schema: SchemaOf<FormData> = yup
      .object({
        username: yup.string().required(),
        password: yup.string().required(),
      })
      .defined()

    return schema
  }, [])

  const { handleSubmit, control } = useForm<FormData>({
    resolver: yupResolver(schema),
    shouldFocusError: true,
  })

  /**
   * Хук регистрации
   */

  const [signinMutation, { loading: signinLoading }] = useSigninMutation()

  /**
   * Отправка формы
   */
  const onSubmit = handleSubmit((data) => {
    if (signinLoading) {
      return
    }

    /**
     * Выполняем запрос на сервер
     */
    signinMutation({
      variables: {
        where: {
          username: data.username,
        },
        data: {
          password: data.password,
        },
      },
    })
      .then((r) => {
        if (r.data?.response.data) {
          context?.onAuthSuccess(r.data.response)
        } else {
          alert(r.data?.response.message || 'Ошибка авторизации')
        }
      })
      .catch((error) => {
        alert(error.message)
      })
  })

  /**
   * Рендерер поля
   */
  const usernameFieldRender: ControllerProps<FormData, 'username'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="text"
          title="Логин"
          error={formState.errors[field.name]}
          {...field}
          value={field.value || ''}
          fullWidth
        />
      )
    }, [])

  const passwordFieldRender: ControllerProps<FormData, 'password'>['render'] =
    useCallback(({ field, formState }) => {
      return (
        <TextField
          type="password"
          title="Пароль"
          {...field}
          value={field.value || ''}
          error={formState.errors[field.name]}
          fullWidth
        />
      )
    }, [])

  return useMemo(() => {
    return (
      <>
        <SigninFormStyled role="signin" onSubmit={onSubmit} layout="column">
          <h2>Авторизоваться</h2>

          <Controller
            name="username"
            control={control}
            defaultValue={''}
            render={usernameFieldRender}
          />

          <Controller
            name="password"
            control={control}
            defaultValue={''}
            render={passwordFieldRender}
          />

          <div
            style={{
              display: 'flex',
            }}
          >
            <Link href="/signup">
              <Button size="small" type="button" variant="default">
                Зарегистрироваться
              </Button>
            </Link>
            <Button
              size="small"
              type="submit"
              disabled={signinLoading}
              variant="success"
            >
              Авторизоваться
            </Button>
          </div>
        </SigninFormStyled>
      </>
    )
  }, [
    control,
    onSubmit,
    passwordFieldRender,
    signinLoading,
    usernameFieldRender,
  ])
}

export default SigninForm
