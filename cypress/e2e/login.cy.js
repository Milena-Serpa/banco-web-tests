describe('template spec', () => {
  it('login com dados válidos deve permitir entrada no sistema', () => {
    //Arrange (preparacao)
    cy.visit('http://localhost:4000')
    //Act (ação)
    cy.get('#username')
      .click()
      .type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()
    //Assert (checagem do resultado esperado)
    cy.contains('h4', 'Realizar Transferência')
  })
})