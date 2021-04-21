import {And, Then, When} from "cypress-cucumber-preprocessor/steps";

When(`I login as {string} / {string}`, (v1, v2) => {
    cy.getValue(v1).then((val1) => {
        cy.getValue(v2).then((val2) => {
            cy.get('input[name="login"]').type(val1);
            cy.get('input[name="password"]').type(val2);
            cy.get('inpyt[type="submit"]').contains("Sign in").click();
        });
    });
});

// sposob distribuce po dokonceni projektu, kde..? npm plugin, github..
// analyza loginu ako sa volaju elementy vseobecne a na co najroznejsich stankach, appkach.
// podpora, excelu, google sheets.
