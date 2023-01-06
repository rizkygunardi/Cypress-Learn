/// <reference types="cypress" />

describe("Tugas command", () => {
  beforeEach;
  it("Mengecek website", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });

  it("Memasukkan akun", () => {
    cy.fixture("user").then((user) => {
      cy.visit("http://zero.webappsecurity.com/login.html");
      const username = user.username;
      const password = user.password;

      cy.login(username, password);

      cy.get("#user_remember_me").click();
      cy.get(".form-actions").click();

      //Masuk kehalaman pay bills
      cy.get("#pay_bills_tab").click();

      // //mengisi form
      cy.form();

      // //klik pay
      cy.get("#pay_saved_payees").click();
    });
  });
  //it("Masuk ke halaman pay bills", () => {});
  //it("Mengisi form", () => {});
  //it("klik pay", () => {})
});
