# Cypress Cucumber testing DSL 🥒 🚀

This is a project for UI/UX purposes with Cypress and Cucumber frameworks.
There is implemented a unique DSL (Domain Specific Language) usage placed in folder cypress/tests/common.


## Installation ⚙️

- Install [NodeJS](https://nodejs.org/en/) \
- Use the  [CLI](https://www.w3schools.com/whatis/whatis_cli.asp) to install this project.

```bash
git clone https://github.com/peterszeles/cypress-cucumber-testing.git
npm intall
```

## Running ⏳

To open the Cypress UI use this command:
```bash
npx cypress open
```

To run a specific Gherkin test use this command:
```bash
cypress run --spec "**/filename.feature"
```

To run all Gherkin tests use this command:
```bash
npm test
```

## Supported Gherkin commands 🥒 🔦

Given, When, Then, And

| Command | Expression |
| --- | --- |
| Given / When / Then / And | I am on "string" page | 
| Given / When / Then / And | I click on input "string" | 
| Given / When / Then / And | I click on Nth "string" | 
| Given / When / Then / And | I click on Nth "string" button | 
| Given / When / Then / And | I click on "string" | 
| Given / When / Then / And | I click on "string" button | 
| Given / When / Then / And | I click on "string" link | 
| Given / When / Then / And | I login as "string" "string"| 
| Given / When / Then / And | I scroll "string" into view | 
| Given / When / Then / And | I scroll to "string" at "string" | 
| Given / When / Then / And | I see "string" in the title | 
| Given / When / Then / And | I see "string" on the page | 
| Given / When / Then / And | I select from dropdown "string" "string" | 
| Given / When / Then / And | I select "string" | 
| Given / When / Then / And | Label "string" is present | 
| Given / When / Then / And | Set email at label "string" to "string" | 
| Given / When / Then / And | Set input at label "string" to "string" | 
| Given / When / Then / And | Set input "string" to "string" | 
| Given / When / Then / And | Set password to "string" | 
| Given / When / Then / And | Set textarea at label "string" to "string" | 


## Develop a Gherkin command 💻
Use any JavaScript file in test/common folder as a template
```javascript
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given(`Expression {string}`, (str) => {
    /** Here goes the implementation of the Gherkin command
     * Use the Cypress documentation for implementing the test.
     * @str is the variable from inside the Expression. 
     *      You can use STRING or NUMBER
     *      as many as it is **/ 
    
});

When(`Expression {string}`, (str) => {
    /** Here goes the implementation of the Gherkin command
     * Use the Cypress documentation for implementing the test.
     * @str is the variable from inside the Expression.
     *      You can use STRING or NUMBER
     *      as many as it is **/

});

Then(`Expression {string}`, (str) => {
    /** Here goes the implementation of the Gherkin command
     * Use the Cypress documentation for implementing the test.
     * @str is the variable from inside the Expression.
     *      You can use STRING or NUMBER
     *      as many as it is **/

});

And(`Expression {string}`, (str) => {
    /** Here goes the implementation of the Gherkin command
     * Use the Cypress documentation for implementing the test.
     * @str is the variable from inside the Expression.
     *      You can use STRING or NUMBER
     *      as many as it is **/

});


```

## Usage ⚙️
Create a new folder at folder tests/common which describes the testing domain.
Inside in this new folder create a Gherkin file type .feature
```gherkin
@custom-tag
  # The NAME of the feature testing file  
  Feature: The name of the feature

    # The description   
    Here goes the description

  # First scenario
    Given I am on "https://github.com/peterszeles/cypress-cucumber-testing" page
    When I click on "Go to file"
    Then I click on "cypress/fixtures/example.json"
    
  # Second scenario
  Scenario: Another scenario
    Given I am on "https://github.com/peterszeles/cypress-cucumber-testing/blob/master/cypress/fixtures/example.json" page
    Then I see "cypress-cucumber-testing" on the page

```

## Google Sheets format 🗄
To use Google Sheets for implementig test scenarios
- create a developer google site
- cleate a google sheet
- add your developer specific email
- use the sheets/snippet.js file to run
```bash
node sheets/snippet.js
```

## Contributing 🥒 📐✂️✒️
You are welcome to contribute on this project. By contributing you can make testers life easyer 🙂 \
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License 🛒🔒
[MIT](https://choosealicense.com/licenses/mit/)

## Links 🔗
[KPI - Department of comupters and informatics](https://kpi.fei.tuke.sk/en) \
[Technical University of Kosice](https://www.tuke.sk/wps/portal)

