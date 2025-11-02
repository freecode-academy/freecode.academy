import { useCallback, useState } from 'react'

export type useDnDProps = {
  onDropHandler: React.DragEventHandler<HTMLElement>
}

export function useDnD<T extends HTMLElement = HTMLElement>({
  onDropHandler,
}: useDnDProps) {
  const [isDragging, setIsDragging] = useState(false)

  // Обработчик drag-and-drop
  const handleDragOver = useCallback(
    (e: React.DragEvent<T>) => {
      e.preventDefault()
      e.stopPropagation()
      if (!isDragging) setIsDragging(true)
    },
    [isDragging]
  )

  const handleDragLeave = useCallback((e: React.DragEvent<T>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }, [])

  const onDrop = useCallback(
    (e: React.DragEvent<T>) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)

      // if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      //   const allFiles = Array.from(e.dataTransfer.files)

      //   // Фильтруем только изображения
      //   const imageFiles = allFiles.filter(isImageFile)

      //   if (imageFiles.length) {
      //     onFilesChange(imageFiles)
      //   }
      // }

      onDropHandler(e)
    },
    [onDropHandler]
  )

  return {
    isDragging,
    handleDragOver,
    handleDragLeave,
    onDrop,
  }
}
