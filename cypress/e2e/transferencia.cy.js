describe('Transferencias', ()=> {
    beforeEach(()=> {
        cy.visit('/')
        cy.LoginWithValidCredentials()
    })
    it('Deve transferir quando informo dados e valor válidos', () => {
        //Act
        cy.performTransfer('Maria Oliveira', 'João da Silva', '11')
        //Assert
        cy.CheckMessageInToast('Transferência realizada!')
    })

    it('Deve apresentar erro quando não informar token para transferencia acima de 5000', () => {
        //Act
        cy.performTransfer('Maria Oliveira', 'João da Silva', '5011')
        //Assert
        cy.CheckMessageInToast('Autenticação necessária para transferências acima de R$5.000,00.')
    })
})