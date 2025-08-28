const { Builder, By, until } = require('selenium-webdriver');

(async function loginTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    // Go to your frontend (replace with your URL)
    await driver.get("http://localhost:5173/login");

    // Fill login form
    await driver.findElement(By.name("email")).sendKeys("testuser@gmail.com");
    await driver.findElement(By.name("password")).sendKeys("123456");
    await driver.findElement(By.css("button[type='submit']")).click();

    // Wait until dashboard loads
    await driver.wait(until.urlContains("/dashboard"), 5000);
    console.log("✅ Login test passed");
  } catch (err) {
    console.error("❌ Login test failed:", err);
  } finally {
    await driver.quit();
  }
})();
