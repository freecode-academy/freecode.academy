import { PrismaCmsComponentError } from '@prisma-cms/component'
import Snackbar from '@prisma-cms/component/dist/components/Snackbar'
import PrismaContext, { PrismaCmsContext } from '@prisma-cms/context'
import { useCallback, useContext, useMemo, useState } from 'react'
// import { CreateTimerProcessorMutationOptions } from "src/modules/gql/generated";
import { Error as ResponseError } from 'src/modules/gql/generated'
import { useProcessorMutationProps } from './interfaces'

/**
 * Хук на обновление с обработчиком ошибок.
 * Работает только с процессорами.
 */
// function useProcessorMutation<MutationOptions = any>(
function useProcessorMutation<
  P extends useProcessorMutationProps = useProcessorMutationProps
>(options: P) {
  type MutationOptions = Parameters<P['processor']>[0]

  // const [errors] = useState<Error[]>([]);

  // console.log('options', options);

  const { processor, errorDelay = 3000, loading } = options

  const context = useContext(PrismaContext) as PrismaCmsContext
  const apiClientResetStore = context.apiClientResetStore

  // const client = context.client;

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
   * Индикатор выполнения
   */
  // const [inRequest, setInRequest] = useState(false);

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
      // if (typeof error === 'string') {
      //   _error = new Error(error)
      // } else {
      //   _error = error
      // }

      Object.assign(error, {
        _id: new Date().getTime(),
      })

      const newErrors = (store.errors || []).slice(0)

      newErrors.push(error)

      if (errorDelay) {
        setTimeout(() => closeError(error), errorDelay)
      }

      // console.log('addError error', error);
      // console.log('addError newErrors', newErrors);

      setErrors(newErrors)

      return error
    },
    [closeError, errorDelay, store.errors]
  )

  // const addError = useCallback(
  //   (error: PrismaCmsComponentError) => {
  //     // if (typeof error === 'string') {
  //     //   _error = new Error(error)
  //     // } else {
  //     //   _error = error
  //     // }

  //     Object.assign(error, {
  //       _id: new Date().getTime(),
  //     })

  //     const newErrors = (errors || []).slice(0)

  //     newErrors.push(error)

  //     if (errorDelay) {
  //       setTimeout(() => closeError(error), errorDelay)
  //     }

  //     // console.log('addError error', error);
  //     // console.log('addError newErrors', newErrors);

  //     setErrors(newErrors)

  //     return error
  //   },
  //   [closeError, errorDelay, errors]
  // )

  const mutation = useCallback(
    async (options?: MutationOptions) => {
      if (loading) {
        return
      }

      const result = await processor(options)
        // .then((r: FetchResult<{
        //   [key: string]: any;
        // }, Record<string, any>, Record<string, any>>) => {

        //   return r;
        // })
        .catch((error: PrismaCmsComponentError) => {
          error.message =
            (error.message && error.message.replace(/^GraphQL error: */, '')) ||
            ''

          return error
        })

      let error: PrismaCmsComponentError | null = null

      const errors: PrismaCmsComponentError[] = []

      if (result instanceof Error) {
        // error = result.message;
        error = result
        // throw(result);
      } else {
        const response: Record<string, any> & {
          errors: ResponseError[]
        } = result.data?.response || {}

        const {
          success,
          message,
          errors: responseErrors,
          // ...other
        } = response || {}

        responseErrors.map(({ message, ...other }) => {
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

      // this.setState({
      //   errors,
      // })

      setErrors(errors || [])

      if (error) {
        addError(error)
      } else {
        setError(null)
        apiClientResetStore()
      }

      // setInRequest(false);

      return result
    },
    [addError, apiClientResetStore, loading, processor]
  )

  // const close = useCallback(() => {
  //   setError(null);
  // }, []);

  // const snakbar = <Snackbar
  //   error={error || undefined}
  //   message={error?.message || undefined}
  //   opened={error?.open || false}
  //   close={close}
  // />

  const snakbar = useMemo(() => {
    // const { notifications } = this.state

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
