const puppeteer = require("puppeteer");

async  function start(){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const url = "http://getbootstrap.com";

    await page.goto(url);
    await page.pdf({
        path: "1.pdf"
    });
    await page.screenshot({
        path: "1.png"
    });
    await page.click("a[href='/docs/5.1/getting-started/introduction/']")
    await page.setViewport({
        width: 1920,
        height: 1080
    })
    await page.screenshot({
        path: "2.png"
    })
    await page.setViewport({
        width: 1280,
        height: 720
    })

    await page.screenshot({
        path: "3.png"
    })
    await  browser.close();
}



start();