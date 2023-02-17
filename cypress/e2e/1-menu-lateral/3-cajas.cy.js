describe("Crear y eliminar Caja", () => {

    beforeEach(() => {
        cy.login()
        cy.get("[id='toggleMenu']").click()
        cy.get("[titulo='Restaurants'] > .acTitulo > :nth-child(2)").click()
        cy.get("[ng-bind='t.m5000_123']").click()
        cy.get(".titulo").should('be.visible').contains("Configuración de Cajas")
    })


    it("Crear Caja", () => {
        cy.get("[ng-click='agregar()']").click()
        cy.get("[ng-model='caja.nm']").type('Caja Test')
    })

})