describe(
  "11_mobile_dropdown_open_close",
  {
    viewportHeight: 1000,
    viewportWidth: 340,
  },
  () => {
    it("Navigate_home_mobile", () => {
      cy.visit("http://localhost:1234/");
      cy.get(".main__titleheading1").should("be.visible");
    });
    it("click_drop_down_open", () => {
      cy.get(".click__dropdown").click();
      cy.wait(200).get(".dropdown__content").should("be.visible");
    });
    it("click_drop_down_close", () => {
      cy.get(".click__dropdown").click();
      cy.wait(100).get(".dropdown__content").should("not.be.visible");
    });
  }
);
