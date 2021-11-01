describe("9_search_filtering_author", () => {
  it("Navigate_home", () => {
    cy.visit("http://localhost:1234");
    cy.get(".main__titleheading1").should("be.visible");
  });
  it("Fill_search_field_check_value", () => {
    cy.get(".header__input").type("Rowling").should("have.value", "Rowling");
  });
  it("Submit_search_validate_redirect_filtered", () => {
    cy.get(".header__searchbtn").click();
    cy.wait(300).url().should("include", "filtered");
    cy.get(".clear__button").should("be.visible");
  });
  it("Validate_filtered_results", () => {
    cy.get(".grid__author").contains("Rowling").should("exist");
  });
});
