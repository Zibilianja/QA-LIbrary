import {HomePage} from "../Page_Objects/homepage";
import { Header } from "../Page_Objects/header";
import { BookShelf } from "../Page_Objects/bookshelf"


describe("06_search_filtering_title", () => {
    const home = new HomePage();
    const header = new Header();
    const bookshelf = new BookShelf();

    it("Navigate_home", () => {
      home.navigate();
      home.validateHomePage();
    });
    it("Fill_search_and_submit", () => {
      header.searchAndSubmit("Chamber");
      bookshelf.getClearButton().should("be.visible");
    });
    it("Validate_filtered_results", () => {
      bookshelf.checkBookTitle("Chamber", "exist");
      bookshelf.checkBookTitle("Hallows", "not.exist");
      bookshelf.checkBookTitle("Stone", "not.exist");
    });
  });

  