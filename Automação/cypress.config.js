const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.feature',
    excludeSpecPattern: '**/node_modules',
  },
  
});

// Comentário adicionado no final do arquivo
