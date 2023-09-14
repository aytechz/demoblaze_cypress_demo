import loginPage from "../../support/page/login.page";

describe('Login Tests', ()=>{
    it('Visit', () => {
        cy.visit('https://www.saucedemo.com');
        loginPage.login('standard_u')
    });
})