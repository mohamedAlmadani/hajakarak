/// <reference types="cypress" />
describe('should check all the functionalities of the login page',()=>{

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    beforeEach(()=>{
        cy.fixture('login/loginUser').as('user');
        cy.visit('https://linekwdemo2.com/hajikarak/user/auth');
      })

      it('should show a message if the fields is empty', () => {
           
  
        cy.get('#sign_in > span').click();
        cy.get('#email_signin_error').should('be.visible').and('contain','This field is required!');
        cy.get('#password_signin_error').should('be.visible').and('contain','This field is required!');
      
        
        })
        it('should show when an invalid email is entered', () => {
           
  cy.get('@user').then((user)=>{
    cy.get('[id="email_signin"]').type(user.email,{force: true} );
    cy.get('#password_signin').type(user.password,{force: true} );
    cy.get('#sign_in').click();
    cy.get('[id="email_signin_error"]').should('be.visible').and('contain','The selected email is invalid.!');


  })
           // cy.get('#email_signin_error').should('be.visible').and('contain','This field is required!');
           // cy.get('#password_signin_error').should('be.visible').and('contain','This field is required!');
          
            
            })

            it.only('should show when an invalid password is entered', () => {
           
                cy.get('@user').then((user)=>{
                  cy.get('[id="email_signin"]').type(user.validemail,{force: true} );
                  cy.get('#password_signin').type(user.invalidpassword,{force: true} );
                  cy.get('#sign_in').click();
                  cy.get('#password_signin_error').should('be.visible').and('contain','The password must be at least 8 characters.!');
              
              
                })
                         // cy.get('#email_signin_error').should('be.visible').and('contain','This field is required!');
                         // cy.get('#password_signin_error').should('be.visible').and('contain','This field is required!');
                        
                          
                          })
      
})