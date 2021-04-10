import { And, Then, When } from "cypress-cucumber-preprocessor/steps";

When(`I click on {string} button`, (v1) => {
    cy.get('button').contains(v1).click({force: true});
});

Then(`I click on {string} button`, (v1) => {
    cy.get('button').contains(v1).click({force: true});
});

And(`I click on {string} button`, (v1) => {
    cy.get('button').contains(v1).click({force: true});
});
