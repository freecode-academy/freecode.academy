import { Scalars } from 'src/gql/generated'

/**
 * Возвращает перевод технологического уровня
 */
export const getUserTechnologyLevelText = (
  level: Scalars['UserTechnologyLevel']
): string => {
  switch (level) {
    // @ts-expect-error types
    case 1:
      return 'Начальный'

    // @ts-expect-error types
    case 2:
      return 'Ниже среднего'

    // @ts-expect-error types
    case 3:
      return 'Средний'

    // @ts-expect-error types
    case 4:
      return 'Уверенный'

    // @ts-expect-error types
    case 5:
      return 'Эксперт'

    default:
      return ''
  }
}
