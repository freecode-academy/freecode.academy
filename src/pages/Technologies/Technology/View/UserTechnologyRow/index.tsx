import React, { useCallback, useMemo, useState } from 'react'
import {
  GridTableAttributeStyled,
  GridTableItemStyled,
  GridTableAttributesContainerStyled,
} from 'src/components/GridTable/styles'
import UikitUserLink from 'src/uikit/Link/User'
import { UserTechnologyRowProps } from './interfaces'
import moment from 'moment'
import {
  Scalars,
  UserTechnologyUpdateInput,
  UserUpdateInput,
  useUpdateUserTechnologyProcessorMutation,
} from 'src/modules/gql/generated'
import useProcessorMutation from 'src/hooks/useProcessorMutation'
import IconButton from 'material-ui/IconButton'
import SaveIcon from 'material-ui-icons/Save'
import StartEditIcon from 'material-ui-icons/ModeEdit'
import ResetIcon from 'material-ui-icons/Restore'
import TextField from 'material-ui/TextField'
import UserTechnologyLevel from './UserTechnologyLevel'
import UserTechnologyStatusView from './UserTechnologyStatus'
import UserTechnologyHiringStatusView from './UserTechnologyStatusHiring'
import CheckBox from 'src/uikit/CheckBox'
import TechnologyLink from 'src/uikit/Link/Technology'

