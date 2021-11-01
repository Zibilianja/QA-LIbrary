import { HomePage } from "../Page_Objects/homepage";
import { BookShelf } from "../Page_Objects/bookshelf";
import { Header } from "../Page_Objects/header";

describe("2_validate_Title_Link_To_Home", () => {
  const homepage = new HomePage();
  const bookshelf = new BookShelf();
  const header = new Header();

  it("Navigate_bookshelf", () => {
    bookshelf.navigate();
    cy.url().should("include", "bookshelf");
    bookshelf.getMainTitle().should("be.visible");
  });
  it("Bookshelf__Click__Title__Link", () => {
    header.getHeaderTitle().click();
    cy.url().should("eq", "http://localhost:1234/");
    homepage.getMainTitleHeading().should("be.visible");
  });
});
