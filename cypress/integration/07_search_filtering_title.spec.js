describe("8_search_filtering_title", () => {
    it("Navigate_home", () => {
      cy.visit("http://localhost:1234");
      cy.get(".main__titleheading1").should("be.visible");
    });
    it("Fill_search_field_check_value", () => {
      cy.get(".header__input").type("Chamber").should("have.value", "Chamber");
    });
    it("Submit_search_validate_redirect_filtered", () => {
      cy.get(".header__searchbtn").click();
      cy.wait(300).url().should("include", "filtered");
      cy.get(".clear__button").should("be.visible");
    });
    it("Validate_filtered_results", () => {
      cy.get(".grid__title").contains("Chamber").should("exist");
      cy.get(".grid__title").contains("Hallows").should("not.exist");
      cy.get(".grid__title").contains("Stone").should("not.exist");
    });
  });