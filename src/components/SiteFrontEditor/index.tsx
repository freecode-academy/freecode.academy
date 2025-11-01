import React from 'react'

// import FrontEditor, {
//   FrontEditorProps,
//   registerComponents,
// } from '@prisma-cms/front-editor'
// import FrontEditorComponents from '@prisma-cms/front-editor/dist/preset/all'

// // import OldPageHeader from './components/OldPageHeader'
// // import OldPages from './components/pages/OldPages'
// // import SwitchTemplateLink from './components/Link/SwitchTemplate';
// // import PdfView from './components/PdfView';
// import Topic from './components/Resource/Topic'
// import Resource from './components/Resource'
// import ResourceFields from './components/Resource/Fields'
// import ResourceContent, {
//   RichTextCustom,
// } from './components/Resource/Fields/Field/ResourceContent'
// import Comments from './components/Resource/Comments'
// import TopicBlog from './components/Resource/Topic/TopicBlog'
// import Youtube from './components/Resource/Fields/Field/Youtube'
// import Image from './components/Image'
// import JoinUserTechnologyButton from './components/JoinUserTechnologyButton'
// import ViewIcon from './components/ViewIcon'
// import AcceptTechnologyLesson from './components/society/technologies/AcceptTechnologyLesson'
// import TechnologyLessonUser from './components/society/technologies/TechnologyLessonUser'
// // import FreeCodeCamp from './components/FreeCodeCamp/FreeCodeCamp'
// // import CodeChallenge from './components/FreeCodeCamp/CodeChallenge'
// import CallRequestButtons from './components/webrtc/CallRequestButtons'

// export const CustomComponents = [
//   // UserPage,
//   // OldPageHeader,
//   // OldPages,
//   // SwitchTemplateLink,
//   // CreateUserPage,
//   // TopicsPage,
//   // PdfView,
//   // Topic,
//   // Comments,
//   // TopicBlog,
//   Resource,
//   ResourceFields,
//   ResourceContent,
//   RichTextCustom,
//   Youtube,
//   // ChatRooms,
//   // ChatRoom,
//   // JoinUserTechnologyButton,
//   // ViewIcon,
//   // AcceptTechnologyLesson,
//   // TechnologyLessonUser,
//   // FreeCodeCamp,
//   // CodeChallenge,
//   // CallRequestButtons,
//   Image,
// ] as FrontEditorProps['Components']

// const Components = CustomComponents.reduce((curr, next) => {
//   const index = curr.findIndex((n) => n.Name === next.Name)

//   if (index !== -1) {
//     curr[index] = next
//   } else {
//     curr.push(next)
//   }

//   return curr
// }, FrontEditorComponents)

/**
 * Хелпер для инициализации JSON объекта для редактора
 */
// export const initEditorObject = registerComponents(Components)

import {
  ResourceFragment,
  ResourceNoNestingFragment,
  TopicsConnectionTopicFragment,
} from 'src/gql/generated'
import { MarkdownField } from '../MarkdownField'
import { Markdown } from '../Markdown'

export type SiteFrontEditorProps = {
  object?:
    | ResourceNoNestingFragment
    | ResourceFragment
    | TopicsConnectionTopicFragment
  inEditMode?: boolean
  itemsOnly?: boolean
  className?: string
  value?: string | Record<string, unknown> | Record<string, unknown>[] | null
}

export const SiteFrontEditor: React.FC<SiteFrontEditorProps> = ({
  value,
  object,
}) => {
  let content: string | null | undefined

  // TODO Привести все к единому Markdown
  /**
   * Сейчас проблема в том, что старый контект в Markdown некоторые комментарии и топики
   * кидают ошибку.
   * Скорее всего какой-то блок кода неизвестный или типа того.
   */
  let Renderer: typeof MarkdownField | typeof Markdown = MarkdownField

  // const contentText =
  //   object && 'contentText' in object ? object.contentText : undefined

  if (object) {
    if ('contentV2' in object && object.contentV2) {
      content = object.contentV2
      Renderer = Markdown
    } else if ('contentText' in object && object.contentText) {
      content = object.contentText
    } else if (value) {
      if (typeof value === 'string') {
        content = value
      } else {
        try {
          content = JSON.stringify(value, null, 2)
        } catch (error) {
          content = null
        }
      }
    }
  }

  return <Renderer>{content}</Renderer>
}

export const FrontEditor = SiteFrontEditor

export const Editor = SiteFrontEditor
