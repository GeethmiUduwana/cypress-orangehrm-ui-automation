describe('Employee Test', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.wait(3000)

    cy.get('input[name="username"]').type('Admin', { delay: 300 })
    cy.wait(1000)

    cy.get('input[name="password"]').type('admin123', { delay: 300 })
    cy.wait(1000)

    cy.get('button[type="submit"]').click()
    cy.wait(5000)
  })

  it('Add Employee', () => {

    cy.contains('PIM').click()
    cy.wait(2000)

    cy.contains('Add Employee').click()
    cy.wait(2000)

    cy.get('input[name="firstName"]').type('John', { delay: 300 })
    cy.wait(1000)

    cy.get('input[name="lastName"]').type('Doe', { delay: 300 })
    cy.wait(1000)

    cy.contains('Save').click()
    cy.wait(4000)

    cy.contains('Personal Details').should('be.visible')
  })

})