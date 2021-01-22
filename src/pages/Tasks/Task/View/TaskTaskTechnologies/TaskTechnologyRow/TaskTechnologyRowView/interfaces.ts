export type TaskTechnologyRowViewProps = {
  buttons: JSX.Element[]
  technology: JSX.Element | null
  level: JSX.Element | null
  className?: string

  /**
   * Ивент на отправку данных формы
   */
  onSubmit?: (event: React.FormEvent) => void
}
