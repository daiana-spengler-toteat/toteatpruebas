
describe("tomarPedidos", () => {

  it("abrir mesa", () => {
    cy.login()
    cy.get(":nth-child(2) > .vgpIcono > .bg05").click()
    cy.get("#confirmHeader").contains("Abrir Mesa")
    cy.get("[class='fprimario']").should('be.visible').click()
    cy.get(":nth-child(2) > .itemTxtCont").should('be.visible').click()
    cy.get(":nth-child(1) > .itemTxtCont").should('be.visible').click()
    cy.comparacionString("[class='plato']", ":nth-child(1) > .itemTxtCont")
  })


  /* 
   let elementText1, elementText2
   
   cy.get("[class='plato']").invoke('text').then((text2)=>{elementText2 = text2})
   cy.get(":nth-child(1) > .itemTxtCont").invoke('text').then((text1)=>{
    if (expect(text1).to.eq(elementText2)) {
        cy.get("[class='botonConfirmar']").click()
    }
  })

  it("comparacion de String", () => {
    cy.comparacionString("[class='plato']",":nth-child(1) > .itemTxtCont")
  })*/


})