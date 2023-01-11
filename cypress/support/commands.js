Cypress.Commands.add('login', (username, password) => {
	cy.get('#user_login').clear()
	cy.get('#user_login').type(username)

	cy.get('input[name="user_password"]').clear()
	cy.get('input[name="user_password"]').type(password)
})

Cypress.Commands.add('invalidLogin', () => {
	cy.get('#login_form').should('be.visible')
	cy.get('input[name="user_login"]').type('invalid username')
	cy.get('input[name="user_password"]').type('invalid password')
	cy.contains('Sign in').click()
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

Cypress.Commands.add('logout', () => {
	cy.get('button').contains('Open Menu').click()
	cy.get('a').contains('Logout').click()
	cy.get('.login_logo').should('be.visible')
})

Cypress.Commands.add('signin', () => {
	cy.visit('http://zero.webappsecurity.com/login.html')
	cy.get('#user_login').type('username')
	cy.get('#user_password').type('password')
	cy.get('#user_remember_me').click()
	cy.get('input[name="submit"]').click()
	cy.get('#pay_bills_tab').click()
})
