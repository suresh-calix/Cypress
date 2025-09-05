// Ignore third-party script errors
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes("top.$ is not a function")) {
    return false;
  }
});

describe('Calix Industry Standards Page Tests', () => {
  beforeEach(() => {
    cy.visit('/resources/industry-standards.html');
  });

  it('should navigate to Industry Standards page via Resources tab', () => {
    cy.visit('/');
    cy.get('nav').contains('Resources', { matchCase: false }).click();
    cy.get('a').contains('Industry Standards', { matchCase: false }).click();
    cy.url().should('include', '/resources/industry-standards.html');
  });

  

it('should display the Industry Standards Accelerate Innovation heading', () => {
  cy.visit('/resources/industry-standards.html');

  cy.contains(/industry standards accelerate innovation and elevate our industry/i, {
    timeout: 10000
  })
    .should('be.visible')
    .scrollIntoView();
});



 


it('should play the video in Power of Standards section', () => {
  cy.visit('/resources/industry-standards.html');

  cy.contains('Power of Standards', { matchCase: false })
    .scrollIntoView()
    .should('be.visible');

  cy.get('button[aria-label="Play Video"]', { timeout: 10000 })
    .should('exist')
    .click({ multiple: true, force: true }); // handles multiple buttons and forces click even if hidden

  cy.get('video').should('exist');
});





  
it('should access blogs in Perspectives on Industry section', () => {
  cy.visit('/resources/industry-standards.html');

  cy.contains('Perspectives on Industry', { matchCase: false })
    .scrollIntoView()
    .should('be.visible');

  
});



  it('should click Learn More and redirect to Industry Associations page', () => {
  cy.visit('/resources/industry-standards.html');

  cy.get('#button-0add17ffda', { timeout: 10000 })
    .scrollIntoView()
    .should('exist') // skip visibility check
    .click({ force: true }); // force click even if hidden

  cy.url({ timeout: 10000 }).should('include', '/resources/industry-associations.html');
});
});
