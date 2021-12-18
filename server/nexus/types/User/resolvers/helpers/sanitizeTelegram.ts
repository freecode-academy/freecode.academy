export function sanitizeTelegram(telegram: string | null | undefined) {
  if (telegram) {
    telegram = telegram.replace(/^http(s?):\/\/.*?\//, '').replace(/^@/, '')
  }

  return telegram
}
