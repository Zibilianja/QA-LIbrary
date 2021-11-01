import { BookShelf } from "../Page_Objects/bookshelf";
import { Header } from "../Page_Objects/header";

describe("10_clear_search_button", () => {
  const bookshelf = new BookShelf();
  const header = new Header();

  it("Navigate_bookshelf", () => {
    bookshelf.navigate();
    bookshelf.getMainTitle().should("be.visible");
  });
  it("Fill_search_field_check_value", () => {
    header.getSearchInput().type("Chamber").should("have.value", "Chamber");
  });
  it("Submit_search_validate_redirect_filtered", () => {
    header.getSearchButton().click();
    cy.wait(300).url().should("include", "filtered");
    bookshelf.getClearButton().should("be.visible");
  });

  it("Clear_search_redirect_bookshelf", () => {
    bookshelf.getClearButton().click();
    cy.url().should("include", "bookshelf");
  });
  it("Check_books_include_all", () => {
    bookshelf.getGridTitle().contains("Stone").should("exist");
    bookshelf.getGridTitle().contains("Chamber").should("exist");
    bookshelf.getGridTitle().contains("Prisoner").should("exist");
    bookshelf.getGridTitle().contains("Goblet").should("exist");
    bookshelf.getGridTitle().contains("Phoenix").should("exist");
    bookshelf.getGridTitle().contains("Prince").should("exist");
    bookshelf.getGridTitle().contains("Hallows").should("exist");
  });
});
