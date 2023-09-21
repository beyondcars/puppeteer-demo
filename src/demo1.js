import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch({
        // headless: 'new'
        headless: false
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com.tw');
    await page.screenshot({ path: './screenshot/google.png' });

    await browser.close();
})();