
describe("tomarPedidos", () => {

  it("abrir mesa", () => {
    cy.login()
    cy.get(":nth-child(2) > .vgpIcono > .bg05").click()
    cy.get("#confirmHeader").contains("Abrir Mesa")
    cy.get("[class='fprimario']").should('be.visible').click()
    cy.get(":nth-child(2) > .itemTxtCont").should('be.visible').click()
    cy.get(":nth-child(1) > .itemTxtCont").should('be.visible').click()
    cy.comparacionString("[class='plato']", ":nth-child(1) > .itemTxtCont")
    cy.wait(4000)
    cy.get(".botonConfirmar").should('be.visible').click()
  })



})