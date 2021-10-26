describe('1_validate_bookshelf_links', () => {
    it('Navigate_home', () => {
        cy.visit('http://localhost:1234');
        cy.get('.main__titleheading1').should('be.visible')
    })
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

describe('3_validate_addbook_link', () => {
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
        cy.get('.addbook__title').contains('Add Book').should('be.visible');
    });
});

describe('4_validate_book_details', () => {
    it('Navigate_to_bookshelf', () => {
        cy.visit('http://localhost:1234/bookshelf');
        cy.url().should('include', 'bookshelf');
    });
    it('Click_on_book_1', () => {
        cy.wait(500).get('.grid__title').contains('Chamber').click();
        cy.url().should('include', 'details')
    });
    it('Check_book', () => {
        cy.wait(500).get('.book__title').should('contain', 'Chamber');

    });
});

describe('5_form_submission_add_book', () => {
    it('Navigate_to_addbook_page', () => {
        cy.visit('http://localhost:1234/addbook');
        cy.url().should('include', 'addbook');
        cy.get('.addbook__title').contains('Add Book');
    });
    it('Fill_title_check_value', () => {
        cy.wait(300).get('.form__title').type('Good Book').should('have.value', 'Good Book')
    })
    it('Fill_author_check_value', () => {
        cy.get('.form__author').type('Author Author').should('have.value', 'Author Author')
    })
    it('Fill_synopsis_check_value', () => {
        cy.get('.form__synopsis').type('This is the best book I have ever read.This is the best book I have ever read.This is the best book I have ever read.').should('have.value', 'This is the best book I have ever read.This is the best book I have ever read.This is the best book I have ever read.')
    })
    it('Fill_published_check_value', () => {
        cy.get('.form__published').type('2021-10-26').should('have.value', '2021-10-26')
    })
    it('Fill_pages_check_value', () => {
        cy.get('.form__pages').type('1234').should('have.value', '1234')
    })
    it('Fill_rating_check_value', () => {
        cy.get('.rating__3').click();
        cy.get('.radio__3').should('be.checked')
    })
    it('Submit_form_redirect_bookshelf', () => {
        cy.get('.submit__button').click();
        cy.wait(300).url().should('include', 'bookshelf');
        cy.get('.main__title').should('be.visible');
    })
    it('Check_test_book_exists', () => {
        cy.get('.grid__title', {timeout: 10000}).contains('Good Book').should('exist')
    })
});

describe('6_form_submission_edit_book', () => {
    it('Navigate_to_edit_page', () => {
        cy.visit('http://localhost:1234/editbook/130');
        cy.url().should('include', 'editbook');
        cy.get('.edit__title').contains('Edit Book');
    });
    it('Edit_title_check_value', () => {
        cy.wait(300).get('.form__title').type('{selectall} {backspace}').type('Edit Book').should('have.value', 'Edit Book')
    })
    it('Fill_author_check_value', () => {
        cy.get('.form__author').type('{selectall} {backspace}').type('Edit Author').should('have.value', 'Edit Author')
    })
    it('Fill_synopsis_check_value', () => {
        cy.get('.form__synopsis').type('{selectall} {backspace}').type('Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis').should('have.value', 'Edit Synopsis Edit Synopsis Edit Synopsis Edit Synopsis')
    })
    it('Fill_published_check_value', () => {
        cy.get('.form__published').type('2000-01-01').should('have.value', '2000-01-01')
    })
    it('Fill_pages_check_value', () => {
        cy.get('.form__pages').type('{selectall} {backspace}').type('4321').should('have.value', '4321')
    })
    it('Fill_rating_check_value', () => {
        cy.get('.rating__5').click();
        cy.get('.radio__5').should('be.checked')
    })
    it('Submit_form_redirect_bookshelf', () => {
        cy.get('.submit__button').click();
        cy.wait(300).url().should('include', 'bookshelf');
        cy.get('.main__title').should('be.visible');
    })
    it('Check_test_book_exists', () => {
        cy.get('.grid__title', {timeout: 10000}).contains('Edit Book').should('exist')
    })
})

describe('7_validate_delete_book', () => {
    it('Navigate_bookdetails_130_test_book', () => {
        cy.visit('http://localhost:1234/bookdetails/130');
        cy.get('.book__title').should('contain', 'Edit Book')
    }) 
    it('Correct_book_check_exists', () => {
        cy.get('.book__title', {timeout: 1000}).contains('Edit Book').should('exist')
    });
    it('Book_delete_redirect_to_bookshelf', () => {
        cy.get('.delete__button').click();
        cy.url().should('include', 'bookshelf');
        cy.get('.main__title').should('be.visible');
    });
    it('Check_page_for_deleted_book', () => {
        cy.get('.grid__title', {timeout: 10000}).contains('Edit Book').should('not.exist')
    })
});

describe('8_search_filtering_title', () => {
    it('Navigate_home', () => {
        cy.visit('http://localhost:1234');
        cy.get('.main__titleheading1').should('be.visible');
    })
    it('Fill_search_field_check_value', () => {
        cy.get('.header__input').type('Chamber').should('have.value', 'Chamber');
    })
    it('Submit_search_validate_redirect_filtered', () => {
        cy.get('.header__searchbtn').click();
        cy.wait(300).url().should('include', 'filtered')
        cy.get('.clear__button').should('be.visible')
    })
    it('Validate_filtered_results', () => {
        cy.get('.grid__title').contains('Chamber').should('exist');
        cy.get('.grid__title').contains('Hallows').should('not.exist')
        cy.get('.grid__title').contains('Stone').should('not.exist')
    })
})

describe('9_search_filtering_author', () => {
    it('Navigate_home', () => {
        cy.visit('http://localhost:1234');
        cy.get('.main__titleheading1').should('be.visible');
    })
    it('Fill_search_field_check_value', () => {
        cy.get('.header__input').type('Rowling').should('have.value', 'Rowling');
    })
    it('Submit_search_validate_redirect_filtered', () => {
        cy.get('.header__searchbtn').click();
        cy.wait(300).url().should('include', 'filtered')
        cy.get('.clear__button').should('be.visible')
    })
    it('Validate_filtered_results', () => {
        cy.get('.grid__author').contains('Rowling').should('exist');
    })
})

describe('10_clear_search_button', () => {
    it('Navigate_filtered_books', () => {
        cy.visit('http://localhost:1234/filtered/Prisoner');
        cy.get('.clear__button').should('be.visible');
    })
    it('Clear_search_redirect_bookshelf', () => {
        cy.get('.clear__button').click();
        cy.url().should('include', 'bookshelf');
        
    })
    it('Check_books_include_all', () => {
        cy.get('.grid__title').contains('Stone').should('exist')
        cy.get('.grid__title').contains('Chamber').should('exist')
        cy.get('.grid__title').contains('Prisoner').should('exist')
        cy.get('.grid__title').contains('Goblet').should('exist')
        cy.get('.grid__title').contains('Phoenix').should('exist')
        cy.get('.grid__title').contains('Prince').should('exist')
        cy.get('.grid__title').contains('Hallows').should('exist')
    })
})