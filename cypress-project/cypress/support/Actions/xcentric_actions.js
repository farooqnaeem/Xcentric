import data from '../../data/xcentric.json'
import xcentric_locator from '../locators/xcentric.json'
class xcentric {
    static openurl() {
        cy.visit(data.url)
    }

    static humBurgerIcon() {
        cy.wait(2000)
        cy.get(xcentric_locator.humBurgerIcon).click()
    }
    static contactUs() {
        cy.wait(2000)
        cy.get(xcentric_locator.contactUs).click()
    }
    static fillContactUsForm() {
        cy.get(xcentric_locator.selectInterest).click()
        cy.get(xcentric_locator.firstName).type(data.firstName)
        cy.get(xcentric_locator.emailAddress).type(data.emailAddress)
        cy.get(xcentric_locator.phoneNumber).type(data.phoneNumber)
        cy.get(xcentric_locator.country).type(data.country)
        cy.get(xcentric_locator.projectDetail).type(data.projectDetail)
        cy.get(xcentric_locator.website).type(data.website)
    }
    static sendRequest() {
        cy.get(xcentric_locator.sendRequest).click()
    }
}
export default xcentric
