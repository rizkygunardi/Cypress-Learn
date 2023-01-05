/// <reference types="cypress" />

describe("Tugas command", () => {
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

      //mengisi halaman payment
      cy.get(".sp_payee").click();

      //mengisi form
      cy.get('[type="radio"]').check("Apple");
      cy.get(".sp_account").type("radio").check("Savings");
      cy.get('input[name="amount"]').type("5000");
      cy.get('input[name="date"]').type("2023-08-09");
      cy.get('input[name="description"]').type("-");

      //klik pay
      cy.get(".pay_saved_payees").click();
    });
  });
  //it("Masuk ke halaman pay bills", () => {});
  //it("Mengisi payment", () => {});
});
