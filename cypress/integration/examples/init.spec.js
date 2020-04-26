describe('Cypress', () => {
  it('is working', () => {
    expect(true).to.equal(true)
  });

  it('visits Simple Trip Manager', () => {
    cy.visit('/')
  });

})