const puppeteer = require('puppeteer');

(async () => {
    let browser = await puppeteer.launch({headless: true})

    const page = await browser.newPage();

    await page.goto('http://127.0.0.1:3000/resume', {waitUntil: 'networkidle0'});
    await page.screenshot({path: 'screenshot-desktop.png'});

    await page.emulate(puppeteer.devices['iPhone X']);
    await page.goto('http://127.0.0.1:3000/resume', {waitUntil: 'networkidle0'});
    await page.screenshot({path: 'screenshot-mobile.png'});

    await page.emulate(puppeteer.devices['iPad Pro landscape']);
    await page.goto('http://127.0.0.1:3000/resume', {waitUntil: 'networkidle0'});
    await page.screenshot({path: 'screenshot-tablet.png'});

    await browser.close();
})();