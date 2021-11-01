import {HomePage} from "../Page_Objects/homepage";
import {Header} from "../Page_Objects/header";

describe(
    "11_mobile_dropdown_open_close",
    {
      viewportHeight: 1000,
      viewportWidth: 340,
    },
    () => {
const home = new HomePage();
const header = new Header();

      it("Navigate_home_mobile", () => {
        home.navigate();
        home.getMainTitleHeading().should("be.visible");
      });
      it("click_drop_down_open", () => {
        header.getMobileMenu().click();
        cy.wait(100)
        header.getDropContent().should("be.visible");
      });
      it("click_drop_down_close", () => {
        header.getMobileMenu().click();
        cy.wait(100)
        header.getDropContent().should("not.be.visible");
      });
    }
  );
  