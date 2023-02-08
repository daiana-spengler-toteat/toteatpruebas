// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



Cypress.Commands.add('login', () => {
    cy.visit("https://resdev.toteat.com/")
    cy.get("[id='toggleMenu']").click()
    cy.get("[class='toticon toticon-persona2 tt-xs']").click()
    cy.get("[class='isotipoTT size24a']").eq(0).click()
    cy.get("[type='email']").type('daiana@toteat.com')
    cy.get("[type='password']").type('12341234')
    cy.get("button[type='submit']").click()
})



Cypress.Commands.add('comparacionString', (element1,element2) => {
    let elementText1
    cy.get(element1).invoke('text').then((text1)=>{elementText1 = text1})
    cy.get(element2).invoke('text').then((text2)=>{
     if (expect(text2).to.eq(elementText1)) {
        cy.log('comparación ok')
     }
   })
})
