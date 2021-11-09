describe("Range input search", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
    });

    it("Empty page", () => {
        cy.get(".ais-Stats-text").contains(20)
        cy.get(".hit-name").eq(0).contains("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    });

    it("Range input price", () => {
        cy.get(".ais-RangeInput-input--min").eq(0).type(10)
        cy.get(".ais-RangeInput-input--max").eq(0).type(50)
        cy.get(".ais-RangeInput-submit").eq(0).click()

        cy.get(".hit-name").eq(0).contains("Mens Casual Premium Slim Fit T-Shirts")
        cy.get(".ais-Stats-text").contains(6)
    });

    it("Range input price && id", () => {
        cy.get(".ais-RangeInput-input--min").eq(0).type(10)
        cy.get(".ais-RangeInput-input--max").eq(0).type(50)
        cy.get(".ais-RangeInput-submit").eq(0).click()


        cy.get(".ais-RangeInput-input--min").eq(1).type(5)
        cy.get(".ais-RangeInput-input--max").eq(1).type(10)
        cy.get(".ais-RangeInput-submit").eq(1).click()

        cy.get(".hit-name").eq(0).contains("Pierced Owl Rose Gold Plated Stainless Steel Double")
        cy.get(".ais-Stats-text").contains(1)
    });

    it("Range input search && price && id ", () => {
        cy.get(".ais-RangeInput-input--min").eq(0).type(25)
        cy.get(".ais-RangeInput-input--max").eq(0).type(500)
        cy.get(".ais-RangeInput-submit").eq(0).click()


        cy.get(".ais-RangeInput-input--min").eq(1).type(5)
        cy.get(".ais-RangeInput-input--max").eq(1).type(10)
        cy.get(".ais-RangeInput-submit").eq(1).click()

        cy.get(".ais-SearchBox-input").type('gold')
        cy.get(".hit-name").eq(0).contains("Solid Gold Petite Micropave")
        cy.get(".ais-Stats-text").contains(1)
    });
});
