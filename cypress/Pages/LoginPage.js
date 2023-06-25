class Login{

elements ={

signInLink:() => cy.get('li.authorization-link a').first(),
userName:() => cy.get('[name="login[username]"]'),
passWord:() => cy.get('[name="login[password]"]'),
signInBtn:() => cy.get('[class="action login primary"]'),
title:() => cy.title(),
errorMsg:() => cy.get('.message-error')
}


clickSignIn(){

this.elements.signInLink().click()


}

enterUserName(username){

this.elements.userName().type(username)

}

enterPassword(password){

this.elements.passWord().type(password)


}

dologin(username, passWord){

    this.enterUserName(username)
    this.enterPassword(passWord)


}

clickSignButton(){


this.elements.signInBtn().click()


}

getTitle(message){


this.elements.title().should('eq', message)

}

geterrorMsg(message){


this.elements.errorMsg().should('have.text', message)


}


}

export default Login;