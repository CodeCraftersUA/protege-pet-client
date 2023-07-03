describe('My first test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true);
  
  });

  it('My second test', () => {
    it('Visits the Animal Save', () => {
      cy.visit('/');
    });
  });
});