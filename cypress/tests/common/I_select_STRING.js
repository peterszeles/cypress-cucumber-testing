import { And, Then, When } from "cypress-cucumber-preprocessor/steps";

When(`I select {string}`, (v1) => {
    cy.get(v1).click();
});

Then(`I select {string}`, (v1) => {
    cy.get(v1).click();
});

And(`I select {string}`, (v1) => {
    cy.get('tr').contains(v1).click();
});
