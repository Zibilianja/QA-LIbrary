class EditBook {
    getEditTitle = () => {
        return cy.get(".edit__title");
    }
    getTitleInput = () => {
        return cy.get(".form__title")
    }
    
    getAuthorInput = () => {
        return cy.get(".form__author")
    }

    getSynopsisInput = () => {
        return cy.get(".form__synopsis")
    }

    getPublishedInput = () => {
        return cy.get(".form__published")
    }

    getPagesInput = () => {
        return cy.get(".form__pages")
    }
    getRadio1 = () => {
        return cy.get(".radio__1")
    }
    getRadio2 = () => {
        return cy.get(".radio__2")
    }
    getRadio3 = () => {
        return cy.get(".radio__3")
    }
    getRadio4 = () => {
        return cy.get(".radio__4")
    }
    getRadio5 = () => {
        return cy.get(".radio__5")
    }
    getrating1 = () => {
        return cy.get(".rating__1")
    }
    getrating2 = () => {
        return cy.get(".rating__2")
    }
    getrating3 = () => {
        return cy.get(".rating__3")
    }
    getrating4 = () => {
        return cy.get(".rating__4")
    }
    getrating5 = () => {
        return cy.get(".rating__5")
    }
    getSubmitButton = () => {
        return cy.get(".submit__button")
    } 
}

export { EditBook }