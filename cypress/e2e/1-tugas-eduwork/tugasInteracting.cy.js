/// <reference types="cypress" />

describe("Browser Action", () => {
  //   beforeEach(() => {
  //     cy.visit("http://zero.webappsecurity.com/login.html");
  //   });

  it("Visit the website", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");

    //memasukkan username
    cy.get("#user_login").clear();
    cy.get("#user_login").type("username");

    //memasukkan password
    cy.get('input[name="user_password"]').clear();
    cy.get('input[name="user_password"]').type("password");

    //click keep me signed in
    cy.get("#user_remember_me").click();
  });
});
