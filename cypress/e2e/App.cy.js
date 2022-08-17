/// <reference types="Cypress" />

describe("should render app", () => {
  it("It should visit app home", () => {
    cy.visit("http://localhost:3001");
    cy.get("[data-cy=search-input]").should("be.visible");
  });
  it("It should visit page and type Car", () => {
    cy.visit("http://localhost:3001");
    cy.get("[data-cy=search-input]")
      .should("be.visible")
      .type("Car")
      .should("have.value", "Car");
  });

  it("It should visit page and type Sydney", () => {
    cy.visit("http://localhost:3001");
    cy.get("[data-cy=search-input]")
      .should("be.visible")
      .type("sydney")
      .should("have.value", "sydney");
  });
  it("It should visit page and type Brisbane", () => {
    cy.visit("http://localhost:3001");
    cy.get("[data-cy=search-input]")
      .should("be.visible")
      .type("brisbane")
      .should("have.value", "brisbane");
  });
  it("It should visit page and type Flight", () => {
    cy.visit("http://localhost:3001");
    cy.get("[data-cy=search-input]")
      .should("be.visible")
      .type("flight").click()
      .should("have.value", "flight");
  });
});
