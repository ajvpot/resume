const puppeteer = require('puppeteer');

(async () => {
    let browser = await puppeteer.launch({headless: true})

    await new Promise(r => setTimeout(r, 5000));

    const page = await browser.newPage();

    await page.emulate({viewport: {width: 1920, height: 1080}});
    await page.goto('http://127.0.0.1:3000/resume/index.html', {waitUntil: 'networkidle0'});
    await page.screenshot({path: 'screenshot-desktop.png'});

    await page.emulate(puppeteer.devices['iPhone X']);
    await page.goto('http://127.0.0.1:3000/resume/index.html', {waitUntil: 'networkidle0'});
    await page.screenshot({path: 'screenshot-mobile.png'});

    await page.emulate(puppeteer.devices['iPad Pro landscape']);
    await page.goto('http://127.0.0.1:3000/resume/index.html', {waitUntil: 'networkidle0'});
    await page.screenshot({path: 'screenshot-tablet.png'});

    await browser.close();
})();
