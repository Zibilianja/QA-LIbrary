describe("1_validate_bookshelf_links", () => {
  it("Navigate_home", () => {
    cy.visit("http://localhost:1234");
    cy.get(".main__titleheading1").should("be.visible");
  });
  it("Home_Header_Nav_Link", () => {
    cy.get(".header--bookshelf").click();
    cy.url().should("include", "bookshelf");
    cy.get(".main__title").should("be.visible");
  });
  it("Navigate_home", () => {
    cy.visit("http://localhost:1234");
    cy.get(".main__titleheading1").should("be.visible");
  });
  it("Home_Main_Button", () => {
    cy.contains("See Books").click();
    cy.url().should("include", "bookshelf");
    cy.get(".main__title").should("be.visible");
  });
  it("Navigate_home", () => {
    cy.visit("http://localhost:1234");
    cy.get(".main__titleheading1").should("be.visible");
  });
  it("AddBook_Nav_Link", () => {
    cy.get(".header--bookshelf").click();
    cy.url().should("include", "bookshelf");
    cy.get(".main__title").should("be.visible");
  });
});
