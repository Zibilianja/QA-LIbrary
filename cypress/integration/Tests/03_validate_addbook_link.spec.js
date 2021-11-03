import { HomePage } from "../Page_Objects/homepage";
import { BookShelf } from "../Page_Objects/bookshelf";
import { Header } from "../Page_Objects/header";
import { AddEdit } from "../Page_Objects/add&edit";

describe("03_validate_addbook_link", () => {
  const homepage = new HomePage();
  const bookshelf = new BookShelf();
  const header = new Header();
  const addedit = new AddEdit();

  it("Navigate_home", () => {
    homepage.navigate();
    homepage.validateHomePage();
  });
  it("Redirect_home_to_addbook", () => {
    header.getAddBookLink().click();
    cy.url().should("include", "addbook");
    addedit.validateAddBook();
  });
  it("Navigate_bookshelf", () => {
    bookshelf.navigate();
    cy.url().should("include", "bookshelf");
    bookshelf.validateBookshelf();
  });
  it("Redirect_bookshelf_to_addbook", () => {
    header.getAddBookLink().click();
    cy.url().should("include", "addbook");
    addedit.validateAddBook();
  });
});
