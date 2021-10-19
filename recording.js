const puppeteer = require('puppeteer');
async function start(){
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    const navigationPromise = page.waitForNavigation()



    await page.goto('https://getbootstrap.com/')

    await page.setViewport({ width: 1920, height: 969 })

    await page.waitForSelector('.container-xxl > #bdNavbar > .navbar-nav:nth-child(1) > .nav-item:nth-child(1) > .nav-link')
    await page.click('.container-xxl > #bdNavbar > .navbar-nav:nth-child(1) > .nav-item:nth-child(1) > .nav-link')

    await page.screenshot({
        path: "a.png"
    })

    await page.waitForSelector('.container-xxl > #bdNavbar > .navbar-nav:nth-child(1) > .nav-item:nth-child(3) > .nav-link')
    await page.click('.container-xxl > #bdNavbar > .navbar-nav:nth-child(1) > .nav-item:nth-child(3) > .nav-link')
    await page.waitFor(1000);
    await page.screenshot({
        path: "b.png"
    })

    await page.waitForSelector('.container-xxl > #bdNavbar > .navbar-nav:nth-child(1) > .nav-item:nth-child(1) > .nav-link')
    await page.click('.container-xxl > #bdNavbar > .navbar-nav:nth-child(1) > .nav-item:nth-child(1) > .nav-link')
    await page.screenshot({
        path: "c.png"
    })

    await page.waitForSelector('.container-xxl > #bdNavbar > .navbar-nav:nth-child(1) > .nav-item:nth-child(2) > .nav-link')
    await page.click('.container-xxl > #bdNavbar > .navbar-nav:nth-child(1) > .nav-item:nth-child(2) > .nav-link')
    await page.screenshot({
        path: "d.png"
    })

    await browser.close()

}

start();