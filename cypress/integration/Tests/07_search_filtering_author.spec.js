import { HomePage } from "../Page_Objects/homepage"
import { BookShelf } from "../Page_Objects/bookshelf"
import { Header } from "../Page_Objects/header";



describe("9_search_filtering_author", () => {
    const home = new HomePage();
    const bookshelf = new BookShelf();
    const header = new Header();
    

    it("Navigate_home", () => {
      home.navigate()
      home.getMainTitleHeading().should("be.visible");
    });
    it("Fill_search_field_check_value", () => {
      header.getSearchInput().type("Rowling").should("have.value", "Rowling");
    });
    it("Submit_search_validate_redirect_filtered", () => {
      header.getSearchButton(0).click();
      cy.wait(300).url().should("include", "filtered");
      bookshelf.getClearButton().should("be.visible");
    });
    it("Validate_filtered_results", () => {
      bookshelf.getGridAuthor().contains("Rowling").should("exist");
    });
  });
  