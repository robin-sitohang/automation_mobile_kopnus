@login
Feature: Login Functionality

  Scenario Outline: As a user, I want to login with valid credentials
    Given I tap Allow on permission
    When I tap Ayo Mulai on welcome
    And I tap Login on welcome screen
    Then I should see login form
