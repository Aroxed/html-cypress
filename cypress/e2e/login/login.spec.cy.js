describe('Login', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5555/index.html');
  });

  it('displays the login page', () => {
    cy.contains('h1', 'Login');
    cy.get('form').should('exist');
    cy.get('form label').should('have.length', 2);
    cy.get('form input[type="text"]').should('exist');
    cy.get('form input[type="password"]').should('exist');
    cy.get('form button[type="submit"]').should('exist');
  });

  it('logs in a user with valid credentials', () => {
    cy.get('form input[name="username"]').type('myusername');
    cy.get('form input[name="password"]').type('mypassword');
    cy.get('form button[type="submit"]').click();
    cy.contains('Success');
  });

  it('displays an error message with invalid credentials', () => {
    cy.get('form input[name="username"]').type('invalidusername');
    cy.get('form input[name="password"]').type('invalidpassword');
    cy.get('form button[type="submit"]').click();
    cy.contains('Invalid username or password');
  });
});
