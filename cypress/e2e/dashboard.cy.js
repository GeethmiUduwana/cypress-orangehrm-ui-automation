describe('Dashboard Test', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.wait(3000)

    cy.get('input[name="username"]').type('Admin', { delay: 300 })
    cy.wait(1000)

    cy.get('input[name="password"]').type('admin123', { delay: 300 })
    cy.wait(1000)

    cy.get('button[type="submit"]').click()
    cy.wait(4000)
  })

  it('Dashboard loads', () => {
    cy.contains('Dashboard').should('be.visible')
    cy.wait(2000)
  })

})