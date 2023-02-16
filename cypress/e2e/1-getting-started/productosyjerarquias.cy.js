//const { beforeEach } = require("mocha")

describe("Crear producto y jerarquía", () => {

    beforeEach(() => {
        cy.login()
        cy.get("[id='toggleMenu']").click()
        cy.get(".resp640.acordion > .acTitulo > :nth-child(2)").click()
        cy.get("[ng-bind='t.m1_64']").click()
        cy.get(".titulo").should('be.visible').contains("Productos")
    })

    const options_log_collector = {
        collectTypes: ["cons:warn", "cons:error"]
        }
        require('cypress-terminal-report/src/installLogsCollector')(options_log_collector)
    

    it("Crear Producto", () => {
        // agregar datos producto
        cy.get(".areaInput > .lineaShow > .lineaContent > :nth-child(1) > .ng-pristine").type('1200')
        cy.get(".areaInput > .lineaShow > .lineaContent > :nth-child(2) > .ng-pristine").type('Producto test')
        cy.get(".areaInput > .lineaShow > .lineaContent > :nth-child(3) > .ng-pristine").type('Descripción producto test')
        cy.get(".areaInput > .lineaShow > .lineaContent > :nth-child(4) > .ng-pristine").type('3')
        cy.get(".areaInput > .lineaShow > .lineaContent > :nth-child(5) > .ng-pristine").type('1.8')
        cy.get(".areaInput > .lineaShow > .lineaContent > .size5 > .ng-pristine").click()
        cy.get("#selectorBulk").select([2])
        cy.get(".areaInput > .lineaShow > .editLinea > .toticon").click()
        cy.get("[ng-click='grabarProductos()']").click()
        cy.wait(7000)
        //Buscar producto
        cy.get(".areaInput > .lineaShow > .lineaContent > :nth-child(1) > .ng-valid").type('1200')
        cy.get(".filtroBulk > .toticon").click()
        cy.wait(3000)
        //validar producto agregado
        cy.get(":nth-child(1) > .ng-pristine").should('be.visible').invoke('val').then((text1) => {
            expect(text1).contains("1200")
             })
        cy.get(".areaShow > .lineaShow > .lineaContent > :nth-child(2) > .ng-pristine").should('be.visible').invoke('val').then((text1) => {
                expect(text1).contains("Producto test")
            })
        cy.get(".areaShow > .lineaShow > .lineaContent > :nth-child(3) > .ng-pristine").should('be.visible').invoke('val').then((text1) => {
                expect(text1).contains("Descripción producto test")
            })
        cy.get(".areaShow > .lineaShow > .lineaContent > :nth-child(4) > .ng-pristine").should('be.visible').invoke('val').then((text1) => {
                expect(text1).contains("3")
            })
        cy.get(".areaShow > .lineaShow > .lineaContent > :nth-child(5) > .ng-pristine").should('be.visible').invoke('val').then((text1) => {
                expect(text1).contains("1.8")
            })
        cy.get(".areaShow > .lineaShow > .lineaContent > .size5 > .ng-pristine").should("be.checked")
   })


   it.only("Crear Producto Duplicado", () => {

    
    // agregar datos producto
    cy.get(".areaInput > .lineaShow > .lineaContent > :nth-child(1) > .ng-pristine").type('1200')
    cy.get(".areaInput > .lineaShow > .lineaContent > :nth-child(2) > .ng-pristine").type('Producto test')
    cy.get(".areaInput > .lineaShow > .lineaContent > :nth-child(3) > .ng-pristine").type('Descripción producto test')
    cy.get(".areaInput > .lineaShow > .lineaContent > :nth-child(4) > .ng-pristine").type('3')
    cy.get(".areaInput > .lineaShow > .lineaContent > :nth-child(5) > .ng-pristine").type('1.8')
    cy.get(".areaInput > .lineaShow > .lineaContent > .size5 > .ng-pristine").click()
    cy.get("#selectorBulk").select([2])
    cy.get(".areaInput > .lineaShow > .editLinea > .toticon").click()

    //cy.get(console.log).contains('Clave Duplicada en nuevo')
   // cy.window().then((win) => {cy.spy(win.console, "Duplicado") })
   
})


    it("Eliminar Producto", () => {
        //Buscar producto agregado
        cy.get(".areaInput > .lineaShow > .lineaContent > :nth-child(1) > .ng-valid").type('1200')
        cy.get(".filtroBulk > .toticon").click()
        cy.wait(3000)
        //Eliminar producto
        cy.get(".toticon-trash").click()
        cy.wait(2000)
        cy.get(".fprimario").click()
        cy.get("[ng-click='grabarProductos()']").click()
   
     })

    })


