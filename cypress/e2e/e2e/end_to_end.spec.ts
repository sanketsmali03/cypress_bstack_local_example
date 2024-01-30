import Login from '../../pageObjects/login'
import Purchase from '../../pageObjects/purchase'
import Signin from '../../pageObjects/signin'
import Address from '../../pageObjects/address'
import Orders from '../../pageObjects/orders'

describe('End to End Scenario', function () {

  const login = new Login();
  const purchase = new Purchase();
  const signin = new Signin();
  const address = new Address();
  const orders = new Orders();

  let user: any
  before(function () {
    cy.fixture('user').then((data) => {
      user = data
    })
  })

  it('Visit BrowserStack Demo Website', () => {

   // cy.intercept('GET', Cypress.config().baseUrl + 'api/products').as('apiCheck')
    cy.visit('https://bstackdemo.com/');
  
  })

  
  after(() => {
    // runs once after all tests in the block
    console.log('This runs after all tests');
    cy.log('Testing after hook');
    cy.request({
      method: 'GET',
      url: 'http://localhost:8080/api/json',
      auth: {
        user: 'admin',
        pass: 'admin',
        sendImmediately: true,
      },
    }).then((response) => {
      // Assertions or further actions based on the response
      expect(response.status).to.equal(200);
      // ... other assertions or actions
    });

  })

  

});
