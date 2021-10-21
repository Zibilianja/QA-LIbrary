describe('1_validate_bookshelf_links', () => {
    it('Navigate_home', () => {
        cy.visit('http://localhost:1234');
        cy.get('.main__titleheading1').should('be.visible')
    })
//assertion here, separate into more it blocks that describe each step
    it('Home_Header_Nav_Link', () => {
        cy.get('.header--bookshelf').click();
        cy.url().should('include', 'bookshelf');
        cy.get('.main__title').should('be.visible');
    })
    it('Navigate_home', () => {
        cy.visit('http://localhost:1234');
        cy.get('.main__titleheading1').should('be.visible')
    })
    it('Home_Main_Button', () => {
        cy.contains('See Books').click();
        cy.url().should('include', 'bookshelf');
        cy.get('.main__title').should('be.visible');
    });
    it('Navigate_home', () => {
        cy.visit('http://localhost:1234');
        cy.get('.main__titleheading1').should('be.visible')
    })
    it('AddBook_Nav_Link', () => {
        cy.get('.header--bookshelf').click();
        cy.url().should('include', 'bookshelf');
        cy.get('.main__title').should('be.visible');
    });
})

describe('2_validate_Title_Link_To_Home', () => {
    it('Navigate_bookshelf', () => {
        cy.visit('http://localhost:1234/bookshelf');
        cy.url().should('include', 'bookshelf');
        cy.get('.main__title').should('be.visible');
    })
    it('Bookshelf__Click__Title__Link', () => {
        cy.get('.header__title').click();
        cy.url().should('eq', 'http://localhost:1234/')
        cy.get('.main__titleheading1').should('be.visible')
    })
})

describe('3_validate_delete_book', () => {
    it('Navigate_bookdetails_123', () => {
        cy.visit('http://localhost:1234/bookdetails/123');
        cy.get('.book__cover').should('be.visible')
    }) 
    it('Correct_book_check_exists', () => {
        cy.get('.book__title', {timeout: 1000}).contains('Stone').should('exist')
    });
    it('Book_delete_redirect_to_bookshelf', () => {
        cy.get('.delete__button').click();
        cy.url().should('include', 'bookshelf');
        cy.get('.main__title').should('be.visible');
    });
    it('Check_page_for_deleted_book', () => {
        cy.get('.grid__title', {timeout: 10000}).contains('Stone').should('not.exist')
    })
});

describe('4_validate_addbook_link', () => {
    it('Navigate_home', () => {
        cy.visit('http://localhost:1234');
        cy.get('.main__titleheading1').should('be.visible')
    })
    it('Redirect_home_to_addbook', () => {
        cy.get('.header--addbook').click();
        cy.url().should('include', 'addbook');
        cy.get('.addbook__title').contains('Add Book');
    });
    it('Navigate_bookshelf', () => {
        cy.visit('http://localhost:1234/bookshelf');
        cy.url().should('include', 'bookshelf');
        cy.get('.main__title').should('be.visible');
    })
    it('Redirect_bookshelf_to_addbook', () => {
        cy.get('.header--addbook').click();
        cy.url().should('include', 'addbook');
        cy.get('.addbook__title').contains('Add Book');
    });
    it('Navigate_editbook', () => {
        cy.visit('http://localhost:1234/editbook/126');
        cy.get('.edit__title').contains('Edit Book').should('be.visible');
    })
    it('Redirect_edit_to_addbook', () => {
        cy.get('.header--addbook').click();
        cy.url().should('include', 'addbook');
        cy.get('.addbook__title').contains('Add Book');
    });
});

describe('5_validate_book_details', () => {
    it('Navigate_to_bookshelf', () => {
        cy.visit('http://localhost:1234/bookshelf');
        cy.url().should('include', 'bookshelf');
    });
    it('Click_on_book_1', () => {
        cy.wait(1000).get('.grid__title').contains('Chamber').click();
        cy.url().should('include', 'details')
    });
    it('Check_book', () => {
        cy.wait(1000).get('.book__title').contains('Chamber');

    });
});

