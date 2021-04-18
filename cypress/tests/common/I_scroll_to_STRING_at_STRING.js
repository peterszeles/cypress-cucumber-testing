import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`I scroll to {string} at {string}`, (v1,v2) => {
    cy.get('div[id='+ v2 + ']').scrollTo(v1,{ duration: 2000 })
});

When(`I scroll to {string} at {string}`, (v1,v2) => {
    cy.get('div[id='+ v2 + ']').scrollTo(v1,{ duration: 2000 })
});

Then(`I scroll to {string} at {string}`, (v1,v2) => {
    cy.get('div[id='+ v2 + ']').scrollTo(v1,{ duration: 2000 })
});

And(`I scroll to {string} at {string}`, (v1,v2) => {
    cy.get('div[id='+ v2 + ']').scrollTo(v1, { duration: 2000 })
});
