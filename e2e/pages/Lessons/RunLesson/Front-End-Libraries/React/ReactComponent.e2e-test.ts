/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-namespace */

// TODO Сейчас работает только с react@16. С 17+ ломается.

import 'cypress-graphql-mock-network'
import { expect } from 'chai'

declare global {
  namespace Cypress {
    interface ApplicationWindow {
      monaco?: typeof import('monaco-editor')
    }
  }
}

describe('Run React Component Lesson', () => {
  it('Load lesson', () => {
    cy.visit('/learn/exercises/5a24c314108439a4d4036168')
  })

  describe('Run test', () => {
    it('Run test', () => {
      cy.wait(200)

      cy.get('button[role="run-tests"]').click()

      /**
       * Check that test failed
       */
      cy.get('[role="test-result--output"] *').then((node) => {
        expect(node[0].innerText).eq('Unspecified AssertionError')
      })

      cy.wait(1000)

      /**
       * Get monaco editor and add content
       */
      cy.window().then((win) => {
        expect(!!win).true

        const monaco = win.monaco

        expect(!!monaco).true

        if (monaco) {
          const model = monaco.editor.getModels()[0]

          model.setValue(`// change code below this line
class MyComponent extends React.Component {
  render(){
    return <h1>My First React Component!</h1>;
  }
}
ReactDOM.render(<MyComponent />, document.getElementById("challenge-node")) `)
        }
      })

      cy.wait(1000)

      cy.get('button[role="run-tests"]').click()

      cy.wait(1000)
    })

    it('Close success modal', () => {
      expect(cy.get('div[role=CodeChallengeSuccess]')).not.null

      cy.get('div[role=CodeChallengeSuccess] [role=message]').then((node) => {
        expect(node[0].innerText).eq('Задание успешно выполнено!')
      })

      cy.get('div[role=CodeChallengeSuccess] button[role=close]').click()
    })
  })
})

export default true
