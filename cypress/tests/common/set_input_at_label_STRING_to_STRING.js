import {And, Then, When} from "cypress-cucumber-preprocessor/steps";

When(`Set Input at label {string} to {string}`, (v1, v2) => {
    cy.get("body").contains(v1).parent().within(() => {
        cy.get("input[type='text']").type(v2)
    })
});

Then(`Set Input at label {string} to {string}`, (v1, v2) => {
    cy.get("body").contains(v1).parent().within(() => {
        cy.get("input[type='text']").type(v2)
    })
});

And(`Set Input at label {string} to {string}`, (v1, v2) => {
    cy.get("div").contains(v1).parent().within(() => {
        cy.get("input[type='text']").type(v2)
    })
});

