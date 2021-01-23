import React, { useCallback, useContext, useMemo, useState } from 'react'
import { UserViewProps } from './interfaces'
import { UserViewStyled } from './styles'
// import Link from 'next/link'
import Typography from 'material-ui/Typography'
import UserAvatar from 'src/uikit/Avatar'
import Context, { PrismaCmsContext } from '@prisma-cms/context'
import UserNotifications from './Notifications'
import Grid from 'src/uikit/Grid'
import {
  UserUpdateInput,
  useUpdateUserProcessorMutation,
} from 'src/modules/gql/generated'
import IconButton from 'material-ui/IconButton'
import SaveIcon from 'material-ui-icons/Save'
import ResetIcon from 'material-ui-icons/Restore'
import EditIcon from 'material-ui-icons/ModeEdit'
import TextField from 'material-ui/TextField'
import Uploader, { UploaderProps } from '@prisma-cms/uploader'
import UserViewTechnologies from './Technologies'

const UserView: React.FC<UserViewProps> = (props) => {
  const user = props.object

  const context = useContext(Context) as PrismaCmsContext

  const currentUser = context.user

  const isCurrentUser = user ? user.id === currentUser?.id : false

  /**
   * Измененные данные пользователя
   */

  const [data, setData] = useState<UserUpdateInput | null>(null)

  const inEditMode = useMemo(() => {
    return data ? true : false
  }, [data])

  const userEdited = useMemo(() => {
    return data && user
      ? {
          ...user,
          ...data,
        }
      : user
  }, [data, user])

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target

      if (!name) {
        return
      }

      setData({
        ...data,
        [name]: value,
      })
    },
    [data]
  )

  /**
   * Переводим в режим редактирования
   */
  const startEdit = useCallback(() => {
    if (!data) {
      setData({})
    }
  }, [data])

  /**
   * Сброс изменений
   */
  const reset = useCallback(() => {
    if (data) {
      setData(null)
    }
  }, [data])

  /**
   * Функция на обновление пользователя
   */
  const [mutate, { loading: inRequest }] = useUpdateUserProcessorMutation({
    onCompleted: (data) => {
      /**
       * Если запрос выполнился успешно, сбрасываем редактирование
       */
      if (data.updateUserProcessor.success) {
        reset()
      }
    },
  })

  const save = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault()

      if (!data || !user?.id) {
        return
      }

      mutate({
        variables: {
          data,
          where: {
            id: user.id,
          },
        },
      })
    },
    [data, mutate, user?.id]
  )

  /**
   * Уведомления
   */
  const notifications = useMemo(() => {
    if (!user?.NotificationTypes || !isCurrentUser || !inEditMode) {
      return null
    }

    return (
      <UserNotifications
        NotificationTypes={user.NotificationTypes}
        userId={user.id}
      />
    )
  }, [inEditMode, isCurrentUser, user.NotificationTypes, user.id])

  const buttons = useMemo(() => {
    if (!user?.id || !isCurrentUser) {
      return null
    }

    const buttons: JSX.Element[] = []

    if (data) {
      const isDirty = Object.keys(data).length

      buttons.push(
        <IconButton
          key="ResetIcon"
          onClick={reset}
          disabled={inRequest}
          title="Отменить изменения"
        >
          <ResetIcon />
        </IconButton>
      )

      isDirty &&
        buttons.push(
          <IconButton
            key="SaveIcon"
            type="submit"
            disabled={inRequest}
            color="secondary"
            title="Сохранить пользователя"
          >
            <SaveIcon />
          </IconButton>
        )
    } else {
      buttons.push(
        <IconButton
          key="EditIcon"
          onClick={startEdit}
          title="Редактировать пользователя"
        >
          <EditIcon />
        </IconButton>
      )
    }

    return buttons
  }, [user?.id, isCurrentUser, data, reset, inRequest, startEdit])

  const password = useMemo(() => {
    if (!data) {
      return null
    }

    return (
      <TextField
        name="password"
        value={userEdited?.password || ''}
        onChange={onChange}
        label="Новый пароль"
        type="password"
        fullWidth
      />
    )
  }, [data, onChange, userEdited?.password])

  const email = useMemo(() => {
    if (!data) {
      return null
    }

    return (
      <TextField
        name="email"
        value={userEdited?.email || ''}
        onChange={onChange}
        label="Емейл"
        type="email"
        fullWidth
      />
    )
  }, [data, onChange, userEdited?.email])

  const fullname = useMemo(() => {
    if (!data) {
      return null
    }

    return (
      <TextField
        name="fullname"
        value={userEdited?.fullname || ''}
        onChange={onChange}
        label="ФИО"
        fullWidth
      />
    )
  }, [data, onChange, userEdited?.fullname])

  /**
   * Обработчик на загрузку картинки
   */
  const onUpload: UploaderProps['onUpload'] = useCallback(
    (result) => {
      const image = result.data.singleUpload?.path

      if (image) {
        setData({
          ...data,
          image,
        })
      }

      return
    },
    [data]
  )

  const avatar = useMemo(() => {
    return (
      <>
        {userEdited ? <UserAvatar size="big" user={userEdited} /> : null}

        {data ? (
          <Uploader name="image" onUpload={onUpload} multiple={false} />
        ) : null}
      </>
    )
  }, [onUpload, userEdited, data])

  const form = useMemo(() => {
    return (
      <form onSubmit={save}>
        <UserViewStyled>
          <Grid container spacing={16}>
            <Grid item xs={12}>
              <Grid container spacing={16} alignItems="center">
                <Grid item xs>
                  <Typography variant="title">
                    {userEdited?.fullname || userEdited?.username}
                  </Typography>
                </Grid>

                <Grid item>{buttons}</Grid>
              </Grid>
            </Grid>

            <Grid item xs={12}>
              {avatar}
            </Grid>

            {fullname ? (
              <Grid item xs={12} md={4}>
                {fullname}
              </Grid>
            ) : null}

            {email ? (
              <Grid item xs={12} md={4}>
                {email}
              </Grid>
            ) : null}

            {password ? (
              <Grid item xs={12} md={4}>
                {password}
              </Grid>
            ) : null}

            {notifications ? (
              <Grid item xs={12}>
                {notifications}
              </Grid>
            ) : null}
          </Grid>
        </UserViewStyled>
      </form>
    )
  }, [
    avatar,
    buttons,
    email,
    fullname,
    notifications,
    password,
    save,
    userEdited?.fullname,
    userEdited?.username,
  ])

  const technologies = useMemo(() => {
    if (!user.UserTechnologies?.length) {
      return null
    }

    return <UserViewTechnologies objects={user.UserTechnologies} />
  }, [user.UserTechnologies])

  return useMemo(() => {
    return (
      <>
        {form}
        {technologies}
      </>
    )
  }, [form, technologies])
}

export default UserView
