const {Builder, By} = require('selenium-webdriver');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://getbootstrap.com/docs/5.0/forms/form-control/');
    try {
        await driver.findElement(By.xpath(`//label[contains(.,'Email address')]//following::input[1]`)).sendKeys("testUser@testemail.domain");
        await sleep(1000);
        await driver.findElement(By.xpath(`//label[contains(.,'Example textarea')]//following::textarea[1]`)).sendKeys("Lorem ipsum.");
        await sleep(1000);
    } finally {
        await driver.quit();
    }
})();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
