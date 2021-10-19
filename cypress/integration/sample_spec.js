describe('1_validate_bookshelf_links', () => {
    it('Home_Header_Nav_Link', () => {
        cy.visit('http://localhost:1234');
        cy.get('.header--bookshelf').click();
        cy.url().should('include', 'bookshelf');
        cy.get('.main__title').contains('Release the Kraken of Knowledge!');
    });
    it('Home_Main_Button', () => {
        cy.visit('http://localhost:1234');
        cy.contains('See Books').click();
        cy.url().should('include', 'bookshelf');
        cy.get('.main__title').contains('Release the Kraken of Knowledge!');
    });
    it('AddBook_Nav_Link', () => {
        cy.visit('http://localhost:1234/addbook');
        cy.get('.header--bookshelf').click();
        cy.url().should('include', 'bookshelf');
        cy.get('.main__title').contains('Release the Kraken of Knowledge!');
    });
})

describe('2_validate_Title_Link_To_Home', () => {
    it('Bookshelf__Click__Title__Link', () => {
        cy.visit('http://localhost:1234/bookshelf');
        cy.get('.header__title').click();
        cy.url().should('eq', 'http://localhost:1234/')
        cy.get('.main__titleheading1').contains('Books.')
    })
})

describe('3_validate_delete_book', () => {
    it('Book_check_exists', () => {
        cy.visit('http://localhost:1234/bookdetails/123');
        cy.wait(1000).get('.book__title').contains('Stone')
    });
    it('Book_delete_redirect_to_bookshelf', () => {
        cy.get('.delete__button').click();
        cy.url().should('include', 'bookshelf')
    });
    it('Check_page_for_deleted_book', () => {
        cy.wait(1000).get('.grid__title').contains('Stone').should('not.exist')
    })
});

describe('4_validate_addbook_link', () => {
    it('Redirect_home_to_addbook', () => {
        cy.visit('http://localhost:1234/');
        cy.get('.header--addbook').click();
        cy.url().should('include', 'addbook');
        cy.get('.addbook__title').contains('Add Book');
    });
    it('Redirect_bookshelf_to_addbook', () => {
        cy.visit('http://localhost:1234/bookshelf');
        cy.get('.header--addbook').click();
        cy.url().should('include', 'addbook');
        cy.get('.addbook__title').contains('Add Book');
    });
    it('Redirect_edit_to_addbook', () => {
        cy.visit('http://localhost:1234/editbook');
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

