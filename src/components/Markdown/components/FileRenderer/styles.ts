import styled from 'styled-components'

export enum FileRendererImageVariant {
  // Широкоформатный для публикаций
  wildscreen = 'wildscreen',
}
export type FileRendererImageStyledProps = {
  variant: FileRendererImageVariant | undefined
}

export const FileRendererImageStyled = styled.img<FileRendererImageStyledProps>`
  max-width: 100%;
  width: auto;
  margin: 0 auto;
`

export const FileRendererStyled = styled.div`
  display: contents;
`
