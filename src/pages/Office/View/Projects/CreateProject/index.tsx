/* eslint-disable no-console */
import React, { useMemo } from 'react'
import { Grid, TextField } from 'material-ui'
import useStore from 'src/hooks/useStore'
import { ProjectCreateInput } from 'src/modules/gql/generated'

const OfficePageViewProjectsCreate: React.FC = () => {
  const { store, onChange } = useStore<ProjectCreateInput>({
    name: '',
  })

  console.log('store', store)

  return useMemo(() => {
    return (
      <>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <TextField
              name="name"
              onChange={onChange}
              fullWidth
              label="Название проекта"
            />
          </Grid>
        </Grid>
      </>
    )
  }, [onChange])
}

export default OfficePageViewProjectsCreate
