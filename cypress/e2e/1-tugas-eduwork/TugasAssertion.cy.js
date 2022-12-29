/// <reference types="cypress" />

describe("Tugas Assertion", () => {
  it('clicking "type" shows the right headings', () => {
    cy.visit("https://example.cypress.io");

    cy.pause();

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");

    cy.get(".action-email")
      .type("emailku@email.com")
      .should("have.value", "emailku@email.com");
  });
});
