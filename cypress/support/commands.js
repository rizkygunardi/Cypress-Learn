// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.clearAllCookies();
  cy.clearAllLocalStorage();

  cy.get("#user_login").clear();
  cy.get("#user_login").type(username);

  cy.get('input[name="user_password"]').clear();
  cy.get('input[name="user_password"]').type(password);
});

Cypress.Commands.add("form", () => {
  cy.get('[type="radio"]').check("Apple");
  cy.get(".sp_account").type("radio").check("Savings");
  cy.get('input[name="amount"]').type("5000");
  cy.get('input[name="date"]').type("2023-08-09");
  cy.get('input[name="description"]').type("-");
  cy.get(".pay_saved_payees").click();
});
