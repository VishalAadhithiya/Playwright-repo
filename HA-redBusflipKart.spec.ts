import test, { chromium, firefox} from '@playwright/test';

test('launch browser', async() => {
    const browser = await chromium.launch({headless: false})
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.redbus.in/')
    await page.waitForTimeout(3000)
    console.log(await page.title())
    
})

test('launch browser 2', async () => {
    const browser = await firefox.launch({ headless: false });
    const context = await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.flipkart.com/')
    await page.waitForTimeout(3000)
    console.log(await page.title())
});
