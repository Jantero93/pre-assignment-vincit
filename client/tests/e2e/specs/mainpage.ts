describe('Basic functionality', () => {
  it('Click pages', () => {
    cy.visit('/');
    cy.contains('Submit');

    cy.contains('Description').click();
    cy.contains('description').click();

    cy.contains('About').click();
    cy.contains('about');
  });

  it('Show alert if end date is before start date', () => {
    cy.visit('/');
    cy.contains('Main Content');

    cy.get('#start-date').click().type('2020-09-09');
    cy.get('#end-date').click().type('2020-01-01');

    cy.on('window:alert', (message) => {
      expect(message).toBe('Invalid input');
    });
  });

  it('Click tabs', () => {
    cy.visit('/');

    cy.contains('Highest Trading Volume').click();
    cy.contains('Submit');

    cy.contains('Time Machine').click();
    cy.contains('Submit');
  });
});
