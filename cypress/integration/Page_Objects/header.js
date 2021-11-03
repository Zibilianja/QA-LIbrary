class Header {
  //header
  getHeaderTitle = () => {
    return cy.get(".header__title");
  };
  getHomeLink = () => {
    return cy.get(".header--home");
  };
  getBookshelfLink = () => {
    return cy.get(".header--bookshelf");
  };
  getAddBookLink = () => {
    return cy.get(".header--addbook");
  };
  getSearchInput = () => {
    return cy.get(".header__input");
  };
  getSearchButton = () => {
    return cy.get(".header__searchbtn");
  };
  getMobileMenu = () => {
    return cy.get(".click__dropdown");
  };
  getDropContent = () => {
    return cy.get(".dropdown__content");
  };
  searchAndSubmit = (query) => {
    this.getSearchInput().type(query).should("have.value", query);
    this.getSearchButton().click()
    cy.wait(200).url().should("include", "filtered")
  }
}
export { Header };
