import { BookShelf } from "../Page_Objects/bookshelf";
import { AddBook } from "../Page_Objects/addbook";
import { BookDetails } from "../Page_Objects/bookdetails";
import { EditBook } from "../Page_Objects/editbook";

describe("5_End_to_end_CRUD", () => {
  const bookshelf = new BookShelf();
  const addbook = new AddBook();
  const details = new BookDetails();
  const edit = new EditBook();
  //ADD ADD ADD

  it("Navigate_to_addbook_page", () => {
    addbook.navigate();
    cy.url().should("include", "addbook");
    addbook.getPageHeading().contains("Add Book");
  });
  it("Fill_title_check_value", () => {
    cy.wait(300);
    addbook.getTitleInput().type("Good Book").should("have.value", "Good Book");
  });
  it("Fill_author_check_value", () => {
    addbook
      .getAuthorInput()
      .type("Author Author")
      .should("have.value", "Author Author");
  });
  it("Fill_synopsis_check_value", () => {
    addbook
      .getSynopsisInput()
      .type(
        "This is the best book I have ever read.This is the best book I have ever read.This is the best book I have ever read."
      )
      .should(
        "have.value",
        "This is the best book I have ever read.This is the best book I have ever read.This is the best book I have ever read."
      );
  });
  it("Fill_published_check_value", () => {
    addbook
      .getPublishedInput()
      .type("2021-10-26")
      .should("have.value", "2021-10-26");
  });
  it("Fill_pages_check_value", () => {
    addbook.getPagesInput().type("1234").should("have.value", "1234");
  });
  it("Fill_rating_check_value", () => {
    addbook.getrating3().click();
    addbook.getRadio3().should("be.checked");
    addbook.getRadio5().should("not.be.checked");
    addbook.getRadio4().should("not.be.checked");
    addbook.getRadio2().should("not.be.checked");
    addbook.getRadio1().should("not.be.checked");
  });
  it("Submit_form_redirect_bookshelf", () => {
    addbook.getSubmitButton().click();
    cy.wait(300).url().should("include", "bookshelf");
    bookshelf.getMainTitle().should("be.visible");
  });
  it("Check_test_book_exists", () => {
    bookshelf.getGridTitle().contains("Good Book").should("exist");
  });

  //click to book from bookshelf
  //EDIT EDIT EDIT

  it("Navigate_to_bookshelf", () => {
    bookshelf.navigate();
    cy.url().should("include", "bookshelf");
    bookshelf.getMainTitle().contains("Kraken").should("be.visible");
  });
  it("Click_book_to_details", () => {
    bookshelf.getGridTitle().contains("Good Book").click();
    cy.wait(200).url().should("includes", "bookdetails");
    details.getBookTitle().should("contain", "Good Book");
  });
  it("Click_edit_book", () => {
    details.getEditButton().click();
    edit.getEditTitle().should("contain", "Edit Book");
    cy.wait(200).url().should("includes", "editbook");
  });

  it("Edit_title_check_value", () => {
    cy.wait(300);
    edit
      .getTitleInput()
      .type("{selectall} {backspace}")
      .type("Edit Book")
      .should("have.value", "Edit Book");
  });
  it("Fill_author_check_value", () => {
    edit
      .getAuthorInput()
      .type("{selectall} {backspace}")
      .type("Edit Author")
      .should("have.value", "Edit Author");
  });
  it("Fill_synopsis_check_value", () => {
    edit
      .getSynopsisInput()
      .type("{selectall} {backspace}")
      .type("Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis")
      .should(
        "have.value",
        "Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis"
      );
  });
  it("Fill_published_check_value", () => {
    edit
      .getPublishedInput()
      .type("2000-01-01")
      .should("have.value", "2000-01-01");
  });
  it("Fill_pages_check_value", () => {
    edit
      .getPagesInput()
      .type("{selectall} {backspace}")
      .type("4321")
      .should("have.value", "4321");
  });
  it("Fill_rating_check_value", () => {
    edit.getrating5().click();
    edit.getRadio5().should("be.checked");
    edit.getRadio1().should("not.be.checked");
    edit.getRadio2().should("not.be.checked");
    edit.getRadio3().should("not.be.checked");
    edit.getRadio4().should("not.be.checked");
  });
  it("Submit_form_redirect_bookshelf", () => {
    edit.getSubmitButton().click();
    cy.wait(300).url().should("include", "bookshelf");
    bookshelf.getMainTitle().should("be.visible");
  });
  it("Check_test_book_exists", () => {
    bookshelf.getGridTitle().contains("Edit Book").should("exist");
  });

  //DELETE DELETE DELETE

  it("Navigate_to_bookshelf", () => {
    bookshelf.navigate();
    cy.url().should("include", "bookshelf");
    bookshelf.getMainTitle().contains("Kraken").should("be.visible");
  });
  it("Click_book_to_details_check_book", () => {
    bookshelf.getGridTitle().contains("Edit Book").click();
    cy.wait(200).url().should("includes", "bookdetails");
    details.getBookTitle().contains("Edit Book").should("exist");
  });
  it("Book_delete_redirect_to_bookshelf", () => {
    details.getDeleteButton().click();
    cy.url().should("include", "bookshelf");
    bookshelf.getMainTitle().should("be.visible");
  });
  it("Check_page_for_deleted_book", () => {
    bookshelf.getGridTitle().contains("Edit Book").should("not.exist");
  });
});
