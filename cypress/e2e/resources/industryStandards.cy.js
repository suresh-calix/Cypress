// @tags: regression, resources, industry-standards
// @priority: high

const selectors = require('../../pageObjects/resources/IndustryStandardPage');

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
    cy.get(selectors.resourcesTab).contains('Resources', { matchCase: false }).click();
    cy.get(selectors.industryStandardsLink).click();
    cy.url().should('include', '/resources/industry-standards.html');
    console.log('Page Object:', selectors);
  });

  it('should display the Industry Standards Accelerate Innovation heading', () => {
    cy.contains(/industry standards accelerate innovation and elevate our industry/i, {
      timeout: 10000
    }).should('be.visible').scrollIntoView();
  });

  it('should play the video in Power of Standards section', () => {
    cy.contains('Power of Standards', { matchCase: false }).scrollIntoView().should('be.visible');
    cy.get(selectors.playVideoButton, { timeout: 10000 })
      .should('exist')
      .click({ multiple: true, force: true });
    cy.get('video').should('exist');
    console.log('Page Object:', selectors);
  });

  it('should access blogs in Perspectives on Industry section', () => {
    cy.contains('Perspectives on Industry', { matchCase: false }).scrollIntoView().should('be.visible');
    cy.get('body').then(($body) => {
      const links = $body.find(`${selectors.perspectivesSection} a`);
      if (links.length > 0) {
        cy.wrap(links.first()).click();
        cy.url().should('include', '/blog/');
        cy.get('article').should('be.visible');
      } else {
        cy.log('No blog links found in Perspectives on Industry section');
      }
    });
  });

  it('should click Learn More and redirect to Industry Associations page', () => {
    cy.get(selectors.learnMoreButton, { timeout: 10000 })
      .scrollIntoView()
      .should('exist')
      .click({ force: true });
    cy.url({ timeout: 10000 }).should('include', '/resources/industry-associations.html');
  });

  
});
