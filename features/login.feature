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
  Scenario: As a user, I can login 

    Given I am on the login page
    When I login with <useremail>, <password>
    Then I should see a message confirmation 

       | useremail            |password    |
       | miboxa5375@klanze.com| 12345Jose  |
      

@debug
  Scenario: el usuario inicia sesion en facebook

    Given El usuario ingresa a la pagina
    When El usuario inicia con lo datos

@register
  Scenario Outline: el usuario crea una cuenta en facebook

    Given El usuario ingresa a la pagina
    When El usuario registra los datos <nombre>, <apellido>, <correo>, <correoconf>, <contra>
    Then El usuario ve el mensaje de error <mensaje>

    Examples:
      | nombre | apellido| correo                    |correoconf                 |contra|mensaje                                                    |
      | Kevin  | bello!  | elDueñoDeBello@vacunas.com|elDueñoDeBellos@vacunas.com|liga  |Tus direcciones de correo no coinciden. Inténtalo de nuevo.|
      | foobar | barfoo  | 123345@cero.com           |                           |1234  |Vuelve a escribir tu dirección de correo electrónico.      |
