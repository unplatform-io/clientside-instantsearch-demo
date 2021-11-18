describe("facet search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("check per page", () => {
    cy.get(".right-column").should("contain", "id: 10");
    cy.get(".right-column").should("not.contain", "id: 11");
    cy.get(".ais-HitsPerPage-select").first().select("Show 15 hits");
    cy.get(".right-column").should("contain", "id: 15");
    cy.get(".right-column").should("not.contain", "id: 16");
  });

  it("check page", () => {
    cy.get(".right-column").should("contain", "id: 10");
    cy.get(".right-column").should("not.contain", "id: 11");
    cy.get(".ais-Pagination-item--nextPage").first().click();
    cy.get(".right-column").should("not.contain", "id: 10");
    cy.get(".right-column").should("contain", "id: 11");
  });
});
