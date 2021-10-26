describe("6_form_submission_edit_book", () => {
    it("Navigate_to_edit_page", () => {
      cy.visit("http://localhost:1234/editbook/130");
      cy.url().should("include", "editbook");
      cy.get(".edit__title").contains("Edit Book");
    });
    it("Edit_title_check_value", () => {
      cy.wait(300)
        .get(".form__title")
        .type("{selectall} {backspace}")
        .type("Edit Book")
        .should("have.value", "Edit Book");
    });
    it("Fill_author_check_value", () => {
      cy.get(".form__author")
        .type("{selectall} {backspace}")
        .type("Edit Author")
        .should("have.value", "Edit Author");
    });
    it("Fill_synopsis_check_value", () => {
      cy.get(".form__synopsis")
        .type("{selectall} {backspace}")
        .type("Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis")
        .should(
          "have.value",
          "Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis"
        );
    });
    it("Fill_published_check_value", () => {
      cy.get(".form__published")
        .type("2000-01-01")
        .should("have.value", "2000-01-01");
    });
    it("Fill_pages_check_value", () => {
      cy.get(".form__pages")
        .type("{selectall} {backspace}")
        .type("4321")
        .should("have.value", "4321");
    });
    it("Fill_rating_check_value", () => {
      cy.get(".rating__5").click();
      cy.get(".radio__5").should("be.checked");
    });
    it("Submit_form_redirect_bookshelf", () => {
      cy.get(".submit__button").click();
      cy.wait(300).url().should("include", "bookshelf");
      cy.get(".main__title").should("be.visible");
    });
    it("Check_test_book_exists", () => {
      cy.get(".grid__title", { timeout: 10000 })
        .contains("Edit Book")
        .should("exist");
    });
  });