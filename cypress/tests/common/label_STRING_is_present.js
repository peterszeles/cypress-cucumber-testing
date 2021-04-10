import { And, When } from "cypress-cucumber-preprocessor/steps";

When(`Label {string} is present`, (lb) => {
    cy.get("label").contains(lb);
});

Then(`Label {string} is present`, (lb) => {
    cy.get("label").contains(lb);
});

And(`Label {string} is present`, (lb) => {
    cy.get("label").contains(lb);
});
