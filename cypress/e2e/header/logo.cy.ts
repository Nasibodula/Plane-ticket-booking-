describe("Header Logo Component", () => {
  beforeEach(() => {
    cy.visit("/"); // Navigate to the homepage before each test
  });

  it("Should render the FlightRoutes logo in the header", () => {
    cy.get(".header-logo img")
      .should("be.visible") // Verify the logo is visible
      .and("have.attr", "alt", "FlightRoutes Logo"); // Check if alt text is correct
  });

  it("Should navigate to the homepage when clicking the header logo", () => {
    cy.visit("/contact"); // Visit another page
    cy.get(".header-logo a").click(); // Click the logo in the header
    cy.url().should("eq", Cypress.config().baseUrl + "/"); // Check redirection to the homepage
  });
});
