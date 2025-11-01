import React, { useCallback } from 'react'
import dynamic from 'next/dynamic'

import * as yup from 'yup'

import { TopicEditFormStyled, TopicEditFormToolbarStyled } from './styles'
import {
  ResourceFragment,
  TopicCreateInput,
  TopicsConnectionTopicFragment,
  useCreateTopicProcessorMutation,
} from 'src/gql/generated'
import {
  Controller,
  ControllerProps,
  FormProvider,
  useForm,
} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useLanguage } from 'src/hooks/i18n/useLanguage'
import { useSnackbar } from 'src/components/Snackbar'
import { Button } from 'src/components/Button'
import { TextField } from 'src/components/Form/TextField'
import { FormControl } from 'src/components/Form/FormControl'
import { useRouter } from 'next/router'

const MarkdownEditor = dynamic(
  () => import('src/components/Markdown/Editor').then((r) => r.MarkdownEditor),
  {
    ssr: false,
  }
)

type FormData = Omit<
  TopicCreateInput,
  'CodeChallenge' | 'blogID' | 'components' | 'id' | 'uri'
>

function getDefaultValues(topic: TopicEditFormProps['topic']): FormData {
  return {
    name: topic?.name ?? '',
    contentV2: (topic && 'contentV2' in topic && topic.contentV2) || '',
  }
}

export const schema: yup.ObjectSchema<FormData> = yup.object().shape({
  name: yup.string().required(),
  contentV2: yup.string().required(),
})

type TopicEditFormProps = {
  topic: ResourceFragment | TopicsConnectionTopicFragment | undefined

  cancelHandler: (() => void) | undefined
}

export const TopicEditForm: React.FC<TopicEditFormProps> = ({
  topic,
  cancelHandler,
}) => {
  const { t } = useLanguage()

  const { addMessage } = useSnackbar() || {}

  const router = useRouter()

  const [createTopicMutation] = useCreateTopicProcessorMutation()

  const form = useForm<FormData>({
    defaultValues: getDefaultValues(topic),
    resolver: yupResolver(schema),
    shouldFocusError: false,
    reValidateMode: 'onChange',
    mode: 'all',
  })

  const onSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()

      form
        .trigger()
        .then(async (reason) => {
          if (reason === true) {
            const { ...other } = form.getValues()

            const request = createTopicMutation({
              variables: {
                // lang: language,
                data: {
                  ...other,
                },
              },
            })

            request
              .then((r) => {
                const response = r.data?.response

                if (response?.data) {
                  addMessage?.(t('system.dataSaved'), {
                    variant: 'success',
                  })

                  router.push(response.data.uri)
                } else {
                  const errorMessage =
                    response?.message || t('system.noDataReceived')
                  addMessage?.(errorMessage, { variant: 'error' })
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
    [addMessage, createTopicMutation, form, router, t]
  )

  const fieldRenderer = useCallback<
    ControllerProps<FormData, 'name' | 'contentV2'>['render']
  >(({ field: { name, value, onChange, onBlur }, fieldState: { error } }) => {
    let label: string
    const helperText = undefined
    let EditorComponent: typeof TextField | typeof MarkdownEditor = TextField

    switch (name) {
      case 'name':
        label = 'Name'
        break
      case 'contentV2':
        label = 'Content'
        EditorComponent = MarkdownEditor
        break
    }

    return (
      <FormControl
        label={label}
        helperText={error ? error.message : helperText}
        error={!!error}
      >
        <EditorComponent
          value={value || ''}
          onChange={onChange}
          onBlur={onBlur}
        />
      </FormControl>
    )
  }, [])

  return (
    <FormProvider {...form}>
      <TopicEditFormStyled onSubmit={onSubmit}>
        {/* <MarkdownEditor value={value} onChange={onChange} /> */}

        <Controller name="name" render={fieldRenderer} />
        <Controller name="contentV2" render={fieldRenderer} />

        <TopicEditFormToolbarStyled>
          {cancelHandler && (
            <Button variant="warning" type="button" onClick={cancelHandler}>
              Cancel
            </Button>
          )}

          <Button variant="success" type="submit">
            Save
          </Button>
        </TopicEditFormToolbarStyled>
      </TopicEditFormStyled>
    </FormProvider>
  )
}
