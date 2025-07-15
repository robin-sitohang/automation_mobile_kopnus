@login
Feature: Login Functionality

  Scenario Outline: As a user, I want to login with valid credentials
    Given I tap Allow on permission
    When I tap Ayo Mulai on welcome
    And I tap Login on welcome screen
    Then I should see login form
    When I input phone number
    And I input password
    And I tap Login button on login form
    Then I should be redirected to otp screen
    When I input otp number
    Then I should be redirected to home screen
