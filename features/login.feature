Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a flash message saying <message>

    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |

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
