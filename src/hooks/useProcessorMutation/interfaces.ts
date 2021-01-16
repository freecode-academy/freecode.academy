import { FetchResult, MutationFunctionOptions } from '@apollo/client'

export type useProcessorMutationProps = {
  // processor<TData = {test: string}, TVariables = OperationVariables>: (options?: MutationFunctionOptions<TData, TVariables>) => Promise<FetchResult<TData>>
  // processor: <TData = any, TVariables = OperationVariables> (options?: MutationFunctionOptions<TData, TVariables>) => Promise<FetchResult<TData>>
  // processor: (options?: CreateTimerProcessorMutationOptions) => Promise<any>
  // processor: <TData = any> (options?: MutationFunctionOptions<any, any>) => Promise<MutationResult<TData>>
  processor: (
    options?: MutationFunctionOptions<any, any>
  ) => Promise<FetchResult>

  /**
   * Задержка на закрытие ошибки. По умолчанию 3000.
   */
  errorDelay?: number

  /**
   * Статус выполнения запроса
   */
  loading: boolean
}
