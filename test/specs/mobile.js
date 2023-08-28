const loginPage = require("../pageobjects/login.page")

let username = "standard_user" 
let incorrectuser = "testing"
let password = "secret_sauce"

describe("login feature", async  () =>{

  beforeEach(async () => {
     await driver.launchApp()

  });

  afterEach(async () => {
    await driver.terminateApp("com.swaglabsmobileapp")

  });


    it("login with correct account", async ()=> {
      await loginPage.inputUsername.setValue(username)
      await loginPage.inputPassword.setValue(password)
      await loginPage.btnSubmit.click()

      //assert
     await expect(loginPage.txtProduct).toExist()
     await expect(loginPage.btnItem).toBeDisplayed()

     await loginPage.btnMenu.click()
     await loginPage.btnLogout.click()

       
    })

    it("login with incorrect account", async ()=> {
      await loginPage.inputUsername.setValue(incorrectuser)
      await loginPage.inputPassword.setValue(password)
      await loginPage.btnSubmit.click()
      await expect(loginPage.txtError).toExist()
    
    })
})