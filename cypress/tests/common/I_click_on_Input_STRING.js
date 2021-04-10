import { And, Then, When } from "cypress-cucumber-preprocessor/steps";

When(`I click on Input {string}`, (v1) => {
    cy.get('input[value="' + v1 + '"]').click({force: true});
});

Then(`I click on Input {string}`, (v1) => {
    cy.get('input[value="' + v1 + '"]').click({force: true});
});

And(`I click on Input {string}`, (v1) => {
    cy.get('input[value="' + v1 + '"]').click({force: true});
});

