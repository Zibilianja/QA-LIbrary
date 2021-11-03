import { HomePage } from "../Page_Objects/homepage"
import { BookShelf } from "../Page_Objects/bookshelf"
import { Header } from "../Page_Objects/header";



describe("07_search_filtering_author", () => {
    const home = new HomePage();
    const bookshelf = new BookShelf();
    const header = new Header();
    

    it("Navigate_home", () => {
      home.navigate()
      home.validateHomePage();
    });
    it("Fill_search_field_check_value", () => {
      header.searchAndSubmit("Rowling");
      bookshelf.getClearButton().should("be.visible");
    });
    it("Validate_filtered_results", () => {
      bookshelf.checkBookAuthor("Rowling", "exist");
    });
  });
  