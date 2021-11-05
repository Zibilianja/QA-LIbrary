class BookShelf {

    navigate = () => {
        return cy.visit('/bookshelf')
    }

    getMainTitle = () => {
        return cy.get(".main__title")
    }

    getGridTitle = () => {
        return cy.get(".grid__title", { timeout: 10000 })
    }
    getGridAuthor = () => {
        return cy.get(".grid__author", { timeout: 10000})
    }

    getClearButton = () => {
        return cy.get(".clear__button")
    }
    getMobileSearch = () => {
        return cy.get(".main__searchwrapper")
    }
    mobileSearchInput = () => {
        return cy.get(".main__search")
    }
    mobileSearchBtn = () => {
        return cy.get(".main__searchimg")
    }
    validateBookshelf = () => {
        return this.getMainTitle().should("be.visible")
    }
    clickBook = (title) => {
        this.getGridTitle().contains(title).click()
    }
    checkBookTitle = (title, status) => {
        console.log(title)
        if (typeof(title) == "object"){
            for (let i = 0; i < title.length; i++){
                this.getGridTitle().contains(title[i]).should(status)
            }
        }else {
        this.getGridTitle().contains(title).should(status)
        }
    }
    checkBookAuthor = (author, status) => {
        this.getGridAuthor().contains(author).should(status)
    }
    mobileSearchSubmit = (query) => {
        this.mobileSearchInput().type(query).should("have.value", query)
        this.mobileSearchBtn().click();
        cy.url().should("contain", "filtered")
        this.getClearButton().should("be.visible")
    }
}
export { BookShelf };