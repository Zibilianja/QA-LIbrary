class HomePage {
    getMainTitleHeading = () => {
        return cy.get(".main__titleheading1")
    }

    getSeeBooksButton = () => {
       return cy.contains("See Books")
    }

    getAddBookButton = () => {
        return cy.get(".description__button").contains("Add Book")
    }

    navigate = () => {
        return cy.visit("");
    }

    validateHomePage = () => {
        return this.getMainTitleHeading().should("be.visible")
    }

}
export { HomePage };