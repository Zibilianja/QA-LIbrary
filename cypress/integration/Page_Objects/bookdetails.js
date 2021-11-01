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
}
export { BookDetails }