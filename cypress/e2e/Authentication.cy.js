const baseURL = 'https://tagalong2024.netlify.app'

describe('User Authentication', () => {
  beforeEach(() => {
    // Visit the homepage before each test
    cy.visit(baseURL+'/')
  })

  it('Navigates to the sign-up page when sign-up button is clicked', () => {
    // Click on the sign-up button
    cy.contains('.button', 'SIGNUP').click()

    // Assert that the URL changes to the sign-up page
    cy.url().should('include', '/signup')
  })

  it('Navigates to the login page when login button is clicked', () => {
    // Click on the login button
    cy.contains('.button', 'LOGIN').click()

    // Assert that the URL changes to the login page
    cy.url().should('include', '/login')
  })

  it('Signs up a new user', () => {
    // Click on the sign-up button
    cy.contains('.button', 'SIGNUP').click()

    // Fill out the sign-up form
    cy.get('#email').type('test1@example.com')
    cy.get('#password').type('password123')
    cy.get('#username').type('test1234')

    cy.get('button[type="submit"]').click()

    // Assert that the sign-up was successful
    cy.url().should('include', '/go') // Assuming successful sign-up redirects to dashboard
    cy.contains('Dashboard')
  })

  it('Logs in an existing user', () => {
    // Click on the login button
    cy.contains('.button', 'LOGIN').click()

    // Fill out the login form
    cy.get('#email').type('test@example.com')
    cy.get('#password').type('password123')
    cy.get('button[type="submit"]').click()

    // Assert that the login was successful
    cy.url().should('include', '/go') // Assuming successful login redirects to dashboard
    cy.contains('Dashboard')
  })
})
