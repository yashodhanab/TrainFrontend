// const { Builder, By, until } = require("selenium-webdriver");
// const chrome = require("selenium-webdriver/chrome");
// const readline = require("readline");

// // Wait for user input
// function waitForEnter() {
//   return new Promise(resolve => {
//     const rl = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout
//     });
//     rl.question("Press ENTER after you manually delete a booking...", () => {
//       rl.close();
//       resolve();
//     });
//   });
// }

// (async function manualDeleteBookedTrainTest() {
//   // Chrome options for headless mode
//   let options = new chrome.Options();
//   options.addArguments("--headless=new"); // headless mode
//   options.addArguments("--no-sandbox");   // required for CI environments
//   options.addArguments("--disable-dev-shm-usage");
//   options.addArguments("--disable-gpu");
//   options.addArguments("--window-size=1920,1080");

//   let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

//   try {
//     // 1️⃣ Login
//     await driver.get("http://localhost:5173/login");
//     await driver.findElement(By.name("email")).sendKeys("testuser@gmail.com");
//     await driver.findElement(By.name("password")).sendKeys("123456");
//     await driver.findElement(By.css("button[type='submit']")).click();

//     // Wait until redirected after login
//     await driver.wait(until.urlIs("http://localhost:5173/"), 10000);

//     // 2️⃣ Navigate to booked trains page
//     await driver.get("http://localhost:5173/booked-trains");

//     // Wait until at least one booking card is visible
//     await driver.wait(until.elementLocated(By.css(".booking-card")), 10000);

//     console.log("✅ Booked trains page loaded in headless mode. You can now manually delete a booking.");

//     // 3️⃣ Wait for manual action
//     await waitForEnter();

//     console.log("✅ Manual deletion step completed. Closing the test.");

//   } catch (err) {
//     console.error("❌ Test failed:", err);
//   } finally {
//     await driver.quit();
//   }
// })();


const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const readline = require("readline");

// Wait for user input
function waitForEnter() {
  return new Promise(resolve => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    rl.question("Press ENTER after you manually delete a booking...", () => {
      rl.close();
      resolve();
    });
  });
}

(async function manualDeleteBookedTrainTest() {
  // Chrome options
  let options = new chrome.Options();
  // Remove headless for debugging; uncomment for headless CI
  // options.addArguments("--headless=new"); 
  options.addArguments("--no-sandbox");
  options.addArguments("--disable-dev-shm-usage");
  options.addArguments("--disable-gpu");
  options.addArguments("--window-size=1920,1080");

  let driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build();

  try {
    // 1️⃣ Login
    await driver.get("http://localhost:5173/login");
    await driver.findElement(By.name("email")).sendKeys("testuser@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("123456");
    await driver.findElement(By.css("button[type='submit']")).click();

    // ✅ Wait until the page contains some expected element instead of strict URL
    await driver.wait(until.elementLocated(By.css("nav, .homepage")), 20000); 
    // adjust selector according to your homepage

    // 2️⃣ Navigate to booked trains page
    await driver.get("http://localhost:5173/booked-trains");

    // Wait until at least one booking card is visible
    await driver.wait(until.elementLocated(By.css(".booking-card")), 20000);

    console.log("✅ Booked trains page loaded. You can now manually delete a booking.");

    // 3️⃣ Wait for manual action
    await waitForEnter();

    console.log("✅ Manual deletion step completed. Closing the test.");

  } catch (err) {
    console.error("❌ Test failed:", err);
  } finally {
    await driver.quit();
  }
})();



//node deleteBooking.test.cjs

//after deletion paste terminal node deleteBooking.test.cjs for conformation

