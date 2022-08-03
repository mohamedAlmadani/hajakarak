const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
  //  baseUrl: "https://linekwdemo2.com/hajikarak" ,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
