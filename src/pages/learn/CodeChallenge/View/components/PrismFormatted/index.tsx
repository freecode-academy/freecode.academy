import React, { useState, useEffect } from 'react'
import Prism from 'prismjs'

import { PrismFormattedProps } from './interfaces'
import { PrismFormattedStyled } from './styles'

export const PrismFormatted: React.FC<PrismFormattedProps> = ({
  text,
  className,
}) => {
  // declare instructionsRef: any

  // static displayName = 'PrismFormatted'

  // componentDidMount() {

  //   console.log('this.instructionsRef', this.instructionsRef);

  //   // Just in case 'current' has not been created, though it should have been.
  //   if (this.instructionsRef.current) {
  //     Prism.highlightAllUnder(this.instructionsRef.current)
  //   }
  // }

  // constructor(props: PrismFormattedProps) {
  //   super(props)
  //   this.instructionsRef = React.createRef()
  // }

  const [element, ref] = useState<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!element) {
      return
    }

    // Обновление по тексту надо, чтобы обновить подсветку кода
    text

    Prism.highlightAllUnder(element)
  }, [element, text])

  return (
    <PrismFormattedStyled
      className={className}
      dangerouslySetInnerHTML={{ __html: text }}
      ref={ref}
    />
  )
}

// export class PrismFormatted extends PureComponent<PrismFormattedProps> {
//   declare instructionsRef: any

//   static displayName = 'PrismFormatted'

//   componentDidMount() {

//     console.log('this.instructionsRef', this.instructionsRef);

//     // Just in case 'current' has not been created, though it should have been.
//     if (this.instructionsRef.current) {
//       Prism.highlightAllUnder(this.instructionsRef.current)
//     }
//   }

//   constructor(props: PrismFormattedProps) {
//     super(props)
//     this.instructionsRef = React.createRef()
//   }

//   render() {
//     const { text, className } = this.props
//     return (
//       <div
//         className={className}
//         dangerouslySetInnerHTML={{ __html: text }}
//         ref={this.instructionsRef}
//       />
//     )
//   }
// }
