require('chromedriver');
var webdriver = require('selenium-webdriver');
let By = webdriver.By

let assert = require('assert')

//创建一个Chrome浏览器
let driver = new webdriver.Builder()
  .forBrowser('chrome')
  .build();

driver.get('https://www.baidu.com')

driver.findElement(By.id('kw')).then(searchInput => {
    searchInput.sendKeys('钻戒')
    driver.findElement(By.id('su')).then(submitBtn => {
        submitBtn.click();
    })
})