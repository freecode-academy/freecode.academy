// @ts-check

/**
 * Этот файл закидываем именно в сервер, так как иначе собирается не в ту папку
 */

/**
 * @type {import('next-i18next').UserConfig}
 */
const nextI18nextConfig = {
  // https://www.i18next.com/overview/configuration-options#logging
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'ru',
    locales: [
      // 'en',
      'ru',
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
    // localeDetection: false,
  },
  /** To avoid issues when deploying to some paas (vercel...) */
  // localePath:
  //   typeof window === 'undefined'
  //     ? require('path').resolve('./public/locales')
  //     : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',

  /**
   * @link https://github.com/i18next/next-i18next#6-advanced-configuration
   */
  // saveMissing: false,
  // strictMode: true,
  // serializeConfig: false,
  // react: { useSuspense: false }
}

module.exports = { nextI18nextConfig }
