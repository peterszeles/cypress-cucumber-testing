import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`I click on {string} button`, (v1) => {
    cy.get('button').contains(v1).click({force: true});
});

When(`I click on {string} button`, (v1) => {
    cy.get('button').contains(v1).click({force: true});
});

Then(`I click on {string} button`, (v1) => {
    cy.get('button').contains(v1).click({force: true});
});

And(`I click on {string} button`, (v1) => {
    cy.get('button').contains(v1).click({force: true});
});
