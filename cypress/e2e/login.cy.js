describe('Login Test', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.wait(3000)
  })

  it('Valid Login', () => {

    cy.get('input[name="username"]')
      .should('be.visible')
      .type('Admin', { delay: 300 })

    cy.wait(1500)

    cy.get('input[name="password"]')
      .should('be.visible')
      .type('admin123', { delay: 300 })

    cy.wait(1500)

    cy.get('button[type="submit"]').click()
    cy.wait(4000)

    cy.url().should('include', '/dashboard')
  })

  it('Invalid Login', () => {

    cy.get('input[name="username"]').type('wrong', { delay: 300 })
    cy.wait(1000)

    cy.get('input[name="password"]').type('wrong', { delay: 300 })
    cy.wait(1000)

    cy.get('button[type="submit"]').click()
    cy.wait(3000)

    cy.contains('Invalid credentials').should('be.visible')
  })

})