import { HomePage } from "../Page_Objects/homepage";
import { BookShelf } from "../Page_Objects/bookshelf";
import { Header } from "../Page_Objects/header";
import { AddBook } from "../Page_Objects/addbook";

describe("3_validate_addbook_link", () => {
  const homepage = new HomePage();
  const bookshelf = new BookShelf();
  const header = new Header();
  const addbook = new AddBook();

  it("Navigate_home", () => {
    homepage.navigate();
    homepage.getMainTitleHeading().should("be.visible");
  });
  it("Redirect_home_to_addbook", () => {
    header.getAddBookLink().click();
    cy.url().should("include", "addbook");
    addbook.getPageHeading().should("contain", "Add Book");
  });
  it("Navigate_bookshelf", () => {
    bookshelf.navigate();
    cy.url().should("include", "bookshelf");
    bookshelf.getMainTitle().should("be.visible");
  });
  it("Redirect_bookshelf_to_addbook", () => {
    header.getAddBookLink().click();
    cy.url().should("include", "addbook");
    addbook.getPageHeading().should("contain", "Add Book");
  });
});
