const { Builder, By, until } = require("selenium-webdriver");
const readline = require("readline");

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
  let driver = await new Builder().forBrowser("chrome").build();

  try {
    // 1️⃣ Login
    await driver.get("http://localhost:5173/login");
    await driver.findElement(By.name("email")).sendKeys("testuser@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("123456");
    await driver.findElement(By.css("button[type='submit']")).click();

    // Wait until redirected after login
    await driver.wait(until.urlIs("http://localhost:5173/"), 10000);

    // 2️⃣ Navigate to booked trains page
    await driver.get("http://localhost:5173/booked-trains");

    // Wait until at least one booking card is visible
    await driver.wait(until.elementLocated(By.css(".booking-card")), 10000);

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


//to run this test , ensure you have selenium-webdriver installed and a ChromeDriver available in your PATH.
// You can install selenium-webdriver via npm: 
// npm install selenium-webdriver 
// Make sure your frontend is running at http://localhost:5173 and you have a user with bookings to test.
// This test requires manual intervention to delete a booking, as automating deletion without confirmation is not feasible.
// After deleting a booking manually, press ENTER in the terminal to complete the test.

// Then run this script with Node.js:
// node deleteBooking.test.cjs