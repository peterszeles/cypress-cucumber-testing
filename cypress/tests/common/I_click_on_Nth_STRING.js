import { And, Then, When } from "cypress-cucumber-preprocessor/steps";

When(`I click on {int}. {string}`, (v1,v2) => {
    cy.get('body').contains(v2).eq(v1-1).click({force: true});
});

Then(`I click on {int}. {string}`, (v1,v2) => {
    cy.get('body').contains(v2).eq(v1-1).click({force: true});
});

And(`I click on {int}. {string}`, (v1,v2) => {
    cy.get('body').contains(v2).eq(v1-1).click({force: true});
});

