import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`Set textarea at label {string} to {string}`, (v1, v2) => {
    cy.get("body").contains(v1).parent().within(() => {
        cy.get("textarea").type(v2)
    })
});

When(`Set textarea at label {string} to {string}`, (v1, v2) => {
    cy.get("body").contains(v1).parent().within(() => {
        cy.get("textarea").type(v2)
    })
});

Then(`Set textarea at label {string} to {string}`, (v1, v2) => {
    cy.get("body").contains(v1).parent().within(() => {
        cy.get("textarea").type(v2)
    })
});

And(`Set textarea at label {string} to {string}`, (v1, v2) => {
    cy.get("div").contains(v1).parent().within(() => {
        cy.get("textarea']").type(v2)
    })
});

