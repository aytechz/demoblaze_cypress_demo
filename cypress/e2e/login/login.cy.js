import loginPage from "../../support/page/login.page";

describe('Login Tests', ()=>{
    it('Visit', () => {
        cy.visit('https://www.saucedemo.com');

        loginPage.usernameField().type(Cypress.env('locked_u'));
        cy.get('#password').type(Cypress.env('pass'), {log: false});
        cy.get('#login-button').click();
    });
})