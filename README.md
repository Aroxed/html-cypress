# Cypress Tests

This repository contains Cypress tests for the login page of our web application.

## Setup

Before running the tests, make sure you have the following software installed on your computer:

- Node.js (version 14 or higher)
- npm (version 6 or higher)

To install the project dependencies, run the following command in your terminal:

```
npm install
```
## Running the Tests

To run the tests, use the following command:
```
npm run cy:run --spec "login.spec.cy.js"
```


This command will start the Cypress Test Runner and run the `login.spec.cy.js` test file. The `--spec` option specifies the path to the test file.

You can also run the tests in headless mode (i.e., without the Test Runner GUI) by using the following command:

```
npm run cy:run:headless --spec "login.spec.cy.js"
```

This command will run the same test file in headless mode and output the test results to the console.

## Writing Tests

To write new tests, create a new `.cy.js` file in the `cypress/e2e/your_folder` directory. You can use the `login.spec.cy.js` file as a template.

## Contributing

If you find any bugs or issues with the tests, please open an issue on GitHub or submit a pull request with a fix.

We welcome contributions from anyone!
