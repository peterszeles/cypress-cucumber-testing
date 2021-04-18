import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given('I scroll {string} into view', (v1) =>{
    cy.get('body').contains(v1).scrollIntoView({ duration: 2000 });
});

When('I scroll {string} into view', (v1) =>{
    cy.get('body').contains(v1).scrollIntoView({ duration: 2000 });
});

Then('I scroll {string} into view', (v1) =>{
    cy.get('body').contains(v1).scrollIntoView({ duration: 2000 });
});

And('I scroll {string} into view', (v1) =>{
    cy.get('body').contains(v1).scrollIntoView({ duration: 2000 });
});
