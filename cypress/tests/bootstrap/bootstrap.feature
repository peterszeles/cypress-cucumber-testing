@bootstrap-tag
  Feature: The bootstrap components feature

    I want to test the bootstrap components

  Scenario: Testing the bootstrap components
    Given I am on "https://getbootstrap.com/docs/5.0/forms/form-control/" page
    Then I set input at label "Email address" to "testUser@testemail.domain"
    Then I set input at label "Example textaera" to "Lorem ipsum."
