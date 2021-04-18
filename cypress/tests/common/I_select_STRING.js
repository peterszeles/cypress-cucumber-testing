import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`I select {string}`, (v1) => {
    cy.get(v1).click();
});

When(`I select {string}`, (v1) => {
    cy.get(v1).click();
});

Then(`I select {string}`, (v1) => {
    cy.get(v1).click();
});

And(`I select {string}`, (v1) => {
    cy.get('tr').contains(v1).click();
});
