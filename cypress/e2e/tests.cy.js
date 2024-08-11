describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.shop-menu > .nav > :nth-child(2) > a').should('be.visible')
    cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
    cy.get('[data-qa="signup-name"]').type()
  })
})