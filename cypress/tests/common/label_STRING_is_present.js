import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`Label {string} is present`, (lb) => {
    cy.get("label").contains(lb);
});

When(`Label {string} is present`, (lb) => {
    cy.get("label").contains(lb);
});

Then(`Label {string} is present`, (lb) => {
    cy.get("label").contains(lb);
});

And(`Label {string} is present`, (lb) => {
    cy.get("label").contains(lb);
});
