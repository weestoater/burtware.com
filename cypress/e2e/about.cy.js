describe('About page', () => {
    it("- opens successfully", () => {
        cy.visit("/about").contains("About burtware");
    })
});