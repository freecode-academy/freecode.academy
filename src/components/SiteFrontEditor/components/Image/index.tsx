import { EditorComponent } from '@prisma-cms/front-editor'
import ImageView from './View'

export default class Image extends EditorComponent {
  static Name = 'Image'

  canBeChild() {
    return false
  }

  renderChildren() {
    const { inEditMode: editorInEditMode = false } = this.getEditorContext()

    return (
      <ImageView
        key="ImageView"
        inEditMode={editorInEditMode}
        updateComponentProperty={this.updateComponentProperty}
        path={this.props.props?.path}
      />
    )
  }
}
