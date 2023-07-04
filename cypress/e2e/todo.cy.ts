describe('Template AnimalSave', () => {
  it('Deve entrar na home', () => {
    cy.visit('/')
  })

  it('Deve entrar no login', () => {
    cy.visit('/login')
  })

  it('Deve entrar no cadastro', () => {
    cy.visit('/register')
  })
})