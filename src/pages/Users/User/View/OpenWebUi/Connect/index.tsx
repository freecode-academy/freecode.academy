import React, { useCallback } from 'react'
import * as yup from 'yup'

import {
  CreateOpenWebUiUserMutationVariables,
  MeUserFragment,
  useCreateOpenWebUiUserMutation,
} from 'src/gql/generated'
import { OpenWebUiConnectStyled } from './styles'
import { TextField } from 'src/components/Form/TextField'
import { Button } from 'src/components/Button'
import { FormControl } from 'src/components/Form/FormControl'
import { useBoolean } from 'src/hooks/useBoolean'
import {
  Controller,
  ControllerProps,
  FormProvider,
  useForm,
} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLanguage } from 'src/hooks/i18n/useLanguage'
import { useSnackbar } from 'src/components/Snackbar'

type FormData = CreateOpenWebUiUserMutationVariables['data']

function getDefaultValues(currentUser: MeUserFragment): FormData {
  return {
    password: '',
    email: currentUser.email || undefined,
  }
}

const getSchema = (hasEmail: boolean): yup.ObjectSchema<FormData> =>
  yup.object().shape({
    password: yup.string().required('Укажите пароль'),
    email: hasEmail
      ? yup.string().optional()
      : yup.string().email('Некорректный email').required('Укажите email'),
  })

type OpenWebUiConnectProps = {
  currentUser: MeUserFragment
}

export const OpenWebUiConnect: React.FC<OpenWebUiConnectProps> = ({
  currentUser,
}) => {
  const { t } = useLanguage()
  const { addMessage } = useSnackbar() || {}

  const [opened, openedOn] = useBoolean()

  const [createOpenWebUiUserMutation] = useCreateOpenWebUiUserMutation()

  const form = useForm<FormData>({
    defaultValues: getDefaultValues(currentUser),
    resolver: yupResolver(getSchema(!!currentUser.email)),
    shouldFocusError: false,
    reValidateMode: 'onChange',
    mode: 'all',
  })

  const onSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()

      form
        .trigger()
        .then(async (isValid) => {
          if (isValid === true) {
            const data = form.getValues()

            createOpenWebUiUserMutation({
              variables: {
                data,
              },
            })
              .then((r) => {
                const response = r.data?.createOpenWebUiUser

                if (response) {
                  addMessage?.('Аккаунт Open WebUI успешно создан', {
                    variant: 'success',
                  })
                } else {
                  addMessage?.(t('system.noDataReceived'), { variant: 'error' })
                }
              })
              .catch((error) => {
                const errorMessage = error.message || t('system.requestError')
                addMessage?.(errorMessage, { variant: 'error' })
              })
          } else {
            console.error('Form errors', form.formState.errors)

            const errorMessage = t('system.validationError')
            addMessage?.(errorMessage, { variant: 'warning' })
          }
        })
        .catch((error) => {
          console.error(error)
          addMessage?.(t('system.unexpectedError'), {
            variant: 'error',
          })
        })
    },
    [addMessage, createOpenWebUiUserMutation, form, t]
  )

  const fieldRenderer = useCallback<
    ControllerProps<FormData, 'password' | 'email'>['render']
  >(
    ({ field: { name, value, onChange, onBlur }, fieldState: { error } }) => {
      let label: string
      let helperText: string | undefined
      let required = false
      let disabled = false
      let type: string | undefined

      switch (name) {
        case 'password':
          label = 'Пароль'
          helperText = 'Укажите пароль'
          required = true
          type = 'password'
          break
        case 'email':
          label = 'Емейл'
          helperText = !currentUser.email ? 'Укажите емейл' : undefined
          required = !currentUser.email
          disabled = !!currentUser.email
          break
      }

      return (
        <FormControl
          label={label}
          helperText={error ? error.message : helperText}
          error={!!error}
          required={required}
        >
          <TextField
            value={value || ''}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            type={type}
          />
        </FormControl>
      )
    },
    [currentUser.email]
  )

  const content = opened ? (
    <FormProvider {...form}>
      <form
        onSubmit={onSubmit}
        style={{
          display: 'contents',
        }}
      >
        <Controller name="email" render={fieldRenderer} />
        <Controller name="password" render={fieldRenderer} />

        <Button
          type="submit"
          variant="success"
          disabled={form.formState.isSubmitting}
        >
          Создать аккаунт
        </Button>
      </form>
    </FormProvider>
  ) : (
    <>
      <Button onClick={openedOn} variant="info">
        Создать аккаунт Open WebUI
      </Button>
    </>
  )

  return <OpenWebUiConnectStyled>{content}</OpenWebUiConnectStyled>
}
