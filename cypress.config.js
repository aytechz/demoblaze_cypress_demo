const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    baseUrl: 'https://www.saucedemo.com/',
    "chromeWebSecurity": false,

  },
  env: {
    standard_u : 'standard_user',
    locked_u : 'locked_out_user',
    problem_u: 'problem_user',
    glitch_u: 'performance_glitch_user',
    pass : 'secret_sauce'
  }
});
