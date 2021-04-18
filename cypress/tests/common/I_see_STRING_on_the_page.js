import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`I see {string} on the page`, (v1) => {
    cy.get('body').contains(v1);
});

When(`I see {string} on the page`, (v1) => {
    cy.get('body').contains(v1);
});

Then(`I see {string} on the page`, (v1) => {
    cy.get('body').contains(v1);
});

And(`I see {string} on the page`, (v1) => {
    cy.get('body').contains(v1);
});
