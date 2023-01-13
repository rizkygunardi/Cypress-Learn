/// <reference types="cypress" />

describe('Validate Header', () => {
	it('Successfully validate header', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
		cy.get('@pokemon')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json; charset=utf-8')
	})
	it('Successfully assert body', () => {
		cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').as('pika')
		cy.get('@pika')
			.its('body.abilities[0].ability.name')
			.should('equal', 'limber')
		cy.get('@pika').its('body.forms[0].name').should('equal', 'ditto')
	})
})
