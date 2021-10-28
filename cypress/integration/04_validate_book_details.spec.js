describe("4_validate_book_details", () => {
  it("Navigate_to_bookshelf", () => {
    cy.visit("http://localhost:1234/bookshelf");
    cy.url().should("include", "bookshelf");
  });
  it("Click_on_book_1", () => {
    cy.wait(500).get(".grid__title").contains("Chamber").click();
    cy.url().should("include", "details");
  });
  it("Check_book", () => {
    cy.wait(500).get(".book__title").should("contain", "Chamber");
  });
});
