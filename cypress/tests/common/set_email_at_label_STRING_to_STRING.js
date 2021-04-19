import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`Set email at label {string} to {string}`, (v1, v2) => {
    cy.get("body").contains(v1).parent().within(() => {
        cy.get("input[type='email']").type(v2)
    })
});

When(`Set email at label {string} to {string}`, (v1, v2) => {
    cy.get("body").contains(v1).parent().within(() => {
        cy.get("input[type='email']").type(v2)
    })
});

Then(`Set email at label {string} to {string}`, (v1, v2) => {
    cy.get("body").contains(v1).parent().within(() => {
        cy.get("input[type='email']").type(v2)
    })
});

And(`Set email at label {string} to {string}`, (v1, v2) => {
    cy.get("div").contains(v1).parent().within(() => {
        cy.get("input[type='email']").type(v2)
    })
});

