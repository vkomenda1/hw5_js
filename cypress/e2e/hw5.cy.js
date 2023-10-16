describe('Fill Field', () => {
   const fillFields =  [
    {
      firstName: 'firstName1',
      lastName: 'lastName1',
      email: 'test@test1.com',
      website: 'test1.com',
    },
    {
      firstName: 'firstName2',
      lastName: 'lastName2',
      email: 'test@test2.com',
      website: 'test2.com',
    },
  ]
      
fillFields.forEach(fillField => {
    it(`Fill Field: ${fillField.firstName}, ${fillField.lastName}, ${fillField.email}, ${fillField.website},`, () => {
       cy.log('Open site');
       cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');

       cy.log('Click on theme "Material Dark"');
       cy.get('[src="assets/images/material-dark-theme.jpg"]').click();

       cy.log('Click on Humburg');
       cy.get('[class="eva eva-menu-outline"]').click();
       
       cy.log('Click on Form');
       cy.get('[class="expand-state ng-tns-c141-9"]').click();

       cy.log('Click on Form Layouts');
       cy.get('[class="menu-title ng-tns-c141-11"]').click();

       cy.log('Close The Humburg');
       cy.get('[class="eva eva-menu-outline"]').click();

       cy.log('First Name');
       cy.get('#inputFirstName').type(fillField.firstName);

       cy.log('Last Name');
       cy.get('#inputLastName').type(fillField.lastName);

       cy.log('Email');
       cy.get('#inputEmail').type(fillField.email);

       cy.log('Website');
       cy.get('#inputWebsite').type(fillField.website);
})         
  })  
    })