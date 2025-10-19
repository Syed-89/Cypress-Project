import SignUp from "../Pages/SignUpPage"

const signup = new SignUp();

describe('sign up testcases',()=>{

beforeEach(()=>{

cy.visit('/')

})

it('check create an account link',()=>{

signup.elements.createAnAccountLink().should('be.visible')
cy.log("Create an account link is visible")

})

it('check firstname field',()=>{

signup.clickOnCreateAnAccountLink()
signup.elements.firstName().should('be.visible')
cy.log("FirstName field is visible")

})

it('check lastname field',()=>{


    signup.clickOnCreateAnAccountLink()
    signup.elements.lastName().should('be.visible')
    cy.log("LastName field is visible")


})

it('check email field',()=>{


    signup.clickOnCreateAnAccountLink()
    signup.elements.email().should('be.visible')
    cy.log("Email field is visible")


})

it('check password field',()=>{


    signup.clickOnCreateAnAccountLink()
    signup.elements.passWord().should('be.visible')
    cy.log("Password field is visible")


})

it('check confirmpassword field',()=>{


    signup.clickOnCreateAnAccountLink()
    signup.elements.confirmPassword().should('be.visible')
    cy.log("ConfirmPasswordField is visible")


})

it('Signup with new credentials',()=>{

   cy.fixture('SignUpUsers.json').then((jsonData)=>{
   signup.createAnAccount(jsonData.newUser.firstName,jsonData.newUser.lastName,jsonData.newUser.email,jsonData.newUser.passWord,jsonData.newUser.confirmPassWord)
   signup.clickOnCreateBtn()
   signup.elements.successMsg().should('have.text','Thank you for registering with Main Website Store.')
   cy.log("Successfully sign up with new credientials")
})
})

it('Signup with existing user',()=>{

   cy.fixture('SignUpUsers.json').then((jsonData)=>{
   signup.createAnAccount(jsonData.existingUser.firstName,jsonData.existingUser.lastName,jsonData.existingUser.email, jsonData.existingUser.passWord, jsonData.existingUser.confirmPassWord)
   signup.clickOnCreateBtn()
   signup.elements.successMsg().should('have.text','There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')
   cy.log("Sign up failed with existing email user details")

})
})

it('check mandatory fields error message', ()=>{

    const errorMsg='This is a required field.'
    signup.clickOnCreateAnAccountLink()
    cy.wait(4000)
    signup.clickOnCreateBtn()
    signup.elements.firstNameError().should('have.text', errorMsg)
    signup.elements.lastNameError().should('have.text', errorMsg)
    signup.elements.emailAddressError().should('have.text',errorMsg)
    signup.elements.passwordError().should('have.text',errorMsg)
    signup.elements.passwordConfirmationError().should('have.text', errorMsg)
    cy.log("Required field error message appears")


})

})