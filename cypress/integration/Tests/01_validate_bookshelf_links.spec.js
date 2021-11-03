import { HomePage } from "../Page_Objects/homepage";
import { BookShelf } from "../Page_Objects/bookshelf";
import { Header } from "../Page_Objects/header";

describe("1_validate_bookshelf_links", () => {
  const homepage = new HomePage();
  const bookshelf = new BookShelf();
  const header = new Header();

  it("Navigate_home", () => {
    homepage.navigate();
    homepage.validateHomePage();
  });
  it("Home_Header_Nav_Link", () => {
    header.getBookshelfLink().click();
    cy.url().should("include", "bookshelf");
    bookshelf.validateBookshelf();
  });
  it("Navigate_home", () => {
    homepage.navigate();
    homepage.validateHomePage();
  });
  it("Home_Main_Button", () => {
    homepage.getSeeBooksButton().click();
    cy.url().should("include", "bookshelf");
    bookshelf.validateBookshelf();
  });
  it("Navigate_home", () => {
    homepage.navigate();
    homepage.validateHomePage();
  });
  it("AddBook_Nav_Link", () => {
    header.getBookshelfLink().click();
    cy.url().should("include", "bookshelf");
    bookshelf.validateBookshelf();
  });
});
