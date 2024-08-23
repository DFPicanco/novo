/// <reference types="Cypress"/>

describe('Teste de aceitação de cookies', () => {
    beforeEach(() => {
      // Visita a página que contém o banner de cookies
      cy.visit('https://www.latamairlines.com/br/pt/');
    });
  
    it('Deve aceitar todos os cookies', () => {
      // Verifica se o banner de cookies é exibido e clica no botão para aceitar
      cy.get('.accept-cookies').should('be.visible').click();
  
      // Verifica se o banner de cookies desapareceu após aceitar
      cy.get('.accept-cookies').should('not.exist');
    });
  });

describe('Teste de busca de passagens', () => {
    beforeEach(() => {
        // Visitar a página que contém o formulário de busca de passagens
        cy.visit('https://www.latamairlines.com/br/pt/');
    });

    it('Deve buscar passagens com aeroportos e datas especificadas', () => {
        // Insere aeroportos de ida e volta
        cy.get('#aeroporto-ida').type('Aeroporto de São Paulo');
        cy.get('#aeroporto-volta').type('Aeroporto do Rio de Janeiro');
    
        // Insere datas
        cy.get('#data-ida').type('2024-10-01');
        cy.get('#data-volta').type('2024-10-10');
    
        // Insere o número de pessoas
        cy.get('#numero-pessoas').clear().type('1');
    
        // Clica no botão de buscar
        cy.get('#buscar-passagens').click();
    
        // Verifica se a busca foi realizada
        cy.url().should('include', 'resultados');
        cy.get('.resultado-busca').should('exist');
      });
    
      it('Deve permitir a opção de adicionar aeroportos próximos e voos diretos', () => {
        // Adiciona a opção de aeroportos próximos
        cy.get('#aeroportos-proximos').check();
    
        // Adiciona a opção de voos diretos
        cy.get('#voos-diretos').check();
    
        // Clica no botão de buscar
        cy.get('#buscar-passagens').click();
    
        // Verifica se as opções foram aplicadas
        cy.get('#aeroportos-proximos').should('be.checked');
        cy.get('#voos-diretos').should('be.checked');
      });
    });