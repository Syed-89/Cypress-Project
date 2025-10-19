import Login from "../Pages/LoginPage"

const login = new Login()

describe('login page test cases',()=>{

beforeEach(()=>{

cy.visit('/')


})



it('check the username field',()=>{

  login.clickSignIn()
  login.elements.userName().should('be.visible')
  cy.log('Successfully username field is visible')

})

it('check the password field',()=>{

  login.clickSignIn()
  login.elements.passWord().should('be.visible')
  cy.log('Successfully password field is visible')


})

it('check the sign in button',()=>{
    
   login.clickSignIn()
   login.elements.signInBtn().should('be.visible')
   cy.log('Successfully sign in button is visible')


})

it('login with valid credentials',()=>{

 
      // Access and use jsonData he
   cy.fixture('Users.json').then((jsonData)=>{   
   login.clickSignIn()
   login.dologin(jsonData.validUser.name,jsonData.validUser.password)
   login.clickSignButton()
   login.getTitle('Home Page')
   cy.log("Successfullt login with valid credentials")

   })

})

it('login with invalid credentials',()=>{

   cy.fixture('Users.json').then((jsonData)=>{
   login.clickSignIn()
   login.dologin(jsonData.invalidUser.name, jsonData.invalidUser.password)
   login.clickSignButton()
   login.geterrorMsg('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
   cy.log('login failed with invalid user')
   })

})


})
