describe('template spec', () => {
  beforeEach(() => {
    //Arrange (preparacao)
    cy.visit('/')
  })
  it('login com dados válidos deve permitir entrada no sistema', () => {    
    //Act (ação)
    cy.LoginWithValidCredentials()
    //Assert (checagem do resultado esperado)
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })
  
  it('login com dados inválidos deve exibir mensagem de erro', () => {    
    //Act (ação)
    cy.LoginWithInvalidCredentials()
    //Assert (checagem do resultado esperado)
    cy.CheckMessageInToast('Erro no login. Tente novamente.')
  })
})