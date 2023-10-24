Project 8

1. Project Description
Project 8 is designed to check the functionality of the “Order A Cab” feature of the Urban Routes app using test automation - emulating manual case testing. The results of the requests are then checked against the expectations to determine successes or failures, according to how the server requests are handled. The code is set in such a way as to run the tests both on Chrome and Firefox.

2. Requirements and Setup
In order to use this project you are required to:
	-Have knowledge of the JavaScript programming language - the entire project is written in JavaScript.
	-Have an active internet connection on your device to be able to make requests to the server.

You also need to install the following the following softwares on your device:
	-Visual Studio Code (VS Code) - the source-code editor used to make the project in order to visualize and execute or edit the code if required.
	-Node Package Manager (NPM) - a JavaScript package manager to install this projects’ dependencies through the projects' package.json file. 
	-WebdriverIO (WDIO) - a test automation framework used to simplify the syntax of the code and make it more readable, as well as allow straightforward End-to-End (E2E) testing, letting us test the application’s functionality thoroughly.
	
In order to execute the project you need to clone the new repo from GitHub to your local computer: 
	-Open your preferred terminal emulator. Use GitBash if on Windows.
	-Create a directory to store the repository using the mkdir command.
	-Clone the repository. The command you use will depend on the authentication strategy that you’re using. For SSH, use the following: 
	git clone git@github.com:username/hm08-qa-us.git
	-Run npm install from the console in your folder. 

3. Configuration
	-Open VS Code, select “Open Folder” and then select the hm08-qa-us folder that you cloned to your computer.
	-Replace the URL in the wdio.conf.js file with the unique link generated after the launch of a new Urban Routes server.
	-Open the “test/spec” folder.
	-Open the createAnOrder.e2e.js file.

4. Running the Tests
This test should run the code for the 9 test cases one after the other:
	-Type “npm run wdio” in the terminal console of VS Code to check if the code works and if the actual result matches the expected result. All the tests should pass and have a green checkmark.
The tests are named: - “should set the addresses”
- “should select supportive plan”
- “should fill in the phone number”
- “should add a credit card”
- “should write a message to the driver”
- “should order a blanket and handkerchiefs”
- “should order 2 ice creams”
- “should have the car search modal displayed”
- “should show the driver info in the modal after waiting”

5. Test Cases 
Test 1: Setting the addresses
The “from” field has the input address “East 2nd Street, 601” - PASSED
The “to” field has the input address “1300 1st St” - PASSED

Test 2: Selecting Supportive plan
The “supportive” plan option is selected - PASSED

Test 3: Filling in the phone number
The phone number is filled in - PASSED

Test 4: Adding a Credit Card
A card is added as a payment method - PASSED

Test 5: Writing a message for the driver
A message is written for the driver - PASSED

Test 6: Ordering a blanket and handkerchiefs
The “Add Blanket and handkerchiefs” option is selected - PASSED

Test 7: Ordering two ice creams
The Count of Ice Creams in the order is 2 - PASSED

Test 8: The car search modal appears
The car search modal is displayed - PASSED

Test 9: Waiting for the driver info to appear in the modal
The driver information is displayed - PASSED

6. Code Style
The code will be explained in two parts: one describing the selectors used in page.js, one describing the code in createAnOrder.e2e.js.

Part 1: page.js
Most of the selectors were already defined and divided into categories. The page also contains the functions used to fill the addresses and phone number. The categories are Inputs, Buttons, Modals and Functions. I added a “Misc” category. I will explain the locators I added to the page.

Inputs
cardNumberField: ‘#number’ : Locates the element with the “number” id in the Urban Routes Source Code which is used to store the string with the credit card number - hence the name cardNumberField selected using the camelCase format, as will be the case for all the other elements below.

messageToDriver: ‘#message’ : Locates the element with the “message” id in the Urban Routes Source Code, which is used to store the string with the message for the driver - hence messageToDriver.

cardCode: '#code.card-input' : Locates the element with the “code” id and refined with the “card-input” class in the Urban Routes Source Code, because the “code” id appeared twice in the code with distinct purposes - this ensures we selected the one related to the storage of the string with the card’s CVV - hence cardCode.

Buttons
supportivePlanButton: 'div=Supportive' : Locates the div element “Supportive” in the source code used to label the specific “Supportive” plan option and makes it available as a button to be clicked in the main code in createAnOrder.e2e.js when called on.

paymentMethodButton: '//div[@class="pp-text"]' : This XPath locator is used to locate the payment button element under the class “pp-text”.

addCard: '//div[contains(text(), "Add card")]' : This XPath locator is used to identify the button with the string name “Add card” and sets it. 

linkButton: 'button=Link' : Locates the button “Link” in order to be used in the main code.

addBlanket: 'div=Blanket and handkerchiefs' : Locates the div element “Blanket and handkerchiefs” to be used as a button to be clicked in the main code.

iceCreamButton: 'div=+' : Locates every div element “+” in the source code. There exists many instances of it, but the related test is only about the iceCream being incremented to 2 in the Cab Order - hence the name since we do not care for removing ice creams in that test - it is the only button that will be used in relation to iceCreams. While the test is technically successful - there will be 2 Ice Creams if that button is clicked twice, and with this selector, it will work. It will just possibly add other things as well, since this selector tags multiple elements.

closeButton: 'div.payment-picker.open > div.modal > div.section.active > button' : Starting with this selector, the elements required to use occurred several times in the source code, making it difficult to pick just the one that was needed. However an alternate method getting the selectors was employed by using the Chrome Dev Tools to locate exactly the wanted items in the source code, and using the “Copy Selector” function - giving a selector typically in the style of a chain of children of the previous element, like a file path. It is not necessary to have the entire exact path however, so the only parts that were retained for this method of acquiring the selectors from this point on was to cut the superfluous parts, and only retaining enough of the path to uniquely identify the element. It only needs to uniquely identify one element in the code, not provide a full path from the root of the code, especially when it could change easily with an update. Whereas providing just what is needed diminishes the chance of the selector breaking with an update. 

orderButton: 'div.smart-button-wrapper > button > span.smart-button-main' : Locates the button needed to finally order a taxi once the payment method and phone number are filled up.

Misc
paymentMethod: 'div.pp-button.filled > div.pp-value > div.pp-value-text' : Locates the element that displays the payment method selected.

iceCreamNumber: '.counter .counter-value' : Locates the number of ice cream buckets added to the order.

carSearch: 'div.order.shown > div.order-body > div.order-header > div > div.order-header-title' : Locates the “Car Search” element that appears once the order is finally made.

driverInfo: 'div.order.shown > div.order-body > div.order-subbody > div.order-buttons > div:nth-child(1)' : Locates the driver’s information that should appear once the car search window disappears.

Part 2: createAnOrder.e2e.js
This file already had a partial written code for two test cases: setting the address and filling the phone number. Each test case has been named according to their respective expected result. Redundant lines will not be explained further.

const page = require('../../page');
const helper = require('../../helper') : This code imports the page.js and helper.js modules. The require function takes a string argument that specifies the location of the module relative to the current directory where the project’s file is. In this case, we’re specifying that the module is located in the same directory as our test file. “const” declares the invariability of this function. The code cannot not run properly without these two modules.

describe('Create an order', () => { : It describes the suite of test cases enumerated by the "it" functions.

it('should set the addresses', async () => { : it sets the name for the test case. Async is here to define a function that returns a promise - specifically the use of await.

await browser.url(`/`) : The await operator is used to wait for a promise and get its fulfillment value. browser.url(`/`) tells the code to use the URL attached in the wdio.conf.js file.

await page.fillAddresses('East 2nd Street, 601', '1300 1st St') : Fetches the “fillAddresses” function from page.js and establishes the values of the address fields.

await expect($(page.fromField)).toHaveValue('East 2nd Street, 601') : Tells the code to expect the selected field from page.js to have the input value. 

const supportivePlanButton = await $(page.supportivePlanButton): Defines as constant the button for supportivePlan based on its definition in the Urban Routes source code though the selector from page.js. This function will be used again for other elements within the code.

await supportivePlanButton.waitForDisplayed() : Waits for the supportive plan button to be displayed before being clicked.

await supportivePlanButton.click() : This clicks the specified button.

await expect(supportivePlanButton).toBeSelected : This function expects the selected button to be selected.

const phoneNumber = helper.getPhoneNumber("+1") : This uses a function from the helper.js file created in order to generate a random phone number. The (+1) is the country code supposed to be added to the randomly generated phone number.

await expect(await helper.getElementByText(phoneNumber)).toBeExisting() : Expects the function from helper.js to have generated a random phone number which now exists in the phone number field.

await cardNumberField.setValue('123412341234') : Sets the cardNumberField’s value to “123412341234”. setValue will be used again to set other values within the code.

await expect(paymentMethod).toHaveText('Card') : Expects the paymentMethod to have the “Card” option selected by checking through the text. This allows us to check whether Case Test 4 was successful.

await browser.pause(5000) : Forces a pause in code execution by doing nothing for 5000 milliseconds. It was added to the code to solve a minor conflict when running the test on Firefox, where the browser would not be able to click the addBlanket button because it was obscured by another element. This pause allows enough time for the problem element to be cleared, and the click can then proceed normally. 

await expect(addBlanket).toBeSelected : Expects the addBlanket button to be selected. This allows us to check whether Case Test 6 was successful.

await expect(carSearch).toBeDisplayed : Expects the carSearch modal to be displayed. This allows us to check whether Case Test 8 was successful.