Feature: Login Page Elements
  As a user
  I want to verify the login page elements
  So that I can ensure they are ready for actions

  Background:
    Given you are on the login page

  Scenario: Validate login page elements are visible
    When the username field is displayed
    And the password field is displayed
    And the login button is displayed
    Then all login elements should be ready for user actions
