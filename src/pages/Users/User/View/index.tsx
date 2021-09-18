import React, { useCallback, useContext, useMemo } from 'react'
import { UserViewProps } from './interfaces'
import { UserViewStyled } from './styles'
// import Link from 'next/link'
import Typography from 'material-ui/Typography'
import UserAvatar from 'src/uikit/Avatar'
import Context, { PrismaCmsContext } from '@prisma-cms/context'
import UserNotifications from './Notifications'
import Grid from 'src/uikit/Grid'
import {
  Scalars,
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
import useStore from 'src/hooks/useStore'
import UserChatSettings from './ChatSettings'
import UserChatRooms from './ChatRooms'
import UserTechnologyLevel from 'src/pages/Technologies/Technology/View/UserTechnologyRow/UserTechnologyLevel'
import { getUserTechnologyLevelText } from 'src/helpers/getUserTechnologyLevelText'
import CheckBox from 'src/uikit/CheckBox'
import { MentorMentees } from './MentorMentees'
// import { UserProgress } from './Progress'

const UserView: React.FC<UserViewProps> = ({ user }) => {
  const context = useContext(Context) as PrismaCmsContext

  const currentUser = context.user

  const isCurrentUser = user ? user.id === currentUser?.id : false
  const canEdit = isCurrentUser

  /**
   * Измененные данные пользователя
   */

  // const [data, setData] = useState<UserUpdateInput | null>(null)

  const {
    store: data,
    setValue,
    updateStore: setData,
  } = useStore<UserUpdateInput>(null)

  const inEditMode = useMemo(() => {
    return data ? true : false
  }, [data])

  const userEdited = useMemo(() => {
    return (
      data && user
        ? {
            ...user,
            ...data,
          }
        : user
    ) as UserViewProps['user']
  }, [data, user])

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const name = event.target.name as keyof UserUpdateInput
      let value: string | Scalars['UserTechnologyLevel'] = event.target.value

      if (!name) {
        return
      }

      switch (name) {
        case 'technologyLevel':
          value = parseInt(value) as Scalars['UserTechnologyLevel']
          break

        default:
      }

      setData({
        ...data,
        [name]: value,
      })
    },
    [data, setData]
  )

  /**
   * Переводим в режим редактирования
   */
  const startEdit = useCallback(() => {
    if (!data) {
      setData({})
    }
  }, [data, setData])

  /**
   * Сброс изменений
   */
  const reset = useCallback(() => {
    if (data) {
      setData(null)
    }
  }, [data, setData])

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

    return <UserNotifications NotificationTypes={user.NotificationTypes} />
  }, [inEditMode, isCurrentUser, user.NotificationTypes])

  /**
   * Настройки чатов
   */
  const chatSettings = useMemo(() => {
    if (!isCurrentUser || !inEditMode) {
      return null
    }

    return <UserChatSettings user={userEdited} setValue={setValue} />
  }, [inEditMode, isCurrentUser, setValue, userEdited])

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

  const onCheckBoxChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      const name = event.target.name as keyof UserUpdateInput | null

      name && setValue(name, checked)
    },
    [setValue]
  )

  const isMentor = useMemo(() => {
    if (!data) {
      return null
    }

    return (
      // <TextField
      //   name="password"
      //   value={userEdited?.password || ''}
      //   onChange={onChange}
      //   label="Новый пароль"
      //   type="password"
      //   fullWidth
      // />
      <CheckBox
        checked={userEdited.isMentor ? true : false}
        label="Готов быть ментором"
        name="isMentor"
        onChange={onCheckBoxChange}
      />
    )
  }, [data, onCheckBoxChange, userEdited.isMentor])

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

  const technologyLevel = useMemo(() => {
    if (!data) {
      return null
    }

    return (
      <UserTechnologyLevel
        inEditMode={inEditMode}
        error={undefined}
        value={userEdited?.technologyLevel}
        onChange={onChange}
        name="technologyLevel"
      />
    )

    // return (
    //   <TextField
    //     name="technologyLevel"
    //     value={userEdited?.technologyLevel || ''}
    //     onChange={onChange}
    //     label="Технологический уровень"
    //     fullWidth
    //   />
    // )
  }, [data, inEditMode, onChange, userEdited?.technologyLevel])

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
    [data, setData]
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
              <Grid item xs={12} md={6} lg={4}>
                {fullname}
              </Grid>
            ) : null}

            {email ? (
              <Grid item xs={12} md={6} lg={4}>
                {email}
              </Grid>
            ) : null}

            {technologyLevel ? (
              <Grid item xs={12} md={6} lg={4}>
                {technologyLevel}
              </Grid>
            ) : null}

            {isMentor ? (
              <Grid item xs={12} md={6} lg={4}>
                {isMentor}
              </Grid>
            ) : null}

            {password ? (
              <Grid item xs={12} md={6} lg={4}>
                {password}
              </Grid>
            ) : null}

            {notifications ? (
              <Grid item xs={12}>
                {notifications}
              </Grid>
            ) : null}

            {chatSettings ? (
              <Grid item xs={12}>
                {chatSettings}
              </Grid>
            ) : null}
          </Grid>
        </UserViewStyled>
      </form>
    )
  }, [
    avatar,
    buttons,
    chatSettings,
    email,
    fullname,
    isMentor,
    notifications,
    password,
    save,
    technologyLevel,
    userEdited?.fullname,
    userEdited?.username,
  ])

  const chatRooms = useMemo(() => {
    return <UserChatRooms user={user} currentUser={currentUser} />
  }, [currentUser, user])

  const technologies = useMemo(() => {
    if (!user.UserTechnologies?.length) {
      return null
    }

    return (
      <UserViewTechnologies
        canEdit={canEdit}
        userTechnologies={user.UserTechnologies}
        currentUser={currentUser}
      />
    )
  }, [user.UserTechnologies, canEdit, currentUser])

  // TODO Restore
  // const userProgress = useMemo(() => {
  //   if (!user.UserTechnologies?.length) {
  //     return null
  //   }

  //   return <UserProgress userTechnologies={user.UserTechnologies} />
  // }, [user.UserTechnologies])

  const level = useMemo(() => {
    if (!user.technologyLevel) {
      return null
    }

    return (
      <div>
        Технологический уровень:{' '}
        {getUserTechnologyLevelText(user.technologyLevel)}
      </div>
    )
  }, [user.technologyLevel])

  return useMemo(() => {
    return (
      <>
        {form}
        {chatRooms}
        {/* {userProgress} */}
        {level}
        <MentorMentees user={user} currentUser={currentUser} />
        {technologies}
      </>
    )
  }, [chatRooms, currentUser, form, level, technologies, user])
}

export default UserView
