describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Display category', () => {
    cy.get('.left-column h5').first().should('have.text', 'Category')
  })
})