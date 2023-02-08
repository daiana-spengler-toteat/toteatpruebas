describe("Login", () => {
  
   beforeEach(() => {
           cy.visit("https://resdev.toteat.com/")
      })
  
      it("validar logo", () => {
        cy.get("[class='logoTT tt-xs']").should('exist')
      })

      it("login toteat - usuario inválido", () => {
        cy.get("[id='toggleMenu']").click()
        cy.get("[class='toticon toticon-persona2 tt-xs']").click()
        cy.get("[class='isotipoTT size24a']").eq(0).click()
        cy.get("[type='email']").type('daiana@toteat')
        cy.get("[type='password']").type('12341234')
        cy.get("button[type='submit']").click()
        cy.url().should('include', '/resdev.toteat.com/#/logintoteat')
       cy.get("[id='mensajeSplashContainer']").should('be.visible').contains('El usuario o contraseña son incorrectos. Por favor inténtelo nuevamente.')
      })

      it("login toteat - clave inválida", () => {
        cy.get("[id='toggleMenu']").click()
        cy.get("[class='toticon toticon-persona2 tt-xs']").click()
        cy.get("[class='isotipoTT size24a']").eq(0).click()
        cy.get("[type='email']").type('daiana@toteat.com')
        cy.get("[type='password']").type('12121212')
        cy.get("button[type='submit']").click()
        cy.url().should('include', '/resdev.toteat.com/#/logintoteat')
       cy.get("[id='mensajeSplashContainer']").should('be.visible').contains('El usuario o contraseña son incorrectos. Por favor inténtelo nuevamente.')
      })

      it("login toteat - usuario mandatorio", () => {
        cy.get("[id='toggleMenu']").click()
        cy.get("[class='toticon toticon-persona2 tt-xs']").click()
        cy.get("[class='isotipoTT size24a']").eq(0).click()
        cy.get("[type='password']").type('12341234')
        cy.get("button[type='submit']").should('be.disabled')
      })


      it("login toteat - clave mandatoria", () => {
        cy.get("[id='toggleMenu']").click()
        cy.get("[class='toticon toticon-persona2 tt-xs']").click()
        cy.get("[class='isotipoTT size24a']").eq(0).click()
        cy.get("[type='email']").type('daiana@toteat.com')
        cy.get("button[type='submit']").should('be.disabled')
      })
      
      
      it("login toteat - ok", () => {
        cy.get("[id='toggleMenu']").click()
        cy.get("[class='toticon toticon-persona2 tt-xs']").click()
        cy.get("[class='isotipoTT size24a']").eq(0).click()
        cy.get("[type='email']").type('daiana@toteat.com')
        cy.get("[type='password']").type('12341234')
        cy.get("button[type='submit']").click()
        cy.get("[id='intercom_chat_activator']").should('be.visible')
      })

      it("login comm", () => {
        cy.login()
      })
      

     /* it("login gmail - ok", () => {
       // cy.get("[id='toggleMenu']").click()
        //cy.get("[class='toticon toticon-persona2 tt-xs']").click()
        cy.userLoginWithGmail()      
       // cy.get("[class='googleSignIn']").eq(1).click()
      })*/
      
    })
  