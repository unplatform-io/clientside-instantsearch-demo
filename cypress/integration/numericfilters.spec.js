describe("Numeric search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("See Results", () => {
    cy.get(".hit-name")
      .eq(0)
      .contains("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
    cy.get(".ais-Stats-text").contains(20);
  });

  it("Range input", () => {
    cy.get(".ais-Stats-text").contains(20);

    cy.get(".right-column").should("contain", "Delivery time: 2 days");
    cy.get(".right-column").should("contain", "Delivery time: 5 days");

    cy.get(".ais-RangeInput-input--min").eq(0).type(3);
    cy.get(".ais-RangeInput-input--max").eq(0).type(5);
    cy.get(".ais-RangeInput-submit").eq(0).click();

    cy.get(".right-column").should("not.contain", "Delivery time: 2 days");
    cy.get(".right-column").should("contain", "Delivery time: 3 days");
    cy.get(".right-column").should("contain", "Delivery time: 4 days");
    cy.get(".right-column").should("contain", "Delivery time: 5 days");
    cy.get(".right-column").should("not.contain", "Delivery time: 6 days");

    cy.get(".ais-Stats-text").contains(10);
  });

  it("RatingMenu", () => {
    cy.get(".ais-Stats-text").contains(20);

    cy.get(".right-column").should("contain", "Rating: 3");

    cy.get(".ais-RatingMenu-item").eq(1).click();

    cy.get(".right-column").should("not.contain", "Rating: 3");
    cy.get(".right-column").should("contain", "Rating: 4");

    cy.get(".ais-Stats-text").contains(10);
  });

  it("NumericMenu", () => {
    cy.get(".ais-Stats-text").contains(20);

    cy.get(".right-column").should("contain", "Amount of reviews: 9");

    cy.get(".ais-NumericMenu-item").eq(2).click();

    cy.get(".right-column").should("not.contain", "Amount of reviews: 9");
    cy.get(".right-column").should("contain", "Amount of reviews: 36");

    cy.get(".ais-Stats-text").contains(9);
  });
});
