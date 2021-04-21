import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`Set input where placeholder is {string} to {string}`, (v1, v2) => {
    cy.get("input[placeholder='" + v1 + "']").type(v2)
});

When(`Set input where placeholder is {string} to {string}`, (v1, v2) => {
    cy.get("input[placeholder='" + v1 + "']").type(v2)
});

Then(`Set input where placeholder is {string} to {string}`, (v1, v2) => {
    cy.get("input[placeholder='" + v1 + "']").type(v2)
});

And(`Set input where placeholder is {string} to {string}`, (v1, v2) => {
    cy.get("input[placeholder='" + v1 + "']").type(v2)
});

