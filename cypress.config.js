const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1200,
  viewportWidth: 1900,
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
