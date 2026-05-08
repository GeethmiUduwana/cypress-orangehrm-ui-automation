const { defineConfig } = require("cypress");

module.exports = defineConfig({

  // Record videos
  video: true,

  // Auto screenshots on failure
  screenshotOnRunFailure: true,

  // Keep videos for all tests
  videoUploadOnPasses: true,

  // Screen size
  viewportWidth: 1280,
  viewportHeight: 720,

  // Wait timeout
  defaultCommandTimeout: 10000,

  e2e: {

    // Base URL
    baseUrl: 'https://opensource-demo.orangehrmlive.com',

    // Screenshot folder
    screenshotsFolder: 'cypress/screenshots',

    // Video folder
    videosFolder: 'cypress/videos',

    setupNodeEvents(on, config) {

      // Take screenshot automatically after each test
      on('after:screenshot', (details) => {
        console.log('Screenshot saved:', details.path)
      })

      return config
    },

  },

});