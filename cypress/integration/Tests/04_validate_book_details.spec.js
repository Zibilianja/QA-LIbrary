import { BookShelf } from "../Page_Objects/bookshelf";
import { BookDetails } from "../Page_Objects/bookdetails"

describe("4_validate_book_details", () => {
    const bookshelf = new BookShelf();
    const details = new BookDetails();

    it("Navigate_to_bookshelf", () => {
      bookshelf.navigate();
      cy.url().should("include", "bookshelf");
    });
    it("Click_on_book_1", () => {
      cy.wait(200)
      bookshelf.getGridTitle().contains("Chamber").click();
      cy.url().should("include", "details");
      details.getBookTitle().should("be.visible")
    });
    it("Check_book", () => {
      cy.wait(500)
      details.getBookTitle().should("contain", "Chamber");
    });
  });
  