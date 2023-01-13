/// <reference types="cypress" />

describe('Validate Header', () => {
	it('Successfully validate header', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as('pokemon')
		cy.get('@pokemon')
			.its('headers')
			.its('content-type')
			.should('include', 'application/json; charset=utf-8')
	})

	//tugas Header
	it('Successfully assert body', () => {
		cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').as('pika')
		cy.get('@pika')
			.its('body.abilities[0].ability.name')
			.should('equal', 'limber')
		cy.get('@pika').its('body.forms[0].name').should('equal', 'ditto')
	})

	it('Successfully validate with params', () => {
		cy.request({
			method: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/ditto',
		}).as('salamander')
		cy.get('@salamander').its('status').should('equal', 200)
	})

	it('Successfully validate with content', () => {
		cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as(
			'bulbasaur'
		)
		cy.get('@bulbasaur')
			.its('body')
			.should('include', { name: 'bulbasaur' })
	})

	//TUGAS VALIDATE CONTENT
	it('Successfully assert body', () => {
		cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then(
			(response) => {
				expect(response.body.abilities[0].ability.name).to.eq('limber')
				expect(response.body.abilities[0].ability.url).to.eq(
					'https://pokeapi.co/api/v2/ability/7/'
				)
			}
		)
	})
})
