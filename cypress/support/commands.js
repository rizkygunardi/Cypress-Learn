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

Cypress.Commands.add('login', (username, password) => {
	cy.get('#user_login').clear()
	cy.get('#user_login').type(username)

	cy.get('input[name="user_password"]').clear()
	cy.get('input[name="user_password"]').type(password)
})

Cypress.Commands.add('form', () => {
	cy.get('#sp_payee').select('Apple')
	cy.get('#sp_account').select('Loan')
	cy.get('#sp_amount').type(5000)
	cy.get('#sp_date').type('2023 - 05 - 23')
	cy.get('.ui-datepicker-current-day > .ui-state-default').click()
	cy.get('#sp_description').type('isi apaan ini')
})

Cypress.Commands.add('searchZero', () => {
	cy.get('#searchTerm').type('zero {enter}')
	cy.get('h2').contains('Search Results:')
})
