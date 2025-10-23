import { TranslateParams, useTranslate } from '@tolgee/react'
import { i18nTranslationKey } from 'src/i18n/interfaces'

export function useAppTranslate(): (
  key: i18nTranslationKey,
  params?: TranslateParams
) => string {
  const { t } = useTranslate()

  return t
}
