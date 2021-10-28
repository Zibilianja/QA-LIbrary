describe("10_clear_search_button", () => {
    it("Navigate_filtered_books", () => {
      cy.visit("http://localhost:1234/filtered/Prisoner");
      cy.get(".clear__button").should("be.visible");
    });
    it("Clear_search_redirect_bookshelf", () => {
      cy.get(".clear__button").click();
      cy.url().should("include", "bookshelf");
    });
    it("Check_books_include_all", () => {
      cy.get(".grid__title").contains("Stone").should("exist");
      cy.get(".grid__title").contains("Chamber").should("exist");
      cy.get(".grid__title").contains("Prisoner").should("exist");
      cy.get(".grid__title").contains("Goblet").should("exist");
      cy.get(".grid__title").contains("Phoenix").should("exist");
      cy.get(".grid__title").contains("Prince").should("exist");
      cy.get(".grid__title").contains("Hallows").should("exist");
    });
  });