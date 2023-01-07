/// <reference types="cypress" />

describe('My First Test', () => {
	it('visit in to ZeroBank', () => {
		cy.visit('http://zero.webappsecurity.com/login.html')

		cy.get('#user_login').type('username')
		cy.get('#user_password').type('password')

		cy.get('input[name="submit"]').click()
		cy.wait(500)

		cy.get('h2').should('have Text', 'Make payments to your saved payees')
		cy.get('#pay_bills_tab.active').click()
	})
})
