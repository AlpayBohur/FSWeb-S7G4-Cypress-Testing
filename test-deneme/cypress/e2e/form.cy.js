describe("Form Teatleri",()=>{
    it("Formu doldurup göndermek",()=>{
        cy.visit("http://localhost:3000/");

        cy.get("[data-test=name-input]").type("ali veli");
        cy.get("[data-test=name-input]").should("have.value","ali veli");

        cy.get("[data-test=email-input]").type("tzirw@example.com");
        cy.get("[data-test=email-input]").should("have.value","tzirw@example.com");

        cy.get("[data-test=password-input]").type("passToTest");
        cy.get("[data-test=password-input]").should("have.value","passToTest");

        cy.get("[data-test=term-checkbox]").check();

        cy.get("[data-test=submit-button]").click();
        cy.get('[data-test="name-input"]').should('have.value', '');
        cy.get('[data-test="email-input"]').should('have.value', '');
        cy.get('[data-test="password-input"]').should('have.value', '');
        cy.get('[data-test="term-checkbox"]').should('not.be.checked');
    });

      // Boş girdi doğrulama testi
    it("Doğrulama - Boş inputlar", () => {
       
        cy.visit("http://localhost:3000/");
        cy.get("[data-test=submit-button]").click();
    // "Required" hatası mevcut mu kontrol et
    cy.get("[data-testid=term-error]").should("have.text","Terms of use must be accepted");
  });
    });
