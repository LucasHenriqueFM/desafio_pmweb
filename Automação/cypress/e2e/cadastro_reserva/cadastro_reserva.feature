Feature: Cadastrar uma reserva

Scenario: cadastrar reserva
    Given que estou na página de reservas
    When informo uma data válida de check-in
    And informo uma data válida de check-out
    And informo a quantidade de hóspedes
    And seleciono um quarto "Standard, Deluxe ou Suíte Presidencial"
    And preencho o nome completo
    And preencho um e-mail
    And preencho um telefone
    And clicar no botão confirmar reserva
    Then devo visualizar uma mensagem de sucesso 
    And a reserva deve ser exibida na aba CRM