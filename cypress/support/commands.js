// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName')
      .type('Test', { delay: 0 })
    cy.get('#lastName')
      .type('Last')
    cy.get('#email')
      .type('mail@test.com')
    cy.get('#phone')
      .type('0123123')
    cy.get('#open-text-area')
      .type('someText', { delay: 0 })
    cy.contains('button', 'Send')
      .click()
});

Cypress.Commands.add('fillMandatoryFieldsAndSubmitManual', (data) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#phone').type(data.phone)
    cy.get('#open-text-area').type(data.textArea)
    cy.contains('button', 'Send').click()
});

Cypress.Commands.add('fillMandatoryFieldsAndSubmitManualwithDefault', (data1 = {
    firstName: 'joe',
    lastName: 'doe',
    email: 'jd@mail.tes',
    phone: '9999',
    textArea: 'doe comment'
}) => {
    cy.get('#firstName').type(data1.firstName)
    cy.get('#lastName').type(data1.lastName)
    cy.get('#email').type(data1.email)
    cy.get('#phone').type(data1.phone)
    cy.get('#open-text-area').type(data1.textArea)
    cy.contains('button', 'Send').click()
});