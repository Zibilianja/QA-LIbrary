import { BookShelf } from "../Page_Objects/bookshelf";
import { Header } from "../Page_Objects/header";

describe("10_clear_search_button", () => {
  const bookshelf = new BookShelf();
  const header = new Header();

  it("Navigate_bookshelf", () => {
    bookshelf.navigate();
    bookshelf.validateBookshelf();
  });
  it("Fill_search_field_check_value", () => {
    header.searchAndSubmit("Chamber");
    bookshelf.getClearButton().should("be.visible");
  });

  it("Clear_search_redirect_bookshelf", () => {
    bookshelf.getClearButton().click();
    cy.url().should("include", "bookshelf");
  });
  it("Check_books_include_all", () => {
       bookshelf.checkBookTitle(["Stone", "Chamber", "Prisoner", "Goblet", "Phoenix", "Prince", "Hallows"], "exist")
  });
});
