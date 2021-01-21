import { MutationTuple, OperationVariables } from '@apollo/client'
import { PrismaCmsComponentError } from '@prisma-cms/component'
import Snackbar from '@prisma-cms/component/dist/components/Snackbar'
import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'
import { useCallback, useContext, useMemo, useState } from 'react'
import { Error as ResponseError } from 'src/modules/gql/generated'

/**
 * Хук на обновление с обработчиком ошибок.
 * Работает только с процессорами.
 */
function useProcessorMutation<
  TData extends Record<string, any> = Record<string, any>,
  TVariables extends OperationVariables = OperationVariables
>(mutationTuple: MutationTuple<TData, TVariables>) {
  const errorDelay = 3000

  const processor = mutationTuple[0]

  const { loading } = mutationTuple[1]

  const context = useContext(PrismaContext) as PrismaCmsContext
  const apiClientResetStore = context.apiClientResetStore

  /**
   * В этом хуке используются setTimeout с замыканиями, в которых
   * при срабатывании операции выполняются с теми значениями,
   * которые были зафиксированы в момент инициализации setTimeout
   * и которые могут и в большинстве случаев будут отличаться от реального стейта.
   * По этой причине нам надо создать мемоизированный объект хранилища,
   * в который будем записывать актуальные значения состояния.
   */
  const store = useMemo<{
    error: PrismaCmsComponentError | null
    errors: PrismaCmsComponentError[]
  }>(
    () => ({
      error: null,
      errors: [],
    }),
    []
  )

  const [error, setError] = useState(store.error)
  const [errors, setErrors] = useState(store.errors)

  Object.assign(store, {
    error,
    errors,
  })

  /**
   * Удаляем ошибку из общего массива ошибок
   */
  const removeError = useCallback(
    (error: PrismaCmsComponentError) => {
      if (store.errors.length) {
        const newErrors = store.errors.slice(0)

        const index = newErrors.indexOf(error)

        if (index !== -1) {
          newErrors.splice(index, 1)

          setErrors(newErrors)
        }
      }
    },
    [store.errors]
  )

  /**
   * Закрываем ошибку, то есть устанавливаем ей значение open = false
   */
  const closeError = useCallback(
    (error: PrismaCmsComponentError) => {
      Object.assign(error, {
        open: false,
      })

      setTimeout(() => {
        removeError(error)
      }, 2000)

      /**
       * ForceUpdate
       */
      setErrors(store.errors.slice(0))
    },
    [removeError, store.errors]
  )

  /**
   * Добавляем ошибку в массив ошибок.
   * Важно делать именно через этот метод, чтобы устанавливались все необходимые
   * тайминги на закрытие и удаление.
   */
  const addError = useCallback(
    (error: PrismaCmsComponentError) => {
      Object.assign(error, {
        _id: new Date().getTime(),
      })

      const newErrors = (store.errors || []).slice(0)

      newErrors.push(error)

      if (errorDelay) {
        setTimeout(() => closeError(error), errorDelay)
      }

      setErrors(newErrors)

      return error
    },
    [closeError, errorDelay, store.errors]
  )

  const mutation = useCallback(
    async (options) => {
      if (loading) {
        return
      }

      const result = await processor(options).catch(
        (error: PrismaCmsComponentError) => {
          error.message =
            (error.message && error.message.replace(/^GraphQL error: */, '')) ||
            ''

          return error
        }
      )

      let error: PrismaCmsComponentError | null = null

      const errors: PrismaCmsComponentError[] = []

      if (result instanceof Error) {
        error = result
      } else {
        const response = result.data?.response

        const {
          success,
          message,
          // ...other
        } = response || {}

        const responseErrors: ResponseError[] = response?.errors || []

        responseErrors?.map(({ message, ...other }) => {
          const error: PrismaCmsComponentError = new Error(
            message || 'Unhandled error'
          )
          Object.assign(error, other)
          errors.push(error)
        })

        if (typeof success === 'boolean') {
          if (!success) {
            error = new Error(message || 'Request error')
          }
        }
      }

      setErrors(errors || [])

      if (error) {
        addError(error)
      } else {
        setError(null)
        apiClientResetStore()
      }

      return result
    },
    [addError, apiClientResetStore, loading, processor]
  )

  const snakbar = useMemo(() => {
    return errors.map((error, index) => {
      const { _id, message, open = true } = error

      if (!message || !_id) {
        return null
      }

      return (
        <Snackbar
          key={_id || index}
          opened={open}
          error={error}
          message={message}
          close={closeError}
        />
      )
    })
  }, [closeError, errors])

  return {
    mutation,
    errors,
    error,
    snakbar,
    removeError,
    loading,
  }
}

export default useProcessorMutation
