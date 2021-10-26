describe("2_validate_Title_Link_To_Home", () => {
    it("Navigate_bookshelf", () => {
      cy.visit("http://localhost:1234/bookshelf");
      cy.url().should("include", "bookshelf");
      cy.get(".main__title").should("be.visible");
    });
    it("Bookshelf__Click__Title__Link", () => {
      cy.get(".header__title").click();
      cy.url().should("eq", "http://localhost:1234/");
      cy.get(".main__titleheading1").should("be.visible");
    });
  });