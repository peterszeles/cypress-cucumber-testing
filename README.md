# Cypress Cucumber testing DSL

This is a project for UI/UX purposes with Cypress and Cucumber frameworks.
There is implemented a unique DSL (Domain Specific Language) usage placed in folder cypress/tests/common.


## Installation

- Install [NodeJS](https://nodejs.org/en/) \
- Use the  [CLI](https://www.w3schools.com/whatis/whatis_cli.asp) to install this project.

```bash
git clone https://github.com/peterszeles/cypress-cucumber-testing.git
npm intall
```

## Running

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

## Supported Gherkin commands

Given, When, Then, And

| Command | Description |
| ------- | ----------- |
| I am on "string" page |  | 
| I click on input "string" |  | 
| I click on Nth "string" |  | 
| I click on Nth "string" button |  | 
| I click on "string" |  | 
| I click on "string" button |  | 
| I click on "string" link |  | 
| I scroll "string" into view |  | 
| I scroll to "string" at "string" |  | 
| I see "string" in the title |  | 
| I see "string" on the page |  | 
| I select from dropdown "string" "string" |  | 
| I select "string" |  | 
| Label "string" is present |  | 
| Set input at label "string" to "string" |  | 
| Set input "string" to "string" |  | 

```gherkin

```

## Develop a Gherkin command

## Usage

```gherkin
@custom-tag
  Feature: The name of the feature

    Here goes the description

  Scenario: The name or description of scenario
    Given I am on "https://getbootstrap.com/docs/5.0/forms/form-control/" page
    When I set input at label "Email address" to "testUser@testemail.domain"
    Then I set input at label "Example textaera" to "Lorem ipsum."
```

## Google Sheets format
To use Google Sheets for implementig test scenarios
- create a developer google site
- cleate a google sheet
- add your developer specific email
- use the sheets/snippet.js file to run
```bash
node sheets/snippet.js
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
