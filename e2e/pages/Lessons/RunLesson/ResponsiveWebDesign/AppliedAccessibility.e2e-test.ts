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

describe('Run Applied Accessibility Lesson', () => {
  it('Load lesson', () => {
    cy.visit('/learn/exercises/587d778c367417b2b2512aa9')
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

          model.setValue(`<body>
          <header>
            <h1>Tournaments</h1>
          </header>
          <article>
            <h2>Mortal Kombat Tournament Survey Results</h2>
            
            <!-- Add your code below this line -->
            
            <p>Thank you to everyone for responding to Master Camper Cat's survey. The best day to host the vaunted Mortal Kombat tournament is <time datetime="2016-09-15">Thursday, September 15<sup>th</sup></time>. May the best ninja win!</p>
            
            <!-- Add your code above this line -->
            
            <section>
              <h3>Comments:</h3>
              <article>
                <p>Posted by: Sub-Zero on <time datetime="2016-08-13T20:01Z">August 13<sup>th</sup></time></p>
                <p>Johnny Cage better be there, I'll finish him!</p>
              </article>
              <article>
                <p>Posted by: Doge on <time datetime="2016-08-15T08:12Z">August 15<sup>th</sup></time></p>
                <p>Wow, much combat, so mortal.</p>
              </article>
              <article>
                <p>Posted by: The Grim Reaper on <time datetime="2016-08-16T00:00Z">August 16<sup>th</sup></time></p>
                <p>Looks like I'll be busy that day.</p>
              </article>
            </section>
          </article>
          <footer>&copy; 2018 Camper Cat</footer>
        </body>
        
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
