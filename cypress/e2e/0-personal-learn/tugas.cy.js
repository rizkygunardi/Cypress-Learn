/// <reference types="cypress" />

describe("Tugas", () => {
  it('clicking "type shows the right headings', () => {
    cy.visit("https://example.cypress.io");
    cy.pause();
    cy.contains("type").click();

    cy.url().should("include", "commands/actions");

    cy.get(".action-email")
      .type("iniemailku@email.com")
      .should("have.value", "iniemailku@email.com");
  });
});
