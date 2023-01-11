/// <reference types="cypress" />

describe('Tugas Login', () => {
	// beforeEach(() => {
	// 	cy.visit('https://saucedemo.com')
	// 	cy.url().should('include', 'saucedemo.com')
	// })

	it('Mengecek halaman website', () => {
		cy.visit('https://saucedemo.com')
		cy.url().should('include', 'saucedemo.com')
	})

	it('Mengecek field email (NORMAL)', () => {
		//cy.visit('https://www.saucedemo.com')
		cy.fixture('data').then((data) => {
			const username = data.username
			const password = data.password

			//memasukkan username dan password
			cy.get('#user-name').type(username[0])
			cy.get('#password').type(password)

			//login
			cy.get('#login-button').click()
			cy.wait(2000)

			//logout
			cy.get('button').contains('Open Menu').click()
			cy.get('a').contains('Logout').click()
		})
	})

	it('Mengecek field email (ERROR)', () => {
		//cy.visit('https://www.saucedemo.com')
		cy.fixture('data').then((data) => {
			const username = data.username
			const password = data.password

			//memasukkan username dan password
			cy.get('#user-name').type(username[1])
			cy.get('#password').type(password)

			//login
			cy.get('#login-button').click()
			cy.wait(1000)

			cy.get('h3').contains(
				'Epic sadface: Sorry, this user has been locked out.'
			)
			cy.get('.error-button').click()
			cy.get('#user-name').clear()
			cy.get('#password').clear()
		})
	})

	it('Mengecek field email (PROBLEM)', () => {
		//cy.visit('https://www.saucedemo.com')
		cy.fixture('data').then((data) => {
			const username = data.username
			const password = data.password

			//memasukkan username dan password
			cy.get('#user-name').type(username[2])
			cy.get('#password').type(password)

			//login
			cy.get('#login-button').click()
			cy.wait(2000)
			cy.get('#item_4_img_link').click()
			cy.get('.inventory_details_img_container')

			//logout
			cy.get('button').contains('Open Menu').click()
			cy.get('a').contains('Logout').click()
		})
	})

	it('Mengecek field email (GLITCH)', () => {
		//cy.visit('https://www.saucedemo.com')
		cy.fixture('data').then((data) => {
			const username = data.username
			const password = data.password

			//memasukkan username dan password
			cy.get('#user-name').type(username[3])
			cy.get('#password').type(password)

			//login
			cy.get('#login-button').click()

			//logout
			cy.get('button').contains('Open Menu').click()
			cy.get('a').contains('Logout').click()
		})
	})
})
