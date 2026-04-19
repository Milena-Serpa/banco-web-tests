describe('template spec', () => {
  beforeEach(() => {
    //Arrange (preparacao)
    cy.visit(cy.env('URL'))
  })
  it('login com dados válidos deve permitir entrada no sistema', () => {    
    //Act (ação)
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.get('#login-section > .btn').click()
    //Assert (checagem do resultado esperado)
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
  
  it('login com dados inválidos deve exibir mensagem de erro', () => {    
    //Act (ação)
    cy.fixture("credenciais").then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.contains('button', 'Entrar').click()
    //Assert (checagem do resultado esperado)
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})