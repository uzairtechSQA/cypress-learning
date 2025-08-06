it("POM DEMO",function(){


cy.visit('https://nexa-smartscreen-staging.web.app/authentication/sign-in')
cy.get('#\\:r0\\:').type('nicejibran32+smart1@gmail.com')
cy.get('#\\:r1\\:').type('12345678')
cy.get('.MuiButtonBase-root').click()
})