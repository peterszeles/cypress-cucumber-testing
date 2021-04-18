import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`Set Input {string} to {string}`, (v1, v2) => {
    cy.getValue(v2).then((val) => {
        cy.get('input[name=' + v1 + ']').type(val,{force: true});
    });
});

When(`Set Input {string} to {string}`, (v1, v2) => {
    cy.getValue(v2).then((val) => {
        cy.get('input[name=' + v1 + ']').type(val,{force: true});
    });
});

Then(`Set Input {string} to {string}`, (v1, v2) => {
    cy.getValue(v2).then((val) => {
        cy.get('input[name=' + v1 + ']').type(val,{force: true});
    });
});

And(`Set Input {string} to {string}`, (v1, v2) => {
    cy.getValue(v2).then((val) => {
        cy.get('input[name=' + v1 + ']').type(val, {force: true});
    });
});

