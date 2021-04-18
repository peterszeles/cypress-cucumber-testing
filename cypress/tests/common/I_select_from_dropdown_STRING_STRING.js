import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`I select from dropdown {string} {string}`, (v1, v2) => {
    cy.get('select[name="' + v1 + '"]').select(v2);
});

When(`I select from dropdown {string} {string}`, (v1, v2) => {
    cy.get('select[name="' + v1 + '"]').select(v2);
});

Then(`I select from dropdown {string} {string}`, (v1, v2) => {
    cy.get('select[name="' + v1 + '"]').select(v2);
});

And(`I select from dropdown {string} {string}`, (v1, v2) => {
    cy.get('select[name="' + v1 + '"]').select(v2);
});
