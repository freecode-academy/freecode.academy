import React, { useCallback, useMemo } from 'react'

import useProcessorMutation from 'src/hooks/useProcessorMutation'
import { useCreateUserTechnologyProcessorMutation } from 'src/modules/gql/generated'
import Button from 'material-ui/Button'
import { ConnectUserTechnologyProps } from './interfaces'

/**
 * Кнопка подключения технологии к текущему пользователю
 */
const ConnectUserTechnology: React.FC<ConnectUserTechnologyProps> = ({
  technology,
  currentUser,
}) => {
  /**
   * Процессор на создание связки Пользователь-Технология
   */
  const mutationTuple = useCreateUserTechnologyProcessorMutation()

  const technologyId = technology.id

  // const {
  //   mutation,
  //   snakbar,
  // } = useProcessorMutation({
  //   processor: createUserTechnologyProcessor,
  //   loading,
  // });

  const { mutation, snakbar, loading } = useProcessorMutation(mutationTuple)

  const onClick = useCallback(() => {
    mutation({
      variables: {
        data: {
          Technology: {
            connect: {
              id: technologyId,
            },
          },
        },
      },
    })
  }, [mutation, technologyId])

  return useMemo(() => {
    /**
     * Если технология уже привязана, не выводим ничего
     */
    if (
      currentUser?.id &&
      technology.UserTechnologies?.find(
        (n) => n.CreatedBy?.id === currentUser?.id
      )
    ) {
      return null
    }

    return (
      <>
        {snakbar}

        <Button
          onClick={onClick}
          disabled={loading}
          variant="raised"
          color="primary"
          size="small"
        >
          Я использую
        </Button>
      </>
    )
  }, [loading, onClick, snakbar, technology.UserTechnologies, currentUser?.id])
}

export default ConnectUserTechnology
