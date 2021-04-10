import {And, Then} from "cypress-cucumber-preprocessor/steps";

Then(`I scroll to {string} at {string}`, (v1,v2) => {
    cy.get('div[id='+ v2 + ']').scrollTo(v1,{ duration: 2000 })
});

And(`I scroll to {string} at {string}`, (v1,v2) => {
    cy.get('div[id='+ v2 + ']').scrollTo(v1, { duration: 2000 })
});
