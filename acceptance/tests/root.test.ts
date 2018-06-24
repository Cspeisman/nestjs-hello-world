import puppeteer from 'puppeteer';

describe('root page', function () {
  it('should show an array of greetings', async () => {
    const selector = '[data-testid="greeting"]';
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    await page.waitFor(selector);
    const greeting = await page.$eval(selector, e => e.innerHTML);
    expect(greeting).toContain('Hello World!');
    await browser.close();
  })
});
