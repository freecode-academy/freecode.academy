import React from 'react'
import { FileFragment } from 'src/gql/generated'
import { FilePreviewStyled } from './styles'
import { createResizedUrl } from 'src/helpers/imageFormats'

type FilePreviewProps = {
  file: FileFragment
}

export const FilePreview: React.FC<FilePreviewProps> = ({ file, ...other }) => {
  const src = createResizedUrl(file.path, 'thumb')

  return (
    <FilePreviewStyled {...other}>
      <img src={src} alt={file.name ?? undefined} />
    </FilePreviewStyled>
  )
}
