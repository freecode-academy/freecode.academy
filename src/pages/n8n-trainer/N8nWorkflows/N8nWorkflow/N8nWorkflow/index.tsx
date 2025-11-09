import React, { useCallback, useEffect, useRef, useState } from 'react'
import { N8nWorkflowRunContainerFormStyled, N8nWorkflowStyled } from './styles'
import {
  MeDocument,
  N8nTrainerContainerFragment,
  N8nTrainerContainersDocument,
  N8nWorkflowFragment,
  useN8nTrainerContainerCreateAuthMutation,
  useN8nTrainerCreateContainerMutation,
} from 'src/gql/generated'
import { Markdown } from 'src/components/Markdown'
import { Button } from 'src/components/Button'
import { useSnackbar } from 'src/components/Snackbar'
import { useCurrentUser } from 'src/hooks/useCurrentUser'
import { useBoolean } from 'src/hooks/useBoolean'
import { TextField } from 'src/components/Form/TextField'
import { FormControl } from 'src/components/Form/FormControl'

type N8nWorkflowProps = {
  n8nWorkflow: N8nWorkflowFragment
  n8nTrainerContainer: N8nTrainerContainerFragment | null | undefined
}

export const N8nWorkflow: React.FC<N8nWorkflowProps> = ({
  n8nWorkflow,
  n8nTrainerContainer,
}) => {
  const { key, content } = n8nWorkflow

  const { addMessage } = useSnackbar() || {}

  const { user: currentUser } = useCurrentUser()

  const [email, emailSetter] = useState(currentUser?.email || '')

  const emailRef = useRef(email)
  emailRef.current = email

  useEffect(() => {
    currentUser?.email && emailSetter(currentUser.email)
  }, [currentUser?.email])

  const [emailFieldOpened, emailFieldOpenedOpen, emailFieldOpenedClose] =
    useBoolean()

  const onChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      emailSetter(event.currentTarget.value)
    },
    []
  )

  const [
    n8nTrainerCreateContainerMutation,
    { loading: n8nTrainerCreateContainerMutationLoadinf },
  ] = useN8nTrainerCreateContainerMutation({
    refetchQueries: [N8nTrainerContainersDocument],
  })

  const [
    n8nTrainerContainerCreateAuthMutation,
    { loading: n8nTrainerContainerCreateAuthMutationLoading },
  ] = useN8nTrainerContainerCreateAuthMutation({
    // TODO В объект ответа надо добавить объект пользователя, чтобы не приходилось перезапрашивать
    refetchQueries: [MeDocument],
  })

  const inRequest =
    n8nTrainerCreateContainerMutationLoadinf ||
    n8nTrainerContainerCreateAuthMutationLoading

  const onSubmit = useCallback<React.FormEventHandler>(
    async (event) => {
      event.preventDefault()

      const email = emailRef.current

      if (!email && !emailFieldOpened && currentUser) {
        emailFieldOpenedOpen()
        return
      }

      try {
        let container = n8nTrainerContainer

        if (!container) {
          container = await n8nTrainerCreateContainerMutation({
            variables: {
              lesson: key,
            },
          }).then((r) => {
            return r.data?.n8nTrainerCreateContainer
          })
        }

        if (!container) {
          throw new Error('Не был создан контейнер')
        }

        await n8nTrainerContainerCreateAuthMutation({
          variables: {
            data: {
              lesson: key,
              email,
            },
          },
        }).then((r) => {
          const browserId = r.data?.n8nTrainerContainerCreateAuth?.browserId

          if (!browserId) {
            throw new Error('Не удалось выполнить авторизацию')
          }

          const { host, protocol } = window.location

          const url = `${protocol}//${container.name}.n8n-training.${host}/n8n/sso-auth?browserId=${browserId}`

          window.location.href = url

          emailFieldOpenedClose()
        })
      } catch (error) {
        addMessage?.((error as Error)?.message || 'Ошибка выполнения запроса', {
          variant: 'error',
        })
      }
    },
    [
      addMessage,
      emailFieldOpened,
      emailFieldOpenedClose,
      emailFieldOpenedOpen,
      key,
      n8nTrainerContainer,
      n8nTrainerContainerCreateAuthMutation,
      n8nTrainerCreateContainerMutation,
      currentUser,
    ]
  )

  return (
    <N8nWorkflowStyled>
      <Markdown>{content}</Markdown>

      <N8nWorkflowRunContainerFormStyled onSubmit={onSubmit}>
        {emailFieldOpened && (
          <div>
            <FormControl
              error={!email}
              label="Емейл"
              helperText="В вашем профиле не указан емейл. Емейл будет назначен текущему пользователю. Другим пользователям он не будет виден"
            >
              <TextField
                type="email"
                value={email || ''}
                disabled={inRequest}
                onChange={onChange}
              />
            </FormControl>
          </div>
        )}

        <div>
          <Button variant="success" type="submit" disabled={inRequest}>
            {n8nTrainerContainer ? 'Перейти в редактор' : 'Попробовать'}
          </Button>
        </div>
      </N8nWorkflowRunContainerFormStyled>
    </N8nWorkflowStyled>
  )
}
