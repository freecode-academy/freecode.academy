/* eslint-disable no-redeclare */
/* eslint-disable @typescript-eslint/no-namespace */
import 'cypress-graphql-mock-network'
import { expect } from 'chai'

declare global {
  namespace Cypress {
    interface ApplicationWindow {
      monaco?: typeof import('monaco-editor')
    }
  }
}

describe('Run CSS Grid Lesson', () => {
  it('Load lesson', () => {
    cy.visit('/learn/exercises/5a90372638fddaf9a66b5d38')
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
        const monaco = win.monaco

        expect(!!monaco).true

        if (monaco) {
          const model = monaco.editor.getModels()[0]

          model.setValue(`<style>
          .item1{background:LightSkyBlue;}
          .item2{background:LightSalmon;}
          .item3{background:PaleTurquoise;}
          .item4{background:LightPink;}
        
          .item5 {
            background: PaleGreen;
            /* add your code below this line */
            grid-column: 2 / 4;
            /* add your code above this line */
          }
        
          .container {
            font-size: 40px;
            min-height: 300px;
            width: 100%;
            background: LightGray;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-rows: 1fr 1fr 1fr;
            grid-gap: 10px;
          }
        </style>
        
        <div class="container">
          <div class="item1">1</div>
          <div class="item2">2</div>
          <div class="item3">3</div>
          <div class="item4">4</div>
          <div class="item5">5</div>
        </div>
        `)
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
