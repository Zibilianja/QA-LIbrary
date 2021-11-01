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
}
export { Header };
