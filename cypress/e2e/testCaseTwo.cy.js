describe("Test Case Two", () => {
  it("[Given] I'm a user on tivilabs page with a list of cars available [When] I click on rent button for a car [Then] I'm able to see cars detail", () => {
    cy.visit("http://qalab.pl.tivixlabs.com");
    cy.get("input[id='pickup']").type("2022-09-20");
    cy.get("input[id='dropoff']").type("2022-09-21");
    cy.get(".btn").click();
    cy.wait(500);
    cy.get('a[href="/details/4"]').click();
    cy.wait(500);
    cy.get("div[class='card-header']").contains("Toyota Aygo");
    cy.get("h5[class='card-title']").contains(
      "Company: Foster, Chavez and Brooks"
    );
    cy.get("p[class='card-text']").contains("Price per day: 25$");
    cy.get("p[class='card-text']").contains("Location: Germainy, Berlin");
    cy.get("p[class='card-text']").contains("License plate: 811 LCX");
    cy.get("h6").contains(" Pickup date: 2022-09-20");
    cy.get("h6").contains(" Dropoff date: 2022-09-21");
  });
});
