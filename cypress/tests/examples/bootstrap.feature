@bootstrap-tag
  Feature: The bootstrap components feature

    I want to test the bootstrap components

  Scenario: Testing the bootstrap components
    Given I am on "https://getbootstrap.com/docs/5.0/forms/form-control/" page
    Then Set email at label "Email address" to "testUser@testemail.domain"
    Then Set textarea at label "Example textarea" to "Lorem ipsum."
