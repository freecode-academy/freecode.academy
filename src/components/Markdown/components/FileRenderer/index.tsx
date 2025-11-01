import React from 'react'
import {
  FileRendererImageStyled,
  FileRendererImageVariant,
  FileRendererStyled,
} from './styles'
import { useFileQuery } from 'src/gql/generated'
import { createResizedUrl } from 'src/helpers/imageFormats'

export type FileRendererProps = {
  id: string | null | undefined
  variant: FileRendererImageVariant | undefined
}

export const FileRenderer: React.FC<FileRendererProps> = ({ id, variant }) => {
  const response = useFileQuery({
    skip: !id,
    variables: {
      where: {
        id,
      },
    },
  })

  const file = response.data?.file

  if (!file) {
    return null
  }

  const { mimetype, path } = file

  let content: React.ReactNode = null

  switch (true) {
    case mimetype.startsWith('image/'):
      {
        const src = createResizedUrl(path, 'big')

        content = <FileRendererImageStyled src={src} variant={variant} />
      }

      break
  }

  return <FileRendererStyled>{content}</FileRendererStyled>
}
