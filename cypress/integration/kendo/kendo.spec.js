/// <reference types="Cypress" />

context('Kendo Angular app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should change the title on button click', () => {
    cy.get('h1').should('have.text', 'Hello World!');

    cy.get('.k-primary').click();

    cy.get('h1').should('have.text', 'Hello from Kendo UI!');
  });
});
