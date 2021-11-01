import { BookShelf } from "../Page_Objects/bookshelf";

describe(
  "12_mobile_search_bar",
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
    it("Enter_query", () => {
      bookshelf.mobileSearchInput().type("Chamber").should("have.value", "Chamber");
    });
    it("Submit_search", () => {
      bookshelf.mobileSearchBtn().click();
      cy.url().should("contain", "filtered");
      bookshelf.getClearButton().should("be.visible");
    });
    it("Validate_search_results", () => {
      bookshelf.getGridTitle().contains("Chamber").should("exist");
      bookshelf.getGridTitle().contains("Stone").should("not.exist");
    });
  }
);
