describe("Pagination", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("check per page", () => {
    cy.get(".right-column").should("contain", "Product number: 10");
    cy.get(".right-column").should("not.contain", "Product number: 11");
    cy.get(".ais-HitsPerPage-select").first().select("Show 15 hits");
    cy.get(".right-column").should("contain", "Product number: 15");
    cy.get(".right-column").should("not.contain", "Product number: 16");
  });

  it("check page", () => {
    cy.get(".right-column").should("contain", "Product number: 10");
    cy.get(".right-column").should("not.contain", "Product number: 11");
    cy.get(".ais-Pagination-item--nextPage").first().click();
    cy.get(".right-column").should("not.contain", "Product number: 10");
    cy.get(".right-column").should("contain", "Product number: 11");
  });
});
