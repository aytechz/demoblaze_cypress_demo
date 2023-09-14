import loginPage from "../../support/page/login.page";

describe('Login Tests', ()=>{
    beforeEach(() => {
        // This will run before each test
        
        cy.login(Cypress.env('user'),Cypress.env('pass'))
        
    });

    it('Login and check location', () => {
        cy.visit('/')
        cy.location().should((loc)=>{
            expect(loc.href).to.eq('https://demoblaze.com/')
            // expect(loc.pathname).to.eq('/inventory.html')
            // expect(loc.protocol).to.eq('https:')
            // expect(loc.hostname).to.eq('https://demoblaze.com/')
        });
    });

    it('Another test block', () => {
        cy.visit('/')

        cy.contains('Phones').should('be.visible')
        cy.wait(1000);
        // The session from the previous test will be reused here
    });
});
