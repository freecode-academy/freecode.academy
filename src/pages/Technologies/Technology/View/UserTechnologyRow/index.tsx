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

const UserTechnologyRow: React.FC<UserTechnologyRowProps> = ({
  object,
  user,
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
      ...object,
      ...data,
    }
  }, [object, data])

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
    (event: React.ChangeEvent<HTMLInputElement>) => {
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
              id: object.id,
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
    [data, mutation, object.id, resetData]
  )

  const buttons = useMemo(() => {
    const buttons: JSX.Element[] = []

    if (user?.id && user?.id === object.CreatedBy?.id) {
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
  }, [data, loading, object.CreatedBy?.id, resetData, startEdit, user?.id])

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
   * Уровень знания
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
  //         label="Уровень знания"
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
          <GridTableAttributeStyled>{buttons}</GridTableAttributeStyled>

          <GridTableAttributeStyled>
            <UikitUserLink user={object.CreatedBy} />
          </GridTableAttributeStyled>

          <GridTableAttributeStyled>{level}</GridTableAttributeStyled>

          <GridTableAttributeStyled>{status}</GridTableAttributeStyled>
          <GridTableAttributeStyled>{hiring_status}</GridTableAttributeStyled>

          <GridTableAttributesContainerStyled>
            <GridTableAttributeStyled>{dateFrom}</GridTableAttributeStyled>

            <GridTableAttributeStyled>{dateTill}</GridTableAttributeStyled>
          </GridTableAttributesContainerStyled>
        </GridTableItemStyled>
      </>
    )
  }, [
    buttons,
    dateFrom,
    dateTill,
    hiring_status,
    level,
    object.CreatedBy,
    onSubmit,
    snakbar,
    status,
  ])
}

export default UserTechnologyRow
