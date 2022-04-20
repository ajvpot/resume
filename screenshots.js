const puppeteer = require('puppeteer');
const statik = require('node-static');
const http = require('http');

(async () => {

    let browser = await puppeteer.launch({headless: false})
    let file = new (statik.Server)(__dirname + "/build");

    let server = http.createServer(function (req, res) {
        file.serve(req, res);
    });

// stupid hack
    server.listen(3000);
    server.port;
    await new Promise((r, f) => {
        server.on('listening', r);
        server.on('error', f);
    })

    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:3000');
    await page.waitForNavigation({waitUntil: 'networkidle2'});
    await page.screenshot({path: 'screenshot.png'});


    await browser.close();
    server.close();
})();