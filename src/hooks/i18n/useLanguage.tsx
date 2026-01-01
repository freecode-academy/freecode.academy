import { useRouter } from 'next/router'
import { useAppTranslate } from './useTranslate'
import { LanguageEnum } from 'src/gql/generated'

export const useLanguage = () => {
  const t = useAppTranslate()

  const router = useRouter()

  return {
    t,
    language: (router.locale ?? 'en') as LanguageEnum,
  }
}
