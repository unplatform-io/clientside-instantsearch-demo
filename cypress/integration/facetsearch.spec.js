describe("facet search", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("RefinementList", () => {
    cy.get(".right-column").should(
      "contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    cy.get(".ais-HierarchicalMenu").first().contains("jewelery").click();
    cy.get(".right-column").should(
      "not.contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    cy.get(".right-column").should(
      "contain",
      "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet"
    );
    cy.get(".ais-HierarchicalMenu").first().contains("jewelery").click();
    cy.get(".right-column").should(
      "contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
  });

  it("MenuSelect", () => {
    cy.get(".right-column").should("contain", "Mens Cotton Jacket");
    cy.get(".ais-MenuSelect-select").first().select("Blue");
    cy.get(".right-column").should("not.contain", "Mens Cotton Jacket");
    cy.get(".right-column").should(
      "contain",
      "Mens Casual Premium Slim Fit T-Shirts"
    );
    cy.get(".ais-MenuSelect-select").first().select("ais__see__all__option");
    cy.get(".right-column").should("contain", "Mens Cotton Jacket");
  });

  it("RefinementList & MenuSelect", () => {
    cy.get(".right-column").should(
      "contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    cy.get(".ais-HierarchicalMenu").first().contains("electronics").click();
    cy.get(".right-column").should(
      "not.contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    cy.get(".right-column").should(
      "contain",
      "WD 2TB Elements Portable External Hard Drive - USB 3.0"
    );
    cy.get(".ais-MenuSelect-select").first().select("Red");
    cy.get(".right-column").should(
      "not.contain",
      "WD 2TB Elements Portable External Hard Drive - USB 3.0"
    );
    cy.get(".right-column").should(
      "contain",
      "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s"
    );
    cy.get(".ais-HierarchicalMenu").first().contains("electronics").click();
    cy.get(".right-column").should(
      "not.contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
    cy.get(".right-column").should("contain", "Mens Cotton Jacket");
    cy.get(".ais-MenuSelect-select").first().select("ais__see__all__option");
    cy.get(".right-column").should(
      "contain",
      "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
    );
  });

  it("ToggleRefinement", () => {
    cy.get(".ais-Stats-text").contains(20);

    cy.get(".right-column").should("contain", "In Stock: No");

    cy.get(".ais-ToggleRefinement-checkbox").click({
      force: true
    });

    cy.get(".right-column").should("not.contain", "In Stock: No");
    cy.get(".right-column").should("contain", "In Stock: Yes");

    cy.get(".ais-Stats-text").contains(14);
  });

  it("CurrentRefinements", () => {
    cy.get(".ais-HierarchicalMenu").first().contains("jewelery").click();
    cy.get(".ais-CurrentRefinements").should("contain", "jewelery");
    cy.get(".ais-CurrentRefinements").should("not.contain", "Blue");
    cy.get(".ais-MenuSelect-select").first().select("Blue");
    cy.get(".ais-CurrentRefinements").should("contain", "jewelery");
    cy.get(".ais-CurrentRefinements").should("contain", "Blue");
    cy.get(".ais-CurrentRefinements-delete").first().click();
    cy.get(".ais-CurrentRefinements").should("not.contain", "jewelery");
    cy.get(".ais-CurrentRefinements").should("contain", "Blue");
    cy.get(".ais-MenuSelect-select").first().select("ais__see__all__option");
    cy.get(".ais-CurrentRefinements").should("not.contain", "jewelery");
    cy.get(".ais-CurrentRefinements").should("not.contain", "Blue");
  });
});
