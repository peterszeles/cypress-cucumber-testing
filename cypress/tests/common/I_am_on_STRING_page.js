import { Given, And, When } from "cypress-cucumber-preprocessor/steps";

Given(`I am on {string} page`, (url) => {
    cy.visit(url);
});

When(`I am on {string} page`, (url) => {
    cy.visit(url);
});

And(`I am on {string} page`, (url) => {
    cy.visit(url);
});

