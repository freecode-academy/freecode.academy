import React, { useRef, useCallback, useEffect } from 'react'
import {
  FileEditorStyled,
  FileEditorToolbarStyled,
  FileUploadButton,
} from './styles'
import { useUploadFiles } from 'src/Chat/hooks/useUploadFiles'
import {
  FileRenderer,
  FileRendererProps,
} from 'src/components/Markdown/components/FileRenderer'

type FileEditorProps = FileRendererProps & {
  onChange: (id: string | undefined) => void
}

export const FileEditor: React.FC<FileEditorProps> = ({
  id,
  variant,
  onChange,
  ...other
}) => {
  const { files, handleFilesChange, onDrop } = useUploadFiles()
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileInputChange = useCallback(
    function (event: React.ChangeEvent<HTMLInputElement>) {
      if (event.target.files && event.target.files.length > 0) {
        handleFilesChange(Array.from(event.target.files))
      }
    },
    [handleFilesChange]
  )

  useEffect(() => {
    const file = files.at(0)

    if (!file) {
      return
    }

    const fileId = file.id

    if (fileId !== id) {
      onChange(fileId)
    }
  }, [files, id, onChange])

  return (
    <FileEditorStyled {...other}>
      <FileEditorToolbarStyled onDrop={onDrop}>
        <FileUploadButton>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            onChange={handleFileInputChange}
          />
          Upload image
        </FileUploadButton>
      </FileEditorToolbarStyled>

      <FileRenderer id={id} variant={variant} />
    </FileEditorStyled>
  )
}
