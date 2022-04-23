import { initMockServer } from 'e2e/mock'
import { MeDocument, MeQueryResult, User } from 'src/modules/gql/generated'
import { expect } from 'chai'

describe('MainPage', () => {
  beforeEach(() => {
    initMockServer({
      authed: false,
    })
  })

  before(() => {
    cy.visit('/')
  })

  after(() => {
    cy.mockNetworkReset()
  })

  describe('Load MainPage', () => {
    it('Check content', () => {
      cy.contains('.MuiTypography-root-133 > a', 'PrismaCMS')
    })
  })

  describe('Test mock API', () => {
    it('Mock API', () => {
      cy.mockNetworkAdd({
        Query: () => ({
          me: (): User => {
            return {
              id: 'test-user-1',
              active: true,
              showEmail: true,
              createdAt: new Date('2022/03/31'),
              updatedAt: new Date('2022/03/31'),
              username: 'test-user',
              fullname: 'Test User',
              blocked: false,
              showFullname: true,
            }
          },
        }),
      })

      return fetch('/api', {
        method: 'POST',
        body: JSON.stringify(
          {
            query: MeDocument.loc?.source.body,
            variables: {},
          },
          undefined,
          2
        ),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then<MeQueryResult>(async (r) => {
          const response = await r.json()
          return response
        })
        .then((result) => {
          expect(result.data).not.undefined
          expect(result.data?.me).not.null
        })
    })
  })
})

export default true
