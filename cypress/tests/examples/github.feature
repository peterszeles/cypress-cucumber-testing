@custom-tag
Feature: The name of the feature

  Here goes the description

  Scenario: The name or description of scenario
    Given I am on "https://github.com/peterszeles/cypress-cucumber-testing" page
    When I click on "Go to file"
    Then I click on "cypress/fixtures/example.json"

  Scenario: Another scenario
    Given I am on "https://github.com/peterszeles/cypress-cucumber-testing/blob/master/cypress/fixtures/example.json" page
    Then I see "cypress-cucumber-testing" on the page
