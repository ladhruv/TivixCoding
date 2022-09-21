describe("Test Case One", () => {
  it("[Given] I'm a user on tivilabs page [When] I enter pickup and DropOff date [Then] I'm able to see a list of cars available", () => {
    cy.visit("http://qalab.pl.tivixlabs.com");
    cy.get("input[id='pickup']").type("2022-09-20");
    cy.get("input[id='dropoff']").type("2022-09-21");
    cy.get(".btn").click();
    cy.wait(500);
    cy.get("#search-results").find("tr").its("length").should("be.gte", 1);
  });
});
