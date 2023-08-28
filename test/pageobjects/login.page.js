
class LoginPage{


    get inputUsername () {
        return $('//android.widget.EditText[@content-desc="test-Username"]');
    }

    get inputPassword () {
        return $('//android.widget.EditText[@content-desc="test-Password"]');
    }

    get btnSubmit () {
        return $('//android.view.ViewGroup[@content-desc="test-LOGIN"]');
    }

    get txtProduct(){
        return $('//android.widget.TextView[@text="PRODUCTS"]')
    }

    get btnMenu(){
        return $('//android.view.ViewGroup[@content-desc="test-Menu"]/android.view.ViewGroup/android.widget.ImageView')
    }

    get btnLogout(){
        return $('//android.view.ViewGroup[@content-desc="test-LOGOUT"]/android.widget.TextView')
    }
    get txtError(){
        return $('//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView')
    }
    get btnItem(){
        return $('//android.widget.TextView[@content-desc="test-Item title"]')
    }

}
module.exports = new LoginPage()