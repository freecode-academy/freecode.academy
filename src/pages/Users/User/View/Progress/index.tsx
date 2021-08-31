import moment from 'moment'
import React, { useMemo } from 'react'
import { UserProgressProps } from './interfaces'

/**
 * Прогресс пользователя
 */
export const UserProgress: React.FC<UserProgressProps> = ({
  userTechnologies,
}) => {
  /**
   * Сортируем по дате
   */
  const userTechnologiesSorted = useMemo(() => {
    const userTechnologiesSorted = [...userTechnologies]

    userTechnologiesSorted.sort((a, b) => {
      const a_date = a.date_from || a.createdAt
      const b_date = b.date_from || b.createdAt

      return a_date > b_date ? 1 : a_date < b_date ? -1 : 0
    })

    return userTechnologiesSorted
  }, [userTechnologies])

  return useMemo(() => {
    return (
      <>
        <table
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          border="1"
          style={{
            width: 'auto',
          }}
        >
          <tbody>
            {userTechnologiesSorted.map((n) => {
              const { createdAt, date_from } = n

              const date = date_from || createdAt

              return (
                <tr key={n.id}>
                  <td>{moment(date).format('YYYY-MM-DD')}</td>
                  <td>{n.Technology?.name}</td>
                  <td>{n.status}</td>
                  <td>{n.hiring_status}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }, [userTechnologiesSorted])
}
