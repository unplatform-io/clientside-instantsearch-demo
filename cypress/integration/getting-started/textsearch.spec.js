describe("text search", () => {
  it("text search", () => {
    cy.visit("http://localhost:3000");
    cy.get(".ais-SearchBox-input").first().type("gold");
    cy.contains("Solid Gold Petite Micropave");
  });
});
