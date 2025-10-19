import Account from "../Pages/AccountPage";
import Login from "../Pages/LoginPage";

const account= new Account();
const login = new Login();

describe('account test cases', ()=>{

beforeEach(()=>{

cy.visit('/')
cy.wait(2000)
cy.fixture('Users.json').then((jsonData)=>{
login.clickSignIn()
login.dologinlogin.dologin(jsonData.validUser.name,jsonData.validUser.password);
login.clickSignButton()
account.clickOnMyAccountlink()

})

})

it('check the Myaccount link',()=>{

account.elements.myAccount().should('be.visible')
cy.log("MyAccount link is visible")

})

it('check the MyOrder link',()=>{

account.elements.myOrders().should('be.visible')
cy.log("MyOrder link is visible")


})


it('check the MyDownloadAbleProducts link',()=>{

    account.elements.myDownloadAbleProducts().should('be.visible')
    cy.log("MyDownloadAbleProducts link is visible")

})

it('check the MyWishlist link',()=>{

    account.elements.myWishList().should('be.visible')
    cy.log("MywishList link is visible")
 
})

it('check the addressbook link',()=>{

    account.elements.addressBook().should('be.visible')
    cy.log("MyAddressbook link is visible")


})

it('check the account information link',()=>{

account.elements.accountInformation().should('be.visible')
cy.log("AccountInformation link is visible")

})

it('check stored paymentmethods link',()=>{

    account.elements.storedPaymentMethods().should('be.visible')
    cy.log('Stored paymentmethods link is visible')


})

it('check MyProductReview link',()=>{

    account.elements.myProductReview().should('be.visible')
    cy.log('Myproductreview link is visible')


})

it('check the  edit account option ',()=>{

account.clickOnEditAI();
cy.log("Edit account option is clickable")
})

it('check the account information update',()=>{



account.updateTheAccountInformation('alanTest', '123');
account.elements.errorMsg().should('have.text', 'You saved the account information.')
cy.log("Account information has successfully updated")



})

})