let pup = require("puppeteer");

let gPage;
let gBrowser;
let email = "rijilem659@flmcat.com"; // this is a dummy email, enter your email id
let pass = ""; //enter your password

pup
  .launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    slowMo: 50,
  })
  .then(function (browser) {
    gBrowser = browser;
    return browser.pages();
  })
  .then(function (pagesArr) {
    gPage = pagesArr[0];
    return gPage.goto("https://www.hackerrank.com/auth/login");
  })
  .then(function(){
      return gPage.type("#input-1",email);
  })
  .then(function (){
      return gPage.type("#input-2",pass);
  })
  .then(function (){
      return Promise.all([
          gPage.waitForNavigation(),
          gPage.click("[data-analytics='LoginPassword']")
      ]);
  })
  .then(function (){
      return Promise.all([gPage.waitForNavigation(), gPage.click("[data-attr-1='interview-preparation-kit']"),]);
  })
  .then(function (){
      return gPage.waitForSelector("[data-attr1='warmup']");
  })
  .then(function (){
      return Promise.all([gPage.waitForNavigation(), gPage.click("[data-attr1='warmup']"),]);
  })
  .catch(function(err){
      console.log(err);
  })
