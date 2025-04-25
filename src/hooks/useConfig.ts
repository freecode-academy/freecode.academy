import getConfig from 'next/config'
import { AppConfig } from '../config/interfaces'

export function useConfig() {
  const config = getConfig() as AppConfig
  return config.publicRuntimeConfig
}

export function getAppConfig() {
  const config = getConfig() as AppConfig
  return config.publicRuntimeConfig
}
