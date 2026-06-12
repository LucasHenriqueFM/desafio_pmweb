import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

const reserva = {
    data_checkin: "2026-06-20",
    data_checkout: "2026-06-22",
    quantidade_hospedes: "3",
    quarto: "deluxe",
    nome: "Usuário de teste",
    email: "teste@gmail.com",
    telefone: "4199999999",
    valor_total: "900.00",
    
};

Given("que estou na página de reservas", () => {
    cy.visit("https://lets-teste-qa.lovable.app/");
});

When("informo uma data válida de check-in", () => {
    cy.get(':nth-child(1) > .w-full')
    .type(reserva.data_checkin)
});

And("informo uma data válida de check-out", () => {
    cy.get('.mt-4 > :nth-child(2) > .w-full')
    .type(reserva.data_checkout);
});

And("informo a quantidade de hóspedes", () => {
    cy.get('.mt-4 > :nth-child(3) > .w-full')
        .click()
        .type('{ctrl}a{backspace}{rightarrow}')
        .type(reserva.quantidade_hospedes),{ timeout: 10000 };
});

And('seleciono um quarto "Standard, Deluxe ou Suíte Presidencial"', () => {
    cy.get(':nth-child(4) > .w-full')
        .select(reserva.quarto)
    cy.get('.border-t > dd')
        .should('contain.text', reserva.valor_total);
});

And("preencho o nome completo", () => {
    cy.get('.md\\:col-span-2')
        .type(reserva.nome);
})

And("preencho um e-mail", () => {
    cy.get('[placeholder="E-mail"]')
        .type(reserva.email);
});

And("preencho um telefone", () => {
    cy.get('[placeholder="Telefone"]')
        .type(reserva.telefone);
});

And("clicar no botão confirmar reserva", () => {
    cy.get('.bg-slate-900')
        .click();
});

Then("devo visualizar uma mensagem de sucesso", () => {
    cy.contains("Reserva confirmada com sucesso!")
    cy.get('.fixed')
        .should("be.visible");
});

And("a reserva deve ser exibida na aba CRM", () => {
    cy.get('[href="/crm"]')
        .click();
    cy.get('.flex > .w-full')
        .type(reserva.nome)
});