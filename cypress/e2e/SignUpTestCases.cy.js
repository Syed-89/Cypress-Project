import SignUp from "../Pages/SignUpPage"

const signup = new SignUp();

describe('sign up testcases',()=>{

beforeEach(()=>{

cy.visit('/')

})

it('check create an account link',()=>{

signup.elements.createAnAccountLink().should('be.visible')

})

it('check firstname field',()=>{

signup.clickOnCreateAnAccountLink()
signup.elements.firstName().should('be.visible')

})

it('check lastname field',()=>{


    signup.clickOnCreateAnAccountLink()
    signup.elements.lastName().should('be.visible')


})

it('check email field',()=>{


    signup.clickOnCreateAnAccountLink()
    signup.elements.email().should('be.visible')


})

it('check password field',()=>{


    signup.clickOnCreateAnAccountLink()
    signup.elements.passWord().should('be.visible')


})

it('check confirmpassword field',()=>{


    signup.clickOnCreateAnAccountLink()
    signup.elements.confirmPassword().should('be.visible')


})

it('Signup with valid credentials',()=>{
   
   
   signup.createAnAccount('Test','user','testuser1234573@gmail.com','%A12345678%','%A12345678%')
   signup.clickOnCreateBtn()
   signup.getSuccessMsg('Thank you for registering with Main Website Store.')
})

it('Signup with already exist user',()=>{

   
   signup.createAnAccount('Test','user','testuser123457@gmail.com','%A12345678%','%A12345678%')
   signup.clickOnCreateBtn()
   signup.getSuccessMsg('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.')

})

it('check mandatory fields error message', ()=>{

    signup.clickOnCreateAnAccountLink()
    cy.wait(4000)
    signup.clickOnCreateBtn()
    signup.mandatoryFieldValidation('This is a required field.')


})

})