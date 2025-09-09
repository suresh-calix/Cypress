describe('Visual Test - Calix Industry Standards Page', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
    cy.visit('/resources/industry-standards.html');

    // Wait for all images to be visible
    cy.get('img', { timeout: 15000 }).should('be.visible');

    // Extra buffer wait
    cy.wait(7000);
  });

  it('should match full page snapshot', () => {
    cy.compareSnapshot({
      name: 'calix-fullpage',
      testThreshold: 0.3, // Allow 20% difference
    });
  });

  it('should match main content section', () => {
    cy.get('main').screenshot('calix-main-content');
    cy.compareSnapshot({
      name: 'calix-main-content',
      testThreshold: 0.3, // Allow 20% difference
    });
  });
});
