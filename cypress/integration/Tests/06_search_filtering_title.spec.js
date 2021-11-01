import {HomePage} from "../Page_Objects/homepage";
import { Header } from "../Page_Objects/header";
import { BookShelf } from "../Page_Objects/bookshelf"


describe("8_search_filtering_title", () => {
    const home = new HomePage();
    const header = new Header();
    const bookshelf = new BookShelf();

    it("Navigate_home", () => {
      home.navigate();
      home.getMainTitleHeading().should("be.visible");
    });
    it("Fill_search_field_check_value", () => {
      header.getSearchInput().type("Chamber").should("have.value", "Chamber");
    });
    it("Submit_search_validate_redirect_filtered", () => {
      header.getSearchButton().click();
      cy.wait(300).url().should("include", "filtered");
      bookshelf.getClearButton().should("be.visible");
    });
    it("Validate_filtered_results", () => {
      bookshelf.getGridTitle().contains("Chamber").should("exist");
      bookshelf.getGridTitle().contains("Hallows").should("not.exist");
      bookshelf.getGridTitle().contains("Stone").should("not.exist");
    });
  });

  