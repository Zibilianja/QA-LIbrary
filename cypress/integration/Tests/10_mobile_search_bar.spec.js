import { BookShelf } from "../Page_Objects/bookshelf";

describe(
  "10_mobile_search_bar",
  {
    viewportHeight: 1000,
    viewportWidth: 340,
  },
  () => {
    const bookshelf = new BookShelf();

    it("Navigate_bookshelf", () => {
      bookshelf.navigate();
      bookshelf.getMobileSearch().should("be.visible");
    });
    it("Enter_query_submit", () => {
      bookshelf.mobileSearchSubmit("Chamber");
    });
    it("Validate_search_results", () => {
      bookshelf.checkBookTitle("Chamber", "exist");
      bookshelf.checkBookTitle("Stone", "not.exist");
    });
  }
);
