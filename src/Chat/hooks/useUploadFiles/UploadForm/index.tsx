import React, { useEffect } from 'react'
import { FilePreviewsStyled } from './styles'
import { FileFragment } from 'src/gql/generated'
import { FilePreview } from './FilePreview'
import { isImageFile } from 'src/helpers/isImageFile'

type UploadFormProps = {
  files: FileFragment[]
  onFilesChange: (files: File[]) => void
}

export const UploadForm: React.FC<UploadFormProps> = ({
  files,
  onFilesChange,
  ...other
}) => {
  // Обработчик вставки изображений через Ctrl+V
  useEffect(() => {
    const handlePaste = (e: ClipboardEvent) => {
      if (
        e.clipboardData &&
        e.clipboardData.files &&
        e.clipboardData.files.length > 0
      ) {
        const allPastedFiles = Array.from(e.clipboardData.files)

        // Фильтруем только изображения
        const imageFiles = allPastedFiles.filter(isImageFile)

        if (imageFiles.length) {
          onFilesChange(imageFiles)
          e.preventDefault()
        }
      }
    }

    document.addEventListener('paste', handlePaste)
    return () => {
      document.removeEventListener('paste', handlePaste)
    }
  }, [files, onFilesChange])

  return files.length > 0 ? (
    <FilePreviewsStyled {...other}>
      {files.map((file, index) => (
        <FilePreview key={index} file={file} />
      ))}
    </FilePreviewsStyled>
  ) : null
}
