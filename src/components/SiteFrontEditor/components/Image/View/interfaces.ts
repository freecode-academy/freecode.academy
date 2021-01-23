import { EditorComponent } from '@prisma-cms/front-editor/dist'

export type ImageViewProps = {
  /**
   * Признак, что редактор в режиме редактирования
   */
  inEditMode: boolean

  // value: string | null

  updateComponentProperty: EditorComponent['updateComponentProperty']

  /**
   * УРЛ загруженной картинки
   */
  path: string | undefined
}
