Cypress.Commands.add('CheckMessageInToast', message => {
    cy.get('.toast').should('have.text', message)
})

Cypress.Commands.add('selectComboBoxOption', (fieldLabel, option) => {
    cy.get(`label[for="${fieldLabel}"]`).parent().as(`campo-${fieldLabel}`)
    cy.get(`@campo-${fieldLabel}`).click()
    cy.get(`@campo-${fieldLabel}`).contains(option).click()
})