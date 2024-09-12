describe('TAT Customer Service Center', () => {
  beforeEach (() => {
    cy.visit('/src/index.html')
    })

  describe('verifies that the privacy policy page opens in another tab without the need for a click.', () => {
    it('privacy in a new page', () => {
      //cy.get('#privacy > a:nth-child(1)')
      cy.contains('a', 'Privacy Policy')
      .should('have.attr', 'href', 'privacy.html')
      .should('have.attr', 'target', '_blank')
    })
  })
    
  describe('access the privacy policy page by removing the target, then clicking on the link.', () => {
    it('privacy in the same tab', () => {
      cy.contains('a', 'Privacy Policy')
        .invoke('removeAttr', 'target')
        .click()
  
      cy.contains('h1', 'TAT CSC - Privacy Policy')
        .should('be.visible')
      })
    })
  
  describe('independently test the privacy policy page.', () => {
    it('privacy policy only', () => {
      cy.visit('/src/privacy.html')
  
      cy.contains('h1', 'TAT CSC - Privacy Policy')
        .should('be.visible')
      cy.contains('p','Talking About Testing')
        .should('be.visible')
      })
    })
})