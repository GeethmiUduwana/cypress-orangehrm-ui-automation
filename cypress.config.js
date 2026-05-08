const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // Record videos
  video: true,

  // Take screenshots automatically on test failure
  screenshotOnRunFailure: true,

  // Keep videos only for failed tests (optional)
  videoUploadOnPasses: false,

  // Viewport settings
  viewportWidth: 1280,
  viewportHeight: 720,

  // Command timeout
  defaultCommandTimeout: 10000,

  e2e: {

    baseUrl: 'https://opensource-demo.orangehrmlive.com',

    setupNodeEvents(on, config) {

      // implement node event listeners here

    },

  },

});