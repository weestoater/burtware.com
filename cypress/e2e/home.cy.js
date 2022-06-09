describe("burtware.com: test homepage", () => {
  it("- opens successfully", () => {
    cy.visit("/").contains("burtware.com");
  });

  it("- it has a link to About page", () => {
    cy.visit("/").get(".nav-link").should("contain", "About");
  });
  it("-- link takes you to the About page", () => {
    cy.visit("/").get(":nth-child(2) > .nav-link").click().url("/about");
  });

  it("- it has a link to A11y page", () => {
    cy.visit("/").get(".nav-link").should("contain", "A11y");
  });
  it("-- link takes you to the A11y page", () => {
    cy.visit("/").get(":nth-child(3) > .nav-link").click().url("/a11y");
  });

  it("- it has a link to Football page", () => {
    cy.visit("/").get(".nav-link").should("contain", "Football");
  });
  it("-- link takes you to the Football page", () => {
    cy.visit("/").get(":nth-child(4) > .nav-link").click().url("/football");
  });

  it("- it has a link to React page", () => {
    cy.visit("/").get(".nav-link").should("contain", "React");
  });
  it("-- link takes you to the React page", () => {
    cy.visit("/").get(":nth-child(5) > .nav-link").click().url("/react");
  });
});
