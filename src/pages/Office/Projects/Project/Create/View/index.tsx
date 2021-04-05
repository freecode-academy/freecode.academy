import React, { useCallback, useMemo } from 'react'
import { Button, Grid, TextField } from 'material-ui'
import useStore from 'src/hooks/useStore'
import {
  ProjectCreateInput,
  useCreateProjectProcessorMutation,
} from 'src/modules/gql/generated'
import { OfficeProjectsCreateProps } from './interfaces'
import useProcessorMutation from 'src/hooks/useProcessorMutation'
import { useRouter } from 'next/router'

const OfficeProjectsCreate: React.FC<OfficeProjectsCreateProps> = ({
  cancel,
}) => {
  const router = useRouter()

  const { store, onChange } = useStore<ProjectCreateInput>({
    name: '',
  })

  const mutationTuple = useCreateProjectProcessorMutation({})

  const { snakbar, loading, errors, onFocus, mutation } = useProcessorMutation(
    mutationTuple
  )

  const save = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()

      if (loading || !store) {
        return
      }

      mutation({
        variables: {
          data: store,
        },
      }).then((r) => {
        if (
          !(r instanceof Error) &&
          r.data?.response.success &&
          r.data.response.data?.id
        ) {
          router.push(`/office/projects/${r.data.response.data?.id}`)
        }
      })
    },
    [loading, mutation, store, router]
  )

  const nameField = useMemo(() => {
    const name = 'name'

    const error = errors.find((n) => n.key === name)

    return (
      <TextField
        name="name"
        onChange={onChange}
        fullWidth
        label="Название проекта"
        error={!!error}
        helperText={error ? error.message : ''}
        onFocus={onFocus}
      />
    )
  }, [errors, onChange, onFocus])

  const urlField = useMemo(() => {
    const name = 'url'

    const error = errors.find((n) => n.key === name)

    return (
      <TextField
        name={name}
        onChange={onChange}
        fullWidth
        label="УРЛ проекта"
        error={!!error}
        helperText={error ? error.message : 'Можно ссылку на гитхаб'}
        onFocus={onFocus}
      />
    )
  }, [errors, onChange, onFocus])

  return useMemo(() => {
    return (
      <>
        {snakbar}
        <form onSubmit={save}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
              {nameField}
            </Grid>
            <Grid item xs={12}>
              {urlField}
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={8}>
                <Grid item xs></Grid>
                <Grid item>
                  <Button variant="raised" onClick={cancel}>
                    Отмена
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    color="primary"
                    variant="raised"
                    disabled={loading}
                    type="submit"
                  >
                    Сохранить
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </>
    )
  }, [snakbar, nameField, urlField, cancel, loading, save])
}

export default OfficeProjectsCreate
