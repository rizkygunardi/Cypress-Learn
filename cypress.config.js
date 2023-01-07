const { defineConfig } = require('cypress')

module.exports = defineConfig({
	projectId: 'p9jc4h',
	e2e: {
		chromeWebSecurity: false,
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},
	},
})
