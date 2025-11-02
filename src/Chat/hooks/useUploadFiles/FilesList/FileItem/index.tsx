import React from 'react'
import { FileItemStyled } from './styles'
import { FileFragment } from 'src/gql/generated'

type FileItemProps = {
  file: FileFragment
}

export const FileItem: React.FC<FileItemProps> = ({ file, ...other }) => {
  return <FileItemStyled {...other}>{file.path}</FileItemStyled>
}
