describe('template spec', () => {
  beforeEach(() => {
    //Arrange (preparacao)
    cy.visit('http://localhost:4000')
  })
  it('login com dados válidos deve permitir entrada no sistema', () => {    
    //Act (ação)
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()
    //Assert (checagem do resultado esperado)
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
  
  it('login com dados inválidos deve exibir mensagem de erro', () => {    
    //Act (ação)
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('654321')
    cy.contains('button', 'Entrar').click()
    //Assert (checagem do resultado esperado)
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})