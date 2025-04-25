export interface BaseAppConfig {
  publicRuntimeConfig: {
    MAIN_AI_AGENT_USERNAME: string
  }
}

export interface AppConfig extends BaseAppConfig {
  publicRuntimeConfig: BaseAppConfig['publicRuntimeConfig']
}
