import { And, Then, When } from "cypress-cucumber-preprocessor/steps";

When(`I click on {int}. {string} button`, (v1, v2) => {
    cy.get('input[value="' + v2 + '"]').eq(v1-1).click();
});

Then(`I click on {int}. {string} button`, (v1, v2) => {
    cy.get('input[value="' + v2 + '"]').eq(v1-1).click();
});

And(`I click on {int}. {string} button`, (v1, v2) => {
    cy.get('input[value="' + v2 + '"]').eq(v1-1).click();
});
