class SignUp{


elements={

createAnAccountLink:() => cy.get('ul.header.links> li:nth-of-type(3)>a').first(),
firstName:()=> cy.get('[name="firstname"]'),
lastName:()=> cy.get('[name="lastname"]'),
email:()=> cy.get('[id="email_address"]'),
passWord:()=> cy.get('[id="password"]'),
confirmPassword:()=> cy.get('[id="password-confirmation"]'),
createAnAccountBtn:()=> cy.get('[title="Create an Account"]'),
successMsg:()=>cy.get('[data-bind="html: $parent.prepareMessageForHtml(message.text)"]'),

firstNameError:()=> cy.get('[id="firstname-error"]'),
lastNameError:()=> cy.get('[id="lastname-error"]'),
emailAddressError:()=> cy.get('[id="email_address-error"]'),
passwordError:()=> cy.get('[id="password-error"]'),
passwordConfirmationError:()=> cy.get('[id="password-confirmation-error"]')



}

clickOnCreateAnAccountLink(){


    this.elements.createAnAccountLink().click()


}

enterFirstName(fname){


this.elements.firstName().type(fname)

}

enterLastName(lname){

this.elements.lastName().type(lname)


}

enterEmail(emailID){

this.elements.email().type(emailID)

}

enterPassWord(pass){


this.elements.passWord().type(pass)

}

enterConfirmPassword(confirmpass){

this.elements.confirmPassword().type(confirmpass)


}

clickOnCreateBtn(){

this.elements.createAnAccountBtn().click()

}

createAnAccount(fname, lname, emailID, pass, confirmpass){

    this.clickOnCreateAnAccountLink()
    this.enterFirstName(fname)
    this.enterLastName(lname)
    this.enterEmail(emailID)
    this.enterPassWord(pass)
    this.enterConfirmPassword(confirmpass)


}


}

export default SignUp;