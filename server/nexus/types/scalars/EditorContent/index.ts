import { asNexusMethod } from 'nexus'
import { GraphQLScalarType } from 'graphql'
import { NexusGenScalars } from 'server/nexus/generated/nexus'

const validateEditorContent = (
  value: Partial<NexusGenScalars['EditorComponentObject']> | null | undefined
): NexusGenScalars['EditorComponentObject'] => {
  if (!value) {
    throw new TypeError('EditorComponentObject empty value')
  }
  // else if (value.name === undefined) {
  //   throw new TypeError('EditorComponentObject name is empty')
  // }
  else if (!(typeof value.name === 'string')) {
    throw new TypeError('EditorComponentObject name is empty')
  } else if (!(typeof value.component === 'string')) {
    throw new TypeError('EditorComponentObject component is empty')
  } else if (!(typeof value.props === 'object')) {
    throw new TypeError('EditorComponentObject props is not an object')
  } else if (!Array.isArray(value.components)) {
    throw new TypeError('EditorComponentObject components is not an Array')
  }

  // if (!(typeof value.name === "string")) {
  //   throw new TypeError('EditorComponentObject name is empty')
  // }

  const { name, component, props, components, ...other } = value

  /**
   * Валидируем внутренние элементы
   */
  components.map((n) => {
    validateEditorContent(n)
  })

  return {
    name,
    component,
    props,
    components,
    ...other,
  }

  // return value;
}

export const EditorComponentObject = asNexusMethod(
  new GraphQLScalarType({
    name: 'EditorComponentObject',
    description: 'Контент для фронт-редактора',
    parseValue(value) {
      return validateEditorContent(value)
    },
    // serialize: (value) => {
    //   console.log('serialize value', value);

    //   if (validateEditorContent(value)) {
    //     return value
    //   }

    //   throw new TypeError(
    //     `EditorContent cannot represent an invalid value ${value}.`
    //   )
    // },
    // parseLiteral: (ast) => {

    //   console.log('parseLiteral ast', ast);

    //   if (ast.kind !== Kind.INT) {
    //     throw new TypeError(`Значение должно быть числом`)
    //   }
    //   const { value } = ast

    //   console.log('parseLiteral value', value);

    //   return validateEditorContent(value)
    // },
  }),
  'editorComponentObject',
  'EditorComponent.EditorComponentObject'
)
