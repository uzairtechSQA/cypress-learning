const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //wathForFileChanges:false,
    //setDefualtCommandTimeout:4000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
