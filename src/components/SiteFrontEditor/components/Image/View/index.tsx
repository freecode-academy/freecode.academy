import Uploader, { UploaderProps } from '@prisma-cms/uploader'
import React, { useCallback, useMemo } from 'react'
import ImagePopup from './ImagePopup'
import { ImageViewProps } from './interfaces'
import { ImageViewStyled, ImageViewUploaderStyled } from './styled'

/**
 * Вьюха для загрузки и отображения картинки
 */
const ImageView: React.FC<ImageViewProps> = (props) => {
  const { inEditMode, updateComponentProperty, path } = props

  const onUpload: UploaderProps['onUpload'] = useCallback(
    (result) => {
      const path = result.data.singleUpload?.path

      updateComponentProperty('path', path)
    },
    [updateComponentProperty]
  )

  /**
   * Загрузчик картинки
   */
  const uploader = useMemo(() => {
    if (!inEditMode) {
      return null
    }

    return (
      <ImageViewUploaderStyled>
        <Uploader name="image" onUpload={onUpload} accept="image/*" />
      </ImageViewUploaderStyled>
    )
  }, [inEditMode, onUpload])

  /**
   * Вывод картинки
   */
  const image = useMemo(() => {
    if (!path) {
      return null
    }

    return <ImagePopup path={path} />
  }, [path])

  return useMemo(() => {
    return (
      <ImageViewStyled as="span">
        {uploader}
        {image}
      </ImageViewStyled>
    )
  }, [image, uploader])
}

export default ImageView
