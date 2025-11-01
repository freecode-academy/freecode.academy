import ReactMarkdown, {
  Components,
  defaultUrlTransform,
  UrlTransform,
} from 'react-markdown'

import { visit } from 'unist-util-visit'
import { Node } from 'unist'

import { MarkdownStyled } from './styles'
import React from 'react'
import { FileRenderer, FileRendererProps } from './components/FileRenderer'
import remarkMdx from 'remark-mdx'
import { MdxJsxAttribute } from 'mdast-util-mdx-jsx'
import Link from 'next/link'
import remarkGfm from 'remark-gfm'

/**
 * Начиная с 9 версии ремарк стал обнулять тел и мейлто ссылки.
 * https://github.com/remarkjs/react-markdown/issues/829
 */
const urlTransform: UrlTransform = (url, _name, _node) => {
  const fixed = defaultUrlTransform(url)

  // если схема tel/mailto — пропускаем как есть
  if (url.startsWith('tel:') || url.startsWith('mailto:')) {
    return url
  }
  return fixed
}

type Tree = Node & {
  tagName?: string
  attributes?: MdxJsxAttribute[]
}

function myRemarkPlugin() {
  return function (tree: Tree) {
    visit(tree, function (node) {
      if ('name' in node && node.name === 'File') {
        node.type = 'element'
        node.tagName = 'File'

        node.data = {
          hName: 'File',
          hProperties: Object.fromEntries(
            node.attributes?.map((attr: any) => [attr.name, attr.value]) ?? []
          ),
        }
      }
    })
  }
}

interface CustomComponents extends Components {
  File: React.FC<FileRendererProps>
}

const components: CustomComponents = {
  a: ({ node: _node, href: hrefProps, ...props }) => {
    const href: string | undefined = hrefProps

    return (
      <>
        {href ? (
          <Link
            href={href}
            {...props}
            target={href && /^https?:/.test(href) ? '_blank' : undefined}
          />
        ) : (
          <span {...props} />
        )}
      </>
    )
  },
  // File: (props: any) => {
  //   const id: string | undefined = props.id

  //   return id ? <FileRenderer {...props} id={id} /> : null
  // },
  File: FileRenderer,
}

type MarkdownProps = {
  children: string | null | undefined
}

export const Markdown: React.FC<MarkdownProps> = ({ children }) => {
  return children ? (
    <MarkdownStyled>
      <ReactMarkdown
        urlTransform={urlTransform}
        remarkPlugins={[remarkGfm, remarkMdx, myRemarkPlugin]}
        components={components}
      >
        {children}
      </ReactMarkdown>
    </MarkdownStyled>
  ) : null
}
