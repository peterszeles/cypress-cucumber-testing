import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`Set password to {string}`, (v) => {
    cy.getValue(v).then((val) => {
        cy.get("input[type='password']").type(val,{force: true});
    });
});

When(`Set password to {string}`, (v1, v2) => {
    cy.getValue(v).then((val) => {
        cy.get("input[type='password']").type(val,{force: true});
    });
});

Then(`Set password to {string}`, (v1, v2) => {
    cy.getValue(v).then((val) => {
        cy.get("input[type='password']").type(val,{force: true});
    });
});

And(`Set password to {string}`, (v1, v2) => {
    cy.getValue(v).then((val) => {
        cy.get("input[type='password']").type(val, {force: true});
    });
});

