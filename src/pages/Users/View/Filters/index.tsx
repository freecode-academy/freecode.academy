import TextField from '@prisma-cms/ui/dist/form/TextField'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import Button from 'src/components/ui/Button'
import { useUsersFilters } from './hooks/useUsersFilters'
import { UsersFiltersStyled } from './styles'

export const UsersFilters: React.FC = () => {
  // const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {

  //   const value = event.currentTarget.value
  // }, [])

  const { onChange, clear } = useUsersFilters()

  const [searchValue, searchValueSetter] = useState('')

  const onChangeSearch = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value

      searchValueSetter(value)
      onChange(event)
    },
    [onChange]
  )

  useEffect(() => {
    if (global.location) {
      const params = new URLSearchParams(global.location?.search)
      const value = params.get('search')

      searchValueSetter(value || '')
    }
  }, [])

  const onClickClear = useCallback(() => {
    searchValueSetter('')
    clear()
  }, [clear])

  return (
    <UsersFiltersStyled>
      <TextField
        title="Поиск"
        onChange={onChangeSearch}
        name="search"
        value={searchValue}
      />
      <Button onClick={onClickClear}>Очистить</Button>
    </UsersFiltersStyled>
  )
}
