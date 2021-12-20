describe('In the shppong list users can', () => {
  it('Visits the Shopping List', () => {
    cy.visit('http://localhost:3000');
    cy.contains('Shopping List');
  });
  it('Add items to cart', () => {
    cy.contains('Add To Cart').click();
    cy.get('#total').should('have.text', '199');
    cy.get('#quantity').should('have.text', '4');
  });
  it('Remove items to cart', () => {
    cy.contains('Remove From Cart').click();
    cy.get('#total').should('have.text', '0');
    cy.get('#quantity').should('have.text', '5');
  });
  it('Buy items', () => {
    cy.contains('Add To Cart').click();
    cy.get('#total').should('have.text', '199');
    cy.get('#quantity').should('have.text', '4');
    cy.contains('CheckOut').click();
    cy.get('#total').should('have.text', '0');
    cy.get('#quantity').should('have.text', '4');
  });
});
