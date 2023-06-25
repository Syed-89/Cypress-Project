import Account from "../Pages/AccountPage";
import Login from "../Pages/LoginPage";

const account= new Account();
const login = new Login();

describe('account test cases', ()=>{

beforeEach(()=>{

cy.visit('/')
cy.wait(2000)
login.clickSignIn()
login.dologin('alenpaul490@example.com','Test123456#')
login.clickSignButton()
account.clickOnMyAccountlink()

})

it('check the Myaccount link',()=>{

account.elements.myAccount().should('be.visible')

})

it('check the MyOrder link',()=>{

account.elements.myOrders().should('be.visible')


})


it('check the MyDownloadAbleProducts link',()=>{

    account.elements.myDownloadAbleProducts().should('be.visible')

})

it('check the MyWishlist link',()=>{

    account.elements.myWishList().should('be.visible')
 
})

it('check the addressbook link',()=>{

    account.elements.addressBook().should('be.visible')


})

it('check the account information link',()=>{

account.elements.accountInformation().should('be.visible')


})

it('check stored paymentmethods link',()=>{

    account.elements.storedPaymentMethods().should('be.visible')


})

it('checkMyProductReview link',()=>{

    account.elements.myProductReview().should('be.visible')


})

it('check NewsLetterSubscription link',()=>{


    account.elements.newsLetterSubscriptions().should('be.visible')

})


})