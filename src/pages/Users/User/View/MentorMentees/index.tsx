import React, { useMemo, useCallback } from 'react'
import { Typography } from 'material-ui'
import {
  useCreateMentorMenteeMutation,
  UserNoNestingFragment,
} from 'src/modules/gql/generated'
import UikitUserLinkWithStyles from 'src/uikit/Link/User'
import { MentorMenteesProps } from './interfaces'
import { MentorMenteesStyled } from './styles'
import Button from 'src/components/ui/Button'

export const MentorMentees: React.FC<MentorMenteesProps> = ({
  user,
  currentUser,
}) => {
  // const renderUsers = useMemo(() => {}, [])

  const renderList = useCallback(
    (title: string, users: UserNoNestingFragment[]): JSX.Element => {
      return (
        <div>
          <Typography variant="subheading">{title}</Typography>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {users.map((n) => {
              return <UikitUserLinkWithStyles key={n.id} user={n} />
            })}
          </div>
        </div>
      )
    },
    []
  )

  const mentorsList = useMemo(() => {
    const users: UserNoNestingFragment[] = []

    user.MentorMenteeMentors?.forEach((n) => {
      if (n.Mentor) {
        users.push(n.Mentor)
      }
    })

    if (!users.length) {
      return null
    }

    return renderList('Менторы:', users)
  }, [renderList, user.MentorMenteeMentors])

  /**
   * Список менти пользователя.
   * Если текущий пользователь не в списке менти, будет выведена кнопка подключения
   */
  const mentees: UserNoNestingFragment[] = useMemo(() => {
    const users: UserNoNestingFragment[] = []

    user.MentorMenteeMentees?.forEach((n) => {
      if (n.Mentee) {
        users.push(n.Mentee)
      }
    })

    return users
  }, [user.MentorMenteeMentees])

  const menteesList = useMemo(() => {
    if (!mentees.length) {
      return null
    }

    return renderList('Менти:', mentees)
  }, [renderList, mentees])

  const connectMentorMutation = useCreateMentorMenteeMutation()

  const connectMentorSubmit = useCallback(() => {
    if (
      window.confirm(
        'Отправить заявку на менторство? Заявка будет автоматически принята.'
      )
    ) {
      connectMentorMutation[0]({
        variables: {
          data: {
            mentorId: user.id,
          },
        },
      })
        .then((r) => {
          if (r.data?.createMentorMentee) {
            try {
              connectMentorMutation[1].client.resetStore()
            } catch (error) {
              console.error(error)
            }
          }
        })
        .catch(alert)
    }
  }, [connectMentorMutation, user.id])

  const connectMentor = useMemo(() => {
    if (!user.isMentor) {
      return null
    }

    if (user.id !== currentUser?.id) {
      if (
        !currentUser ||
        mentees.findIndex((n) => n.id === currentUser.id) === -1
      ) {
        return (
          <Button
            size="small"
            variant="success"
            onClick={connectMentorSubmit}
            disabled={connectMentorMutation[1].loading}
          >
            Подать заявку на менторство
          </Button>
        )
      }
    }

    return null
  }, [
    connectMentorMutation,
    connectMentorSubmit,
    currentUser,
    mentees,
    user.id,
    user.isMentor,
  ])

  return useMemo(() => {
    return (
      <MentorMenteesStyled>
        {connectMentor}

        {mentorsList}
        {menteesList}
      </MentorMenteesStyled>
    )
  }, [connectMentor, menteesList, mentorsList])
}
