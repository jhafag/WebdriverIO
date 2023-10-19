Feature: the user buy a new product in Amazon Website


@createAcount
  Scenario Outline: As a user, I can create a new acount

    Given I am on the create acount page
    When I register with <username>, <useremail>, <password>, <passwordCheck>
    Then I should see a message confirmation <message>

    Examples:
      | username | useremail|password| passwordCheck|message|
      | tomsmith | miboxa5375@klanze.com| 12345Jose  |12345Jose||


@loginPage
  Scenario Outline: As a user, I can login 

    Given I am on the login page
    When I login with <useremail>, <password>
    Then I should see a message <message>
    
    Examples:
       | useremail            |password    |message|
       | miboxa5375@klanze.com| 12345Jose  |Hola, tomsmith|
       | miboxa5375@klanze.com| 12345Jose  |Hola tomsmith|