describe("3_validate_addbook_link", () => {
  it("Navigate_home", () => {
    cy.visit("http://localhost:1234");
    cy.get(".main__titleheading1").should("be.visible");
  });
  it("Redirect_home_to_addbook", () => {
    cy.get(".header--addbook").click();
    cy.url().should("include", "addbook");
    cy.get(".addbook__title").contains("Add Book");
  });
  it("Navigate_bookshelf", () => {
    cy.visit("http://localhost:1234/bookshelf");
    cy.url().should("include", "bookshelf");
    cy.get(".main__title").should("be.visible");
  });
  it("Redirect_bookshelf_to_addbook", () => {
    cy.get(".header--addbook").click();
    cy.url().should("include", "addbook");
    cy.get(".addbook__title").contains("Add Book");
  });
  it("Navigate_editbook", () => {
    cy.visit("http://localhost:1234/editbook/126");
    cy.get(".edit__title").contains("Edit Book").should("be.visible");
  });
  it("Redirect_edit_to_addbook", () => {
    cy.get(".header--addbook").click();
    cy.url().should("include", "addbook");
    cy.get(".addbook__title").contains("Add Book").should("be.visible");
  });
});
