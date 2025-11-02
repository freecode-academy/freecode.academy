import { useState, useCallback } from 'react'
import { UploadForm } from './UploadForm'
import { useMultipleUploadMutation, FileFragment } from 'src/gql/generated'
import { isImageFile } from 'src/helpers/isImageFile'
import { useDnD, useDnDProps } from '../useDnD'

export function useUploadFiles() {
  const [files, setFiles] = useState<FileFragment[]>([])

  const [uploadMutation, { loading: uploading }] = useMultipleUploadMutation()

  const uploadFiles = useCallback(
    async (files: File[]) => {
      if (files.length === 0 || uploading) {
        return
      }

      uploadMutation({
        variables: {
          files: files,
        },
      })
        .then((response) => {
          // Обрабатываем результат загрузки
          const result = response.data?.multipleUpload

          if (result?.length) {
            setFiles((prev) => [...prev, ...result])
          }
        })
        .catch((error) => {
          console.error(error)

          alert((error as Error)?.message || 'Ошибка загрузки файлов')
        })
    },
    [uploadMutation, uploading]
  )

  // Обработчик изменения файлов (для drag-and-drop или вставки)
  const handleFilesChange = useCallback(
    (newFiles: File[]) => {
      // Фильтруем файлы, оставляя только изображения
      const imageFiles = newFiles.filter(isImageFile)

      uploadFiles(imageFiles)
    },
    [uploadFiles]
  )

  const onDropHandler = useCallback<useDnDProps['onDropHandler']>(
    (event) => {
      if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        const allFiles = Array.from(event.dataTransfer.files)

        // Фильтруем только изображения
        const imageFiles = allFiles.filter(isImageFile)

        if (imageFiles.length) {
          handleFilesChange(imageFiles)
        }
      }
    },
    [handleFilesChange]
  )

  const { onDrop } = useDnD({
    onDropHandler,
  })

  // Создаем компонент формы с передачей необходимых props
  const filesForm = (
    <UploadForm files={files} onFilesChange={handleFilesChange} />
  )

  return {
    filesForm,
    files,
    setFiles,
    onDrop,
    handleFilesChange,
  }
}
