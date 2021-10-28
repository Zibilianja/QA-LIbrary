describe(
    "12_mobile_search_bar",
    {
      viewportHeight: 1000,
      viewportWidth: 340,
    },
    () => {
      it("Navigate_bookshelf", () => {
        cy.visit("http://localhost:1234/bookshelf");
        cy.get(".main__searchwrapper").should("be.visible");
      });
      it("Enter_query", () => {
        cy.get(".main__search").type("Chamber").should("have.value", "Chamber");
      });
      it("Submit_search", () => {
        cy.get(".main__searchimg").click();
        cy.url().should("contain", "filtered");
        cy.get(".clear__button").should("be.visible");
      });
      it("Validate_search_results", () => {
        cy.get(".grid__title").contains("Chamber").should("exist");
        cy.get(".grid__title").contains("Stone").should("not.exist");
      });
    }
  );