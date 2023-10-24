const page = require('../../page');
const helper = require('../../helper');

describe('Create an order', () => {
    it('should set the addresses', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        await expect($(page.fromField)).toHaveValue('East 2nd Street, 601');
        await expect($(page.toField)).toHaveValue('1300 1st St');
    })

    it('should select supportive plan', async () => {  
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        await expect(supportivePlanButton).toBeSelected;
    })

    it('should fill in the phone number', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        await expect(await helper.getElementByText(phoneNumber)).toBeExisting();
    })

    it('should add a credit card', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.click();
        const addCard = await $(page.addCard);
        await addCard.click();
        const cardNumberField = await $(page.cardNumberField);
        await cardNumberField.setValue('123412341234');
        const cardCode = await $(page.cardCode);
        await cardCode.setValue('12');
        const linkButton = await $(page.linkButton);
        await linkButton.click();
        const closeButton = await $(page.closeButton);
        await closeButton.click();
        const paymentMethod = await $(page.paymentMethod);
        await expect(paymentMethod).toHaveText('Card');
        
    })

    it('should write a message to the driver', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const messageToDriver = await $(page.messageToDriver);
        await messageToDriver.setValue('I hate this project so very much.');
        await expect(messageToDriver).toHaveValue('I hate this project so very much.');
    })

    it ('should order a blanket and handkerchiefs', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        const addBlanket = await $(page.addBlanket);
        await browser.pause(5000);
        await addBlanket.click();
        await expect(addBlanket).toBeSelected;
    })

    it ('should order 2 ice creams', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        const iceCreamButton = await $(page.iceCreamButton);
        await iceCreamButton.click();
        await iceCreamButton.click();
        const iceCreamNumber = await $(page.iceCreamNumber);
        await expect(iceCreamNumber).toHaveText('2');
    })

    it ('should have the car search modal displayed', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.click();
        const addCard = await $(page.addCard);
        await addCard.click();
        const cardNumberField = await $(page.cardNumberField);
        await cardNumberField.setValue('123412341234');
        const cardCode = await $(page.cardCode);
        await cardCode.setValue('12');
        const linkButton = await $(page.linkButton);
        await linkButton.click();
        const closeButton = await $(page.closeButton);
        await closeButton.click();
        const orderButton = await $(page.orderButton);
        await orderButton.click();
        const carSearch = await $(page.carSearch);
        await expect(carSearch).toBeDisplayed;
    })

    it ('should show the driver info in the modal after waiting', async () => {
        await browser.url(`/`)
        await page.fillAddresses('East 2nd Street, 601', '1300 1st St');
        const supportivePlanButton = await $(page.supportivePlanButton);
        await supportivePlanButton.waitForDisplayed();
        await supportivePlanButton.click();
        const phoneNumber = helper.getPhoneNumber("+1");
        await page.submitPhoneNumber(phoneNumber);
        const paymentMethodButton = await $(page.paymentMethodButton);
        await paymentMethodButton.click();
        const addCard = await $(page.addCard);
        await addCard.click();
        const cardNumberField = await $(page.cardNumberField);
        await cardNumberField.setValue('123412341234');
        const cardCode = await $(page.cardCode);
        await cardCode.setValue('12');
        const linkButton = await $(page.linkButton);
        await linkButton.click();
        const closeButton = await $(page.closeButton);
        await closeButton.click();
        const orderButton = await $(page.orderButton);
        await orderButton.click();
        const driverInfo = await $(page.driverInfo);
        await expect(driverInfo).toBeDisplayed;
    })

})
