describe('Get User List', () => {
	it('Get request', () => {
		cy.request({
			method: 'GET',
			url: 'https://reqres.in/api/users?page=2&per_page=1&delay=3',
		}).as('users')
		cy.get('@users').its('status').should('equal', 200)
	})
})
