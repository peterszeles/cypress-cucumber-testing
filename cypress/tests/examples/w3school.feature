@bootstrap-tag
  Feature: The bootstrap components feature

    I want to test the bootstrap components

  Scenario: Testing the bootstrap components
    Given I am on "https://www.w3schools.com/" page
    Then I click on "Learn Bootstrap"
    And I click on "Accept all & visit the site"
    And I click on "Learn Bootstrap 4"
    Then I scroll to 'bottom' at 'leftmenuinnerinner'
    Then I scroll 'Top Tutorials' into view
    And I see "BS4 Containers" on the page
    And I click on "BS4 Containers" link
