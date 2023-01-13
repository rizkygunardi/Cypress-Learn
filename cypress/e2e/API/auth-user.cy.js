/// <reference types="cypress" />

describe('Successfully Authorization', () => {
	it('Successfully use username and password ', () => {
		cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
		cy.get('p').should(
			'include.text',
			'Congratulations! You must have the proper credentials.'
		)
	})

	it('Successfully login using header', () => {
		cy.visit('https://the-internet.herokuapp.com/basic_auth', {
			headers: {
				authorization: 'Basic YWRtaW46YWRtaW4=',
			},
			failOnStatusCode: false,
		})
		cy.get('p')
			.should(
				'include.text',
				'Congratulations! You must have the proper credentials.'
			)
			.should('c')
	})

	it('successfully logs in via GUI', () => {
		cy.loginViaAPI()
	})
})
