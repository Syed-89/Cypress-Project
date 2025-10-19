class Account{


elements={
customerDropDown:() =>cy.get('button.action.switch').first(),
accountlink:() =>cy.get('div.customer-menu>ul.header.links>li:nth-of-type(1)').first(),
myAccount:() =>cy.get('ul.nav.items>li:nth-of-type(1)'),
myOrders:() =>cy.get('ul.nav.items>li:nth-of-type(2)'),
myDownloadAbleProducts:() =>cy.get('ul.nav.items>li:nth-of-type(3)'),
myWishList:() =>cy.get('ul.nav.items>li:nth-of-type(4)'),
addressBook:() =>cy.get('ul.nav.items>li:nth-of-type(6)'),
accountInformation:() =>cy.get('ul.nav.items>li:nth-of-type(7)'),
storedPaymentMethods:() =>cy.get('ul.nav.items>li:nth-of-type(8)'),
myProductReview:() =>cy.get('ul.nav.items>li:nth-of-type(10)'),
Editbtn:()=>cy.get('[class="action edit"]').first(),
firstName:() =>cy.get('[name="firstname"]'),
lastName:() =>cy.get('[name="lastname"]'),
saveBtn:() =>cy.get('[title="Save"]'),
errorMsg:() => cy.get('[data-bind="html: $parent.prepareMessageForHtml(message.text)"]')


}

clickOnMyAccountlink(){

    cy.wait(2000)
    this.elements.customerDropDown().click()
    cy.wait(2000)
    this.elements.accountlink().click()
}




clickOnEditAI(){

this.elements.Editbtn().click();

}

updateTheAccountInformation(firstName,lastName){

this.elements.Editbtn().click();
this.elements.firstName().type(firstName);
this.elements.lastName().type(lastName);
this.elements.saveBtn().click();

}


}
export default Account;