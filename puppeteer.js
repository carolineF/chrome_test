const puppeteer = require('puppeteer');

(async () => {
    const brower = await puppeteer.launch();
    const page = await brower.newPage();
    await page.goto('https:www.baidu.com');
    await page.screenshot({ path: 'baidu.png' })

    await brower.close();
})();