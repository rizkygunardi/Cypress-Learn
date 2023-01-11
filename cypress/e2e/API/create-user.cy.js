describe('Post pada API', () => {
	it('Add a new user', () => {
		var user = {
			name: 'Rizky Gunardi',
			job: 'Quality Assurance',
		}
		cy.request('POST', 'https:reqres.in/api/users', user).then(
			(response) => {
				expect(response.status).equal(201)
				expect(user.name).equal('Rizky Gunardi')
				expect(user.job).equal('Quality Assurance')
			}
		)
	})
})
