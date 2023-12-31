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
newsLetterSubscriptions:() =>cy.get('ul.nav.items>li:nth-of-type(11)')

}

clickOnMyAccountlink(){

    cy.wait(3000)
    this.elements.customerDropDown().click()
    cy.wait(3000)
    this.elements.accountlink().click()
}


}

export default Account;