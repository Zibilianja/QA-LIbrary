class BookDetails {
    getBookTitle = () => {
       return cy.get(".book__title")
    }
    getEditButton = () => {
        return cy.get(".main__button").contains("Edit This Book")
    }
    getDeleteButton = () => {
        return cy.get(".delete__button")
    }
    deleteBook = () => {
        this.getDeleteButton().click()
    }
    validateCorrectBook = (title) => {
        this.getBookTitle().should("contain", title)
    }
    getTitle = (title) => {
        this.getBookTitle().contains(title)
    }
}
export { BookDetails }