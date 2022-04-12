const { createYield } = require("typescript");

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
    cy.visit("/").get(":nth-child(1) > .nav-link").click().url("/a11y");
  });
});
