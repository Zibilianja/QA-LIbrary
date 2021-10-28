describe("5_End_to_end_CRUD", () => {
    
  //ADD ADD ADD

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

  //click to book from bookshelf
  //EDIT EDIT EDIT

  it("Navigate_to_bookshelf", () => {
    cy.visit("http://localhost:1234/bookshelf");
    cy.url().should("include", "bookshelf");
    cy.get(".main__title").contains("Kraken").should("be.visible");
  });
  it("Click_book_to_details", () => {
    cy.get(".grid__title").contains("Good Book").click();
    cy.wait(200).url().should("includes", "bookdetails");
    cy.get(".book__title").should("contain", "Good Book");
  });
  it("Click_edit_book", () => {
    cy.get(".main__button").contains("Edit This Book").click();
    cy.get(".edit__title").should("contain", "Edit Book");
    //   cy.wait(550).get(".form_title").should("contain", "Good Book")
    // Trying to check initial value of the title in order to confirm book details populate form correctly - not working
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

  //DELETE DELETE DELETE

  it("Navigate_to_bookshelf", () => {
    cy.visit("http://localhost:1234/bookshelf");
    cy.url().should("include", "bookshelf");
    cy.get(".main__title").contains("Kraken").should("be.visible");
  });
  it("Click_book_to_details_check_book", () => {
    cy.get(".grid__title").contains("Edit Book").click();
    cy.wait(200).url().should("includes", "bookdetails");
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
