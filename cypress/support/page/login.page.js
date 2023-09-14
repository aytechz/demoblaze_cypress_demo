class LoginPage{
    usernameField() {return cy.get('#user-name')}
    passwordField() {return cy.get('#password')}
    loginButton() {return cy.get('#login-button')}

    /**Login method use 
     * the usernames from cypress.config.js file 
     * 'standard_u'*/
    login(user){
        this.usernameField().type(Cypress.env(user))
        this.passwordField().type(Cypress.env('pass'))
        this.loginButton().click()
    }


}
export default new LoginPage();