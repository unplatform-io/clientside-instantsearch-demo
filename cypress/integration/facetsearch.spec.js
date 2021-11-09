describe("facet search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("(de)select refinementList and see result", () => {
    cy.get(".right-column").should(
      "contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    cy.get(".ais-RefinementList").first().contains("jewelery").click();
    cy.get(".right-column").should(
      "not.contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    cy.get(".right-column").should(
      "contain",
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
    );
    cy.get(".ais-RefinementList").first().contains("jewelery").click();
    cy.get(".right-column").should(
      "contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
  });

  it("(de)select MenuSelect and see result", () => {
    cy.get(".right-column").should("contain", "Mens Cotton Jacket");
    cy.get(".ais-MenuSelect-select").first().select("blue");
    cy.get(".right-column").should("not.contain", "Mens Cotton Jacket");
    cy.get(".right-column").should(
      "contain",
      "Mens Casual Premium Slim Fit T-Shirts"
    );
    cy.get(".ais-MenuSelect-select").first().select("ais__see__all__option");
    cy.get(".right-column").should("contain", "Mens Cotton Jacket");
  });

  it("(de)select mutiple facets and see result", () => {
    cy.get(".right-column").should(
      "contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    cy.get(".ais-RefinementList").first().contains("jewelery").click();
    cy.get(".right-column").should(
      "not.contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    cy.get(".right-column").should(
      "contain",
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
    );
    cy.get(".ais-MenuSelect-select").first().select("blue");
    cy.get(".right-column").should(
      "not.contain",
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
    );
    cy.get(".right-column").should("contain", "Solid Gold Petite Micropave");
    cy.get(".ais-RefinementList").first().contains("jewelery").click();
    cy.get(".right-column").should(
      "contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    cy.get(".right-column").should("not.contain", "Mens Cotton Jacket");
    cy.get(".ais-MenuSelect-select").first().select("ais__see__all__option");
    cy.get(".right-column").should("contain", "Mens Cotton Jacket");
  });

  it("check CurrentRefinements", () => {
    cy.get(".ais-RefinementList").first().contains("jewelery").click();
    cy.get(".ais-CurrentRefinements").should("contain", "jewelery");
    cy.get(".ais-CurrentRefinements").should("not.contain", "blue");
    cy.get(".ais-MenuSelect-select").first().select("blue");
    cy.get(".ais-CurrentRefinements").should("contain", "jewelery");
    cy.get(".ais-CurrentRefinements").should("contain", "blue");
    cy.get(".ais-CurrentRefinements-delete").first().click();
    cy.get(".ais-CurrentRefinements").should("not.contain", "jewelery");
    cy.get(".ais-CurrentRefinements").should("contain", "blue");
    cy.get(".ais-MenuSelect-select").first().select("ais__see__all__option");
    cy.get(".ais-CurrentRefinements").should("not.contain", "jewelery");
    cy.get(".ais-CurrentRefinements").should("not.contain", "blue");
  });
});
