import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`I click on {string} link`, (v1) => {
    cy.get('a').contains(v1).parent().click({force: true});
});

When(`I click on {string} link`, (v1) => {
    cy.get('a').contains(v1).parent().click({force: true});
});

Then(`I click on {string} link`, (v1) => {
    cy.get('a').contains(v1).parent().click({force: true});
});

And(`I click on {string} link`, (v1) => {
    cy.get('a').contains(v1).parent().click({force: true});
});
