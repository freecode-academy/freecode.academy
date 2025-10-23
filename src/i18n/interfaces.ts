// Исходный тип JSON (вытянутый через Tolgee CLI)
type TranslationsType = typeof import('src/i18n/ru.json')

// Утилита для формирования dot-нотации ключей
type DotNotationEntries<T> = T extends Record<string, unknown>
  ? {
      [K in keyof T]: T[K] extends Record<string, unknown>
        ? `${K & string}.${DotNotationEntries<T[K]>}`
        : `${K & string}`
    }[keyof T]
  : never

// Удобный тип, который позволяет только существующие ключи
export type i18nTranslationKey = DotNotationEntries<TranslationsType>
