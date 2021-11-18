describe("Text search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("serach and see result", () => {
    cy.get(".ais-SearchBox-input").first().type("gold");
    cy.contains("Solid Gold Petite Micropave");
  });

  it("search and see no result", () => {
    cy.get(".ais-SearchBox-input").first().type("goldd");
    cy.get(".right-column");
    cy.should("not.contain", "Solid Gold Petite Micropave");
  });

  it("check placeholder", () => {
    cy.get(".ais-SearchBox-input")
      .first()
      .should("have.attr", "placeholder", "Search for products");
  });
});
