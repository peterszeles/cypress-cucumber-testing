import { And, Then, When } from "cypress-cucumber-preprocessor/steps";

When(`I click on {string}`, (v1) => {
    cy.get('body').contains(v1).click({force: true});
});

Then(`I click on {string}`, (v1) => {
    cy.get('body').contains(v1).click({force: true});
});

And(`I click on {string}`, (v1) => {
    cy.get('body').contains(v1).click({force: true});
});

//TODO: new tabs are not opening error
