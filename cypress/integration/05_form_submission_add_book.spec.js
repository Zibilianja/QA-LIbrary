describe("5_form_submission_add_book", () => {
    it("Navigate_to_addbook_page", () => {
      cy.visit("http://localhost:1234/addbook");
      cy.url().should("include", "addbook");
      cy.get(".addbook__title").contains("Add Book");
    });
    it("Fill_title_check_value", () => {
      cy.wait(300)
        .get(".form__title")
        .type("Good Book")
        .should("have.value", "Good Book");
    });
    it("Fill_author_check_value", () => {
      cy.get(".form__author")
        .type("Author Author")
        .should("have.value", "Author Author");
    });
    it("Fill_synopsis_check_value", () => {
      cy.get(".form__synopsis")
        .type(
          "This is the best book I have ever read.This is the best book I have ever read.This is the best book I have ever read."
        )
        .should(
          "have.value",
          "This is the best book I have ever read.This is the best book I have ever read.This is the best book I have ever read."
        );
    });
    it("Fill_published_check_value", () => {
      cy.get(".form__published")
        .type("2021-10-26")
        .should("have.value", "2021-10-26");
    });
    it("Fill_pages_check_value", () => {
      cy.get(".form__pages").type("1234").should("have.value", "1234");
    });
    it("Fill_rating_check_value", () => {
      cy.get(".rating__3").click();
      cy.get(".radio__3").should("be.checked");
    });
    it("Submit_form_redirect_bookshelf", () => {
      cy.get(".submit__button").click();
      cy.wait(300).url().should("include", "bookshelf");
      cy.get(".main__title").should("be.visible");
    });
    it("Check_test_book_exists", () => {
      cy.get(".grid__title", { timeout: 10000 })
        .contains("Good Book")
        .should("exist");
    });
  });