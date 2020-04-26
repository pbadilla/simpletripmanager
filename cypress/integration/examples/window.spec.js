/// <reference types="cypress" />

context('Window', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('it has HEADER', () => {
    cy.get('div')
      .find('#Header')
      .should('have.length', 1)
  })

  it('it has CARDTRIP', () => {
    cy.get('div')
      .find('#cardTrip-0')
      .should('have.length', 1)
  })

  it('it has MAP', () => {
    cy.get('div')
      .find('#map')
      .should('have.length', 1)
  })

  it('it has FOOTER', () => {
    cy.get('div')
      .find('#footer')
      .should('have.length', 1)
  })
})
