import { BookShelf } from "../Page_Objects/bookshelf";
import { BookDetails } from "../Page_Objects/bookdetails";
import { AddEdit } from "../Page_Objects/add&edit";

describe("05_End_to_end", () => {
  const bookshelf = new BookShelf();
  const details = new BookDetails();
  const addedit = new AddEdit();
  //ADD ADD ADD

  it("Navigate_to_addbook_page", () => {
    addedit.navigateAddBook();
    cy.url().should("include", "addbook");
    addedit.validateAddBook();
  });
  it("Fill_form_data_check_values", () => {
    addedit.fillForm(
      ({
        title: "Good Book",
        author: "Author Author",
        synopsis: "This is the best book I have ever read.This is the best book I have ever read.This is the best book I have ever read.",
        published: "2021-10-26",
        pages: "1234",
        rating: 3
      })
    );
  });
  it("Submit_form_redirect_bookshelf", () => {
    addedit.getSubmitButton().click();
    cy.wait(300).url().should("include", "bookshelf");
    bookshelf.validateBookshelf();
  });
  it("Check_test_book_exists", () => {
    bookshelf.getGridTitle().contains("Good Book").should("exist");
  });

  //click to book from bookshelf
  //EDIT EDIT EDIT

  it("Navigate_to_bookshelf", () => {
    bookshelf.navigate();
    cy.url().should("include", "bookshelf");
    bookshelf.validateBookshelf();
  });
  it("Click_book_to_details", () => {
    bookshelf.clickBook("Good Book");
    cy.wait(200).url().should("includes", "bookdetails");
    details.validateCorrectBook("Good Book");
  });
  it("Click_edit_book", () => {
    details.getEditButton().click();
    addedit.validateEditBook();
    cy.wait(200).url().should("includes", "editbook");
  });
  it("Delete_form_data", () => {
    addedit.deleteFormData()
    addedit.getTitleInput().should("not.have.value")
  })
  it("Edit_form_data_check_values", () => {
      addedit.fillForm(
        ({
          title: "Edit Book",
          author: "Edit Author",
          synopsis: "Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis ",
          published: "2000-01-01",
          pages: "4321",
          rating: 5
        })
      );
    });
  it("Submit_form_redirect_bookshelf", () => {
    addedit.getSubmitButton().click();
    cy.wait(300).url().should("include", "bookshelf");
    bookshelf.validateBookshelf();
  });
  it("Check_test_book_exists", () => {
    bookshelf.checkBookTitle("Edit Book", "exist");
  });

//   //DELETE DELETE DELETE

  it("Navigate_to_bookshelf", () => {
    bookshelf.navigate();
    cy.url().should("include", "bookshelf");
    bookshelf.validateBookshelf();
  });
  it("Click_book_to_details_check_book", () => {
    bookshelf.clickBook("Edit Book");
    cy.wait(200).url().should("includes", "bookdetails");
    details.getTitle("Edit Book");
  });
  it("Book_delete_redirect_to_bookshelf", () => {
    details.deleteBook()
    cy.url().should("include", "bookshelf");
    bookshelf.validateBookshelf();
  });
  it("Check_page_for_deleted_book", () => {
    bookshelf.checkBookTitle("Edit Book", "not.exist")
  });
});
