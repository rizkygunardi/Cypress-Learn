/// <reference types="cypress" />
Cypress.config('experimentalSessionSupport', true)

Cypress.session.clearAllSavedSessions()

describe('Browser Action', () => {
	// beforeEach(() => {
	//   cy.visit("https://books.toscrape.com/index.html");
	// });

	it('Should load books website', () => {
		cy.visit('https://books.toscrape.com/index.html', { timeout: 10000 })
		cy.url().should('include', 'index.html')
	})

	it('should click on travel category', () => {
		cy.get('a').contains('Travel').click()
		cy.get('h1').contains('Travel')
	})
})
