/* eslint-disable no-console */
import {
  TolgeeProvider,
  DevTools,
  Tolgee,
  useTolgeeSSR,
  FormatSimple,
  TolgeeOptions,
} from '@tolgee/react'
import { useRouter } from 'next/router'

import ruLocale from '../../../i18n/ru.json'
// import enLocale from '../../../i18n/en.json'
// import viLocale from '../../../i18n/vi.json'
// import zhLocale from '../../../i18n/zh.json'
// import deLocale from '../../../i18n/de.json'
// import frLocale from '../../../i18n/fr.json'
// import hiLocale from '../../../i18n/hi.json'
// import jaLocale from '../../../i18n/ja.json'
// import koLocale from '../../../i18n/ko.json'
// import msLocale from '../../../i18n/ms.json'
// import svLocale from '../../../i18n/sv.json'
// import thLocale from '../../../i18n/th.json'

const tolgeeOptions: TolgeeOptions = {
  availableLanguages: [
    'ru',
    // 'en',
    // 'vi',
    // 'zh',
    // 'de',
    // 'fr',
    // 'hi',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'sv',
    // 'th',
  ],
  staticData: {
    ru: ruLocale,
    // en: enLocale,
    // vi: viLocale,
    // zh: zhLocale,
    // de: deLocale,
    // fr: frLocale,
    // hi: hiLocale,
    // ja: jaLocale,
    // ko: koLocale,
    // ms: msLocale,
    // sv: svLocale,
    // th: thLocale,
  },
  defaultLanguage: 'ru',
  apiKey: process.env.NEXT_PUBLIC_TOLGEE_API_KEY,
  apiUrl: process.env.NEXT_PUBLIC_TOLGEE_API_URL,
}

if (process.env.NODE_ENV === 'development') {
  Object.assign<TolgeeOptions, TolgeeOptions>(tolgeeOptions, {
    onFormatError: (value) => {
      console.error('i18n onFormatError', value)
      return value
    },
    onTranslationMissing: (info) => {
      console.error('i18n onTranslationMissing', info)
      return info.defaultValue ?? info.translation ?? info.key
    },
  })
}

export const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .init(tolgeeOptions)

export const I18NProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const router = useRouter()

  console.log('router.locale', router.locale)

  // sync tolgee with router.locale
  // make sure first render matches the server one
  const ssrTolgee = useTolgeeSSR(tolgee, router.locale)

  console.log('ssrTolgee', ssrTolgee)

  return <TolgeeProvider tolgee={ssrTolgee}>{children}</TolgeeProvider>
}
