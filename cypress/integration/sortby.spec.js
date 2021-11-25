describe("SortBy", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Empty page", () => {
    cy.get(".hit-name")
      .eq(0)
      .contains("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
    cy.get(".ais-Stats-text").contains(20);
  });

  it("Select price from high to low", () => {
    cy.get(".ais-SortBy-select")
      .select("Price, high to low")
      .should("have.value", "price_desc");
    cy.get(".hit-price").eq(0).contains("€ 999.99");
  });

  it("Select price low to high", () => {
    cy.get(".ais-SortBy-select")
      .select("Price, low to high")
      .should("have.value", "price_asc");
    cy.get(".hit-price").eq(0).contains("€ 7.95");
  });

  it("Select rating high to low with text seach", () => {
    cy.get(".ais-SortBy-select")
      .select("Rating, high to low")
      .should("have.value", "rating.rate_desc");
    cy.get(".ais-SearchBox-input").eq(0).type("drive");

    cy.get(".hit-description").eq(0).contains("Rating: 3");
  });
});
