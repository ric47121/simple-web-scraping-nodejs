const puppeteer = require('puppeteer');

(async()=>{
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()

    await loadUrl(page, "https://dolarhoy.com/cotizaciondolarblue", browser)
})();

async function loadUrl(page, url, browser){
    await page.goto(url, {
        waitUntil: ["load", "domcontentloaded", "networkidle0", "networkidle2"]
    })

    // let buscar = ".section > .esction.inner" 
    let buscar = ".is-child > .value" 
    const valorEncontrado = await page.$eval(buscar, el => el.innerHTML);
    await console.log("dolar blue: " , valorEncontrado)
    await browser.close();
}
