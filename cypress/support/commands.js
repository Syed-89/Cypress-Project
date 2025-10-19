import Login from "../Pages/LoginPage";
const cypress = require("cypress");
const login = new Login();


  Cypress.commands.add('login',(userName, password)=>{

    login.clickSignIn()
    login.dologin(userName,password )
    login.clickSignButton()
  })

    






  