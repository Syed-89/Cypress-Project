import { before } from "mocha";
import Home from "../Pages/HomePage";
import Login from "../Pages/LoginPage";
//import '../support/commands';

const home= new Home();
const login1 = new Login();

describe('Home page test cases', ()=>{


beforeEach(()=>{

    cy.visit('/')
    cy.wait(3000)
    cy.fixture('Users.json').then((jsonData) =>{
    cy.login(jsonData.validUser.name, jsonData.validUser.password)
    })
 

})

it('check the Mens Menu Option',()=>{
    
    home.clickOnMenuOptions('Men','Tees')
    cy.title().should('eq', 'Tees - Tops - Men')
    cy.log("Successfully checked the MenuOption")

    

})

it('check the product sizes selection', ()=>{

cy.fixture('ProductSizes.json').then((sizeData)=>{

home.clickOnMenuOptions('Men','Tees')
home.clickOnProduct('Strike Endurance Tee ')
home.clickOnProductSize(sizeData.size.L);
home.getsizeLabel().should('have.text',sizeData.size.L)
cy.log("Successfully checked the product sizes selection")

})

})

it('Add the item into cart', ()=>{

cy.fixture('ProductSizes.json').then((sizeData)=>{
home.clickOnMenuOptions('Men','Tees')
home.clickOnProduct('Strike Endurance Tee')
home.clickOnProductSize(sizeData.size.L);
home.clickOnColor();
home.clickOnAddToCart();
home.getProductItemName().should('have.text','Strike Endurance Tee')
cy.log("Successfully add the item into the cart")
})
})


})