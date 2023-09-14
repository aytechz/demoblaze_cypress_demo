class LoginPage{
    loginNavigationButton(){return cy.get('#login2')}
    usernameField() {return cy.get('#loginusername')}
    passwordField() {return cy.get('#loginpassword')}
    loginButton() {return cy.get('[onclick="logIn()"]')}
    logoutButton() {return cy.get('#logout2')}

    /**Login method use 
     * the usernames from cypress.config.js file 
     * 'standard_u'*/
    login(username, password){
        this.loginNavigationButton().click();
        this.usernameField().should('be.visible');
        this.usernameField().clear().type(username)
        this.passwordField().clear().type(password)
        this.loginButton().click();
        this.logoutButton().should('be.visible');
    }


}
export default new LoginPage();