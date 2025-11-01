import { useCallback } from 'react'

import { JsxComponentDescriptor, useMdastNodeUpdater } from '@mdxeditor/editor'
import { FileEditor } from '.'
import { MdxJsxAttribute, MdxJsxExpressionAttribute } from 'mdast-util-mdx-jsx'
import { isFileRendererImageVariant } from 'src/components/Markdown/components/FileRenderer/helpers'
import { FileRendererImageVariant } from 'src/components/Markdown/components/FileRenderer/styles'

function isMdxJsxAttribute(
  n: MdxJsxAttribute | MdxJsxExpressionAttribute
): n is MdxJsxAttribute {
  return 'name' in n && n.name === 'id'
}

export const FileEditorDescriptor: JsxComponentDescriptor = {
  name: 'File',
  kind: 'flow',
  hasChildren: false,
  props: [
    { name: 'id', type: 'string' },
    { name: 'variant', type: 'string' },
  ],
  Editor: ({ mdastNode }) => {
    const updateNode = useMdastNodeUpdater()

    const onChange = useCallback(
      (id: string | undefined) => {
        const attributes = mdastNode.attributes

        let attribute = attributes.find<MdxJsxAttribute>(isMdxJsxAttribute)

        if (!attribute) {
          attribute = {
            name: 'id',
            type: 'mdxJsxAttribute',
            value: id,
          }

          attributes.push(attribute)
        }

        attribute.value = id

        updateNode({
          ...mdastNode,
          attributes,
        })
      },
      [mdastNode, updateNode]
    )

    const data: {
      id: string | undefined
      variant: FileRendererImageVariant | undefined
    } = {
      id: undefined,
      variant: undefined,
    }

    mdastNode.attributes.forEach((attr) => {
      if ('name' in attr) {
        const name = attr.name

        const { value } = attr

        if (typeof value !== 'string') {
          return
        }

        switch (name) {
          case 'id':
            data[name] = value
            break

          case 'variant':
            data[name] = isFileRendererImageVariant(value) ? value : undefined
            break
        }
      }
    })

    return <FileEditor {...data} onChange={onChange} />
  },
}
