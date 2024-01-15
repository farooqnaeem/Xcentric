import { And, Then } from 'cypress-cucumber-preprocessor/steps'
import xcentric from '../../Actions/xcentric_actions'

And(/^The user open the url$/, function () {
    xcentric.openurl()
});
And(/^The user click on humburger icon$/, function () {
  xcentric.humBurgerIcon()
});
Then(/^I click on contact us button in navigation$/, function () {
xcentric.contactUs()
});
Then(/^The user fill the contact us form$/, function () {
xcentric.fillContactUsForm()
});
Then(/^The user click on send request button$/, function () {
xcentric.sendRequest()
});