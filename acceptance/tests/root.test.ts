import puppeteer from 'puppeteer';

describe('root page', function () {
  it('should show an array of greetings', async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const resp = await page.goto('http://localhost:3000');
    const json = await resp.json();
    expect(json[0].phrase).toContain('Hello World');

    await browser.close();
  })
});
