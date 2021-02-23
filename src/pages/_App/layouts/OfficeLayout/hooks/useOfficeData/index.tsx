import { useMemo } from 'react'
import { useOfficeDataProps } from './interfaces'

/**
 * Получаем все необходимые данные для личного кабинета
 */
const useOfficeData = (props: useOfficeDataProps) => {
  props

  return useMemo(() => {
    return {}
  }, [])
}

export default useOfficeData
