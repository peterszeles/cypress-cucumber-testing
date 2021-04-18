import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`I see {string} in the title`, title => {
  cy.title().should("include", title);
});

When(`I see {string} in the title`, title => {
  cy.title().should("include", title);
});

Then(`I see {string} in the title`, title => {
  cy.title().should("include", title);
});

And(`I see {string} in the title`, title => {
  cy.title().should("include", title);
});
