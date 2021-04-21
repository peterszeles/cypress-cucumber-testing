@bootstrap-tag
  Feature: The bootstrap components feature

    I want to test the bootstrap components

  Scenario: Testing the bootstrap components
    Given I am on "https://getbootstrap.com/docs/5.0/forms/form-control/" page
    Then Set email at label "Email address" to "testUser@testemail.domain"
    Then Set textarea at label "Example textarea" to "Lorem ipsum."
    Then I click on "Overview" link
    And Set email at label "Email address" to "testUser@testemail.domain"
    # type into command line: export CYPRESS_EXAMPLE_PASSWORD=myExamplePassword && echo $CYPRESS_EXAMPLE_PASSWORD
    # And Set password to "CYPRESS_EXAMPLE_PASSWORD"
    # And I click on "Check me out"
    # And I click on "Submit" button
