import Login from "../Pages/LoginPage"

const login = new Login()

describe('login page test cases',()=>{

beforeEach(()=>{

cy.visit('/')

})

it('check the username field',()=>{

  login.clickSignIn()
  login.elements.userName().should('be.visible')

})

it('check the password field',()=>{

  login.clickSignIn()
  login.elements.passWord().should('be.visible')


})

it('check the sign button',()=>{
    
   login.clickSignIn()
   login.elements.signInBtn().should('be.visible')


})

it('login with valid credentials',()=>{

   login.clickSignIn()
   login.dologin('alenpaul490@example.com','Test123456#')
   login.clickSignButton()
   login.getTitle('Home Page')

})

it('login with invalid credentials',()=>{


   login.clickSignIn()
   login.dologin('alenpaul490@example.com','Test123456')
   login.clickSignButton()
   login.geterrorMsg('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')


})



})