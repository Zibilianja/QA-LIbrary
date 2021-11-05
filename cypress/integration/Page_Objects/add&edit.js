class AddEdit {
  navigateAddBook = () => {
    return cy.visit("/addbook");
  };
  getAddBookTitle = () => {
    return cy.get(".addbook__title");
  };
  getEditTitle = () => {
    return cy.get(".edit__title");
  };
  getTitleInput = () => {
    return cy.get(".form__title");
  };
  getAuthorInput = () => {
    return cy.get(".form__author");
  };
  getSynopsisInput = () => {
    return cy.get(".form__synopsis");
  };
  getPublishedInput = () => {
    return cy.get(".form__published");
  };
  getPagesInput = () => {
    return cy.get(".form__pages");
  };
  getRadio = (num) => {
    return cy.get(".radio__" + num.toString());
  };
  getRating = (num) => {
    return cy.get(".rating__" + num.toString());
  };
  getSubmitButton = () => {
    return cy.get(".submit__button");
  };

  validateAddBook = () => {
    this.getAddBookTitle().should("contain", "Add Book");
  };

  validateEditBook = () => {
    this.getEditTitle().should("contain", "Edit Book");
  };

  fillForm = (data) => {
    this.getTitleInput().type(data.title).should("have.value", data.title);
    this.getAuthorInput().type(data.author).should("have.value", data.author);
    this.getSynopsisInput()
      .type(data.synopsis)
      .should("have.value", data.synopsis);
    this.getPublishedInput()
      .type(data.published)
      .should("have.value", data.published);
    this.getPagesInput().type(data.pages).should("have.value", data.pages);
    this.getRating(data.rating).click();
    let ratingArray = [1, 2, 3, 4, 5];
    for (let i = 0; i < ratingArray.length; i++) {
      if (ratingArray[i] == data.rating) {
        this.getRadio(data.rating).should("be.checked");
      } else {
        this.getRadio(ratingArray[i]).should("not.be.checked");
      }
    }
  };
  deleteFormData = () => {
    this.getTitleInput().type("{selectall} {backspace}");
    this.getAuthorInput().type("{selectall} {backspace}");
    this.getSynopsisInput().type("{selectall} {backspace}");
    this.getPagesInput().type("{selectall} {backspace}");
  };
}
export { AddEdit };
