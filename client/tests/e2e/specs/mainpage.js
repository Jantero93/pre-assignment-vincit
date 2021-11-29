// https://docs.cypress.io/api/introduction/api.html

describe('Navigation bar states', () => {
  it('Open application', () => {
    cy.visit('/');
    cy.contains('a', 'Application').should(
      'have.css',
      'background-color',
      'rgb(0, 0, 0)'
    );
  });

  it('Active navbar tab changes color', () => {
    cy.contains('a', 'Description')
      .click()
      .should('have.css', 'background-color', 'rgb(0, 0, 0)');

    cy.contains('a', 'About me')
      .click()
      .should('have.css', 'background-color', 'rgb(0, 0, 0)');
  });
});