const UserTechnologyRow: React.FC<UserTechnologyRowProps> = ({
  userTechnology,
  currentUser,
  showActions,
  showCreateBy,
  showTechnology,
  technology,
}) => {
  const mutationTuple = useUpdateUserTechnologyProcessorMutation()

  const { loading, mutation, snakbar, errors } =
    useProcessorMutation(mutationTuple)

  const [data, setData] = useState<UserTechnologyUpdateInput | null>(null)

  type Data = typeof data
  type DataNotNullable = NonNullable<Data>
  type Name = keyof DataNotNullable

  const dataWithMutations = useMemo(() => {
    return {
      ...userTechnology,
      ...data,
    }
  }, [userTechnology, data])

  /**
   * Получаем текущее значение объекта
   */
  const getValue = useCallback(
    <P extends keyof typeof dataWithMutations>(name: P) => {
      return dataWithMutations[name]
    },
    [dataWithMutations]
  )

  const setValue = useCallback(
    <Name extends keyof DataNotNullable>(
      name: Name,
      value: DataNotNullable[Name] | undefined
    ) => {
      setData({
        ...data,
        [name]: value,
      })
    },
    [data]
  )

  const onChange = useCallback(
    (
      event: React.ChangeEvent<HTMLInputElement>,
      additionalValue?:
        | UserUpdateInput['technologyLevel']
        | UserUpdateInput['isMentor']
    ) => {
      const name = event.target.name as Name

      if (!name) {
        return
      }

      let value:
        | DataNotNullable[Name]
        | Scalars['UserTechnologyLevel']
        | string
        | number
        | undefined = event.target.value

      switch (name) {
        case 'date_from':
        case 'date_till':
          value = value && typeof value === 'string' ? new Date(value) : null

          if (value && !(value instanceof Date)) {
            return
          }

          // value = event.target.value && typeof value === 'string' ? new Date(value) : null;

          break

        case 'level':
          if (!value) {
            value = null
          } else {
            value = parseInt(value)

            if (!value || value < 1 || value > 5) {
              return
            }
          }

          setValue(name, value as Scalars['UserTechnologyLevel'])

          return

        case 'isMentor':
          if (typeof additionalValue === 'boolean') {
            setValue(name, additionalValue)
          }
          return

        // case 'CreatedBy':
        // case 'Technology':
        case 'components':
        case 'status':
        case 'hiring_status':
          return

        // default:
        //   console.error(new Error(`Unhandled field name "${name}"`))
        //   return;

        // value = event.target.value;
      }

      setValue(name, value)
    },
    [setValue]
  )

  const inEditMode = useMemo(() => !!data, [data])

  const startEdit = useCallback(() => {
    setData({})
  }, [])

  const resetData = useCallback(() => {
    setData(null)
  }, [])

  const onSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()

      data &&
        mutation({
          variables: {
            data,
            where: {
              id: userTechnology.id,
            },
          },
        }).then((result) => {
          /**
           * Если успешно, обновляем сбрасываем даныне формы
           */
          if (!(result instanceof Error) && result?.data?.response.success) {
            resetData()
          }

          return result
        })
    },
    [data, mutation, userTechnology.id, resetData]
  )

  const buttons = useMemo(() => {
    const buttons: JSX.Element[] = []

    if (currentUser?.id && currentUser?.id === userTechnology.CreatedBy?.id) {
      if (data) {
        buttons.push(
          <IconButton key="resetData" disabled={loading} onClick={resetData}>
            <ResetIcon />
          </IconButton>
        )

        if (Object.keys(data).length) {
          buttons.push(
            <IconButton
              key="save"
              disabled={loading}
              type="submit"
              color="secondary"
            >
              <SaveIcon />
            </IconButton>
          )
        }
      } else {
        buttons.push(
          <IconButton key="startEdit" disabled={loading} onClick={startEdit}>
            <StartEditIcon />
          </IconButton>
        )
      }
    }

    return buttons
  }, [
    data,
    loading,
    userTechnology.CreatedBy?.id,
    resetData,
    startEdit,
    currentUser?.id,
  ])

  /**
   * Дата С
   */
  const dateFrom = useMemo(() => {
    const fieldName: Name = 'date_from'
    let value = getValue(fieldName) || ''

    if (inEditMode) {
      const error = errors.find((n) => n.key === fieldName)

      if (value && value instanceof Date) {
        value = moment(value).format('YYYY-MM-DD')
      }

      return (
        <TextField
          name={fieldName}
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error?.message || 'Дата С'}
          type="date"
          fullWidth
        />
      )
    } else {
      return value && moment(value).format('YYYY-MM-DD')
    }
  }, [errors, getValue, inEditMode, onChange])

  /**
   * Дата До
   */
  const dateTill = useMemo(() => {
    const fieldName: Name = 'date_till'
    let value = getValue(fieldName) || ''

    if (inEditMode) {
      const error = errors.find((n) => n.key === fieldName)

      if (value && value instanceof Date) {
        value = moment(value).format('YYYY-MM-DD')
      }

      return (
        <TextField
          name={fieldName}
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error?.message || 'Дата До'}
          type="date"
          fullWidth
        />
      )
    } else {
      return value && moment(value).format('YYYY-MM-DD')
    }
  }, [errors, getValue, inEditMode, onChange])

  /**
   * Технологический уровень
   */
  const level = useMemo(() => {
    const fieldName: Name = 'level'
    const value = getValue(fieldName)

    const error = errors.find((n) => n.key === fieldName)

    return (
      <UserTechnologyLevel
        inEditMode={inEditMode}
        error={error}
        onChange={onChange}
        value={value}
        name="level"
      />
    )
  }, [errors, getValue, inEditMode, onChange])

  const status = useMemo(() => {
    const fieldName: Name = 'status'
    const value = getValue(fieldName)

    const error = errors.find((n) => n.key === fieldName)

    return (
      <UserTechnologyStatusView
        value={value}
        setValue={setValue}
        inEditMode={inEditMode}
        error={error}
      />
    )
  }, [errors, getValue, inEditMode, setValue])

  const hiring_status = useMemo(() => {
    const fieldName: Name = 'hiring_status'
    const value = getValue(fieldName)

    const error = errors.find((n) => n.key === fieldName)

    return (
      <UserTechnologyHiringStatusView
        value={value}
        setValue={setValue}
        inEditMode={inEditMode}
        error={error}
      />
    )
  }, [errors, getValue, inEditMode, setValue])

  const isMentor = useMemo(() => {
    const fieldName: Name = 'isMentor'
    const checked = getValue(fieldName) || false

    if (inEditMode) {
      return (
        <CheckBox
          name="isMentor"
          onChange={onChange}
          label={checked ? 'Да' : 'Нет'}
          checked={checked}
        />
      )
    }

    return checked ? 'Да' : null
  }, [getValue, inEditMode, onChange])

  // const level = useMemo(() => {
  //   const fieldName: Name = 'level'
  //   const value = getValue(fieldName)

  //   const title = value
  //     ? ['Начальный', 'Ниже среднего', 'Средний', 'Уверенный', 'Эксперт'][
  //         value - 1
  //       ]
  //     : null

  //   if (inEditMode) {
  //     const error = errors.find((n) => n.key === fieldName)

  //     return (
  //       <TextField
  //         name={fieldName}
  //         value={value || ''}
  //         onChange={onChange}
  //         error={!!error}
  //         label="Технологический уровень"
  //         helperText={error?.message || title || 'Укажите от 1 до 5'}
  //         type="number"
  //         fullWidth
  //       />
  //     )
  //   } else {
  //     return title
  //   }
  // }, [errors, getValue, inEditMode, onChange])

  return useMemo(() => {
    return (
      <>
        {snakbar}

        <GridTableItemStyled as="form" onSubmit={onSubmit}>
          {showActions ? (
            <GridTableAttributeStyled>{buttons}</GridTableAttributeStyled>
          ) : null}

          {showTechnology && technology ? (
            <GridTableAttributeStyled>
              <TechnologyLink object={technology} />
            </GridTableAttributeStyled>
          ) : null}

          {showCreateBy ? (
            <GridTableAttributeStyled>
              <UikitUserLink user={userTechnology.CreatedBy} />
            </GridTableAttributeStyled>
          ) : null}

          <GridTableAttributeStyled>{level}</GridTableAttributeStyled>

          <GridTableAttributeStyled>{status}</GridTableAttributeStyled>
          <GridTableAttributeStyled>{hiring_status}</GridTableAttributeStyled>
          <GridTableAttributeStyled>{isMentor}</GridTableAttributeStyled>

          <GridTableAttributesContainerStyled>
            <GridTableAttributeStyled>{dateFrom}</GridTableAttributeStyled>

            <GridTableAttributeStyled>{dateTill}</GridTableAttributeStyled>
          </GridTableAttributesContainerStyled>
        </GridTableItemStyled>
      </>
    )
  }, [
    snakbar,
    onSubmit,
    showActions,
    buttons,
    showTechnology,
    technology,
    showCreateBy,
    userTechnology.CreatedBy,
    level,
    status,
    hiring_status,
    isMentor,
    dateFrom,
    dateTill,
  ])
}

export default UserTechnologyRow
