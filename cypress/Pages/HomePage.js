class Home{


elements={

mensMenu:()=> cy.xpath('//*[@class="ui-menu ui-widget ui-widget-content ui-corner-all"]//span'),
mensMenuItems:() =>cy.xpath('//*[@id="ui-id-17"]'),
mensSubMenuitem:() =>cy.xpath('//li[@class="level0 nav-3 category-item level-top parent ui-menu-item"]//ul[@class="level0 submenu ui-menu ui-widget ui-widget-content ui-corner-all"]//a[@role="menuitem"]//span'),
productName:() =>cy.xpath('//strong[@class="product name product-item-name"]//a'),
productSize:() =>cy.xpath('//*[@class="swatch-option text"]'),
sizeLabel:() => cy.xpath('//*[@class="swatch-attribute-selected-option"]'),
productColor:() =>cy.xpath('//*[@id="option-label-color-93-item-49"]'),
addToCartBtn:()=>cy.xpath('//*[@title="Add to Cart"]'),
Cart:()=>cy.xpath("//*[@data-block='minicart']"),
productItemName:()=>cy.xpath("//*[@class='product-item-name']//a")
}

clickOnProductSize(size){

this.elements.productSize().contains(size).click();

}

clickOnMenuOptions(category, subCategory){

this.elements.mensMenu().contains(category).trigger('mouseover')
this.elements.mensMenuItems().trigger('mouseover')
this.elements.mensSubMenuitem().contains(subCategory).click()
}

clickOnProduct(pName){

this.elements.productName().contains(pName).click()

}

getsizeLabel(){
    
return this.elements.sizeLabel();

}

clickOnColor(){


this.elements.productColor().click();

}

clickOnAddToCart(){

    this.elements.addToCartBtn().click();

}

clickOnCart(){

    this.elements.Cart().click()
}

getProductItemName(){

    return this.elements.productItemName()
}

}
export default Home;