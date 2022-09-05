import { Prisma } from '@prisma/client'

type Component = {
  component: string
  components: Component[]
  props: Record<string, unknown> & {
    content?: {
      blocks?: ResourceBlock[]
    }
  }
}

type ResourceBlock = {
  text: string
}

function reduceBlocks(
  components: Component[] | null,
  resourceBlocks: ResourceBlock[],
  _entityMap: any,
  textLength = 0
) {
  if (components && components.length) {
    components.map((n) => {
      const { components: itemComponents, props } = n || {}

      const { content } = props || {}

      const {
        blocks,
        // entityMap: contentEntityMap,
      } = content || {}

      if (blocks && blocks.length) {
        // resourceBlocks = resourceBlocks.concat(blocks);

        blocks.map((block) => {
          const { text } = block

          textLength += text ? text.length : 0

          resourceBlocks.push(block)

          return null
        })
      }

      reduceBlocks(itemComponents, resourceBlocks, _entityMap, textLength)

      return null
    })
  }
}

const prepareContentSuper = (
  argsData:
    | Prisma.ResourceCreateArgs['data']
    | Prisma.ResourceUpdateArgs['data'],
  data: Prisma.ResourceCreateInput | Prisma.ResourceUpdateInput
) => {
  // const {
  //   data: { content },
  // } = args

  const { content } = argsData

  if (content !== undefined) {
    // const {
    //   blocks,
    // } = content || {};
    // const blocks: {text: string}[] | null = content && (typeof content === "object" && !Array.isArray(content)) && Array.isArray(content.blocks) ? content.blocks : null;
    const blocks =
      content &&
      typeof content === 'object' &&
      !Array.isArray(content) &&
      // @ts-expect-error Wrong types
      Array.isArray(content.blocks)
        ? // @ts-expect-error Wrong types
          (content.blocks as ({ text?: string } | null)[])
        : null

    blocks?.map((n) => {
      return n
    })

    const textArray =
      (blocks &&
        blocks.map((n) => (n?.text && n.text.trim()) || '').filter((n) => n)) ||
      []

    const contentText = textArray.join(' ')

    Object.assign(data, {
      content,
      contentText,
    })
  }

  return data
}

export const prepareContent = (
  argsData:
    | Prisma.ResourceCreateArgs['data']
    | Prisma.ResourceUpdateArgs['data'],
  data: Prisma.ResourceCreateInput | Prisma.ResourceUpdateInput
) => {
  // const {
  //   data: {
  //     // content,
  //     components,
  //   },
  // } = args;

  const components = argsData.components as Component[] | undefined | null

  if (components !== undefined) {
    const resourceBlocks: ResourceBlock[] = []
    const entityMap = {}

    reduceBlocks(components, resourceBlocks, entityMap)

    let newContent = null

    if (resourceBlocks.length) {
      newContent = {
        blocks: resourceBlocks,
        entityMap,
      }
    }

    Object.assign(data, {
      content: newContent,
      // contentText,
    })

    Object.assign(argsData, {
      ...data,
    })
  }

  return prepareContentSuper(argsData, data)
}
