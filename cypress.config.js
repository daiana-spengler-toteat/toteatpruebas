const { defineConfig } = require("cypress");
const {GoogleSocialLogin} = require('cypress-social-logins').plugins

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        GoogleSocialLogin: GoogleSocialLogin
      })
    },
  },
});