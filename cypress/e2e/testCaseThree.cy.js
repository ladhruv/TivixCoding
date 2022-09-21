describe("Test Case Three", () => {
  it("[Given] I'm a user on rent form page [When] I input value for First Name, Last Name, Email and Credit Card longer than accpeted [Then] I'm able to see appropriate error message", () => {
    cy.visit("http://qalab.pl.tivixlabs.com");
    cy.get("input[id='pickup']").type("2022-09-20");
    cy.get("input[id='dropoff']").type("2022-09-21");
    cy.get(".btn").click();
    cy.wait(500);
    cy.get('a[href="/details/4"]').click();
    cy.wait(500);
    cy.get('a[href="/rent/4"]').click();
    cy.get("input[id='name']").type(
      "thisisalongfirstnamelongerthanfiftycharacterstoseethevalidationerrormessage"
    );
    cy.get("input[id='last_name']").type(
      "thisisalonglastnamelongerthanfiftycharacterstoseethevalidationerrormessage"
    );
    cy.get("input[id='card_number']").type("doesthisfieldacceptcharacters");
    cy.get("input[id='email']").type("thisistoseeifthisisvalidemail");
    cy.get(".btn").click();
    cy.get("h5[class='alert alert-danger']").contains("Name value is too long");
    cy.get("h5[class='alert alert-danger']").contains(
      "Last name value is too long"
    );
    cy.get("h5[class='alert alert-danger']").contains(
      "Please provide valid email"
    );
    cy.get("h5[class='alert alert-danger']").contains(
      "Card number value is too long"
    );
  });
});
