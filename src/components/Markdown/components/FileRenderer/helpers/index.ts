import { FileRendererImageVariant } from '../styles'

export function isFileRendererImageVariant(
  value: string | undefined
): value is FileRendererImageVariant | undefined {
  return !value || value === FileRendererImageVariant.wildscreen
}
