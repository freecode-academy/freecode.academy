import {
  // InsertImage,
  UndoRedo,
  BoldItalicUnderlineToggles,
  // CodeToggle,
  CreateLink,
  // InsertCodeBlock,
  InsertThematicBreak,
  ListsToggle,
  BlockTypeSelect,
  Separator,
  MDXEditorMethods,
  defaultSvgIcons,
} from '@mdxeditor/editor'
import { memo, useCallback } from 'react'
import { FileRendererImageVariant } from '../../components/FileRenderer/styles'
import {
  MarkdownEditorToolbarButtonStyled,
  MarkdownEditorToolbarStyled,
} from './styles'

type MarkdownEditorToolbarProps = {
  editor: MDXEditorMethods | null
}

const MarkdownEditorToolbarComponent: React.FC<MarkdownEditorToolbarProps> = ({
  editor,
}) => {
  return (
    <MarkdownEditorToolbarStyled>
      {/* Базовые действия */}
      <UndoRedo />

      {/* Форматирование текста */}
      <BoldItalicUnderlineToggles />
      {/* <CodeToggle /> */}

      {/* Структурные элементы */}
      <BlockTypeSelect />
      <ListsToggle />

      {/* Вставка объектов */}
      {/* <InsertCodeBlock /> */}
      <InsertThematicBreak />
      <CreateLink />
      {/* <InsertImage /> */}

      <Separator />

      {/* Кастомные компоненты */}

      <MarkdownEditorToolbarButtonStyled
        type="button"
        title="Insert image"
        onClick={useCallback(() => {
          editor?.insertMarkdown(
            `<File variant="${FileRendererImageVariant.wildscreen}" />`
          )
        }, [editor])}
      >
        {defaultSvgIcons.add_photo}
      </MarkdownEditorToolbarButtonStyled>
    </MarkdownEditorToolbarStyled>
  )
}

export const MarkdownEditorToolbar = memo(MarkdownEditorToolbarComponent)
