import React from 'react'
import { FilesListStyled } from './styles'
import { FileFragment } from 'src/gql/generated'
import { FileItem } from './FileItem'

type FilesListProps = {
  files: FileFragment[]
}

export const FilesList: React.FC<FilesListProps> = ({ files, ...other }) => {
  return (
    <FilesListStyled {...other}>
      {files.map((n) => (
        <FileItem key={n.id} file={n} />
      ))}
    </FilesListStyled>
  )
}
