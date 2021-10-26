describe("7_validate_delete_book", () => {
    it("Navigate_bookdetails_130_test_book", () => {
      cy.visit("http://localhost:1234/bookdetails/130");
      cy.get(".book__title").should("contain", "Edit Book");
    });
    it("Correct_book_check_exists", () => {
      cy.get(".book__title", { timeout: 1000 })
        .contains("Edit Book")
        .should("exist");
    });
    it("Book_delete_redirect_to_bookshelf", () => {
      cy.get(".delete__button").click();
      cy.url().should("include", "bookshelf");
      cy.get(".main__title").should("be.visible");
    });
    it("Check_page_for_deleted_book", () => {
      cy.get(".grid__title", { timeout: 10000 })
        .contains("Edit Book")
        .should("not.exist");
    });
  });