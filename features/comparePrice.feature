Feature: the user buy a new product in Amazon Website

@comparePrice
  Scenario: As a user, I can compare shopping cart prices 

    Given I am on the products page
    When I add two products to shopping cart
    Then I should see the same price between total price and shopping cart