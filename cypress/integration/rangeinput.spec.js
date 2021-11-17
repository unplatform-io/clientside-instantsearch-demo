describe("Range input search", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("Empty page", () => {
        cy.get(".hit-name").eq(0).contains("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops");
        cy.get(".ais-Stats-text").contains(20);
    });

    it("Range input price", () => {
        cy.get(".ais-RangeInput-input--min").eq(0).type(10);
        cy.get(".ais-RangeInput-input--max").eq(0).type(50);
        cy.get(".ais-RangeInput-submit").eq(0).click();

        cy.get(".hit-name").eq(0).contains("Mens Casual Premium Slim Fit T-Shirts");
        cy.get(".ais-Stats-text").contains(6);
    });

    it("Range input search && price && id ", () => {
        cy.get(".ais-RangeInput-input--min").eq(0).type(25);
        cy.get(".ais-RangeInput-input--max").eq(0).type(500);
        cy.get(".ais-RangeInput-submit").eq(0).click();

        cy.get(".ais-SearchBox-input").type('gold');
        cy.get(".hit-name").eq(0).contains("Solid Gold Petite Micropave");
        cy.get(".ais-Stats-text").contains(1);
    });
});
