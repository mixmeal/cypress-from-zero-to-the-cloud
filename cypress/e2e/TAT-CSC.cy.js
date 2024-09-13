describe('TAT Customer Service Center', () => {
  beforeEach (() => {
    cy.visit('/src/index.html')
    })


  describe('Checking the browser tab app name', () => {
    it('checks the application title', () => {
      cy.title().should('eq','TAT Customer Service Center')
    })
  })

  describe('filling in the necessary info', () => {
    it('fills in the required fields and submits the form', () => {
      const someText = Cypress._.repeat('random text to repeat', 10)
      cy.get('#firstName')
        .type('Test', { delay: 0 })
      cy.get('#lastName')
        .type('Last')
      cy.get('#email')
        .type('mail@test.com')
      cy.get('#phone')
        .type('0123123')
      cy.get('#open-text-area')
        .type(someText, { delay: 0 })
      cy.contains('button', 'Send')
        .click()
      //cy.get('button[type="submit"]').click()
      //cy.should('be.visible','Message successfully sent.')

      cy.get('.success').should('be.visible')
    })
  })

  describe('invalid email', () => {
    it('displays an error message when submitting the form with an email with invalid formatting.', () => {
      cy.get('#firstName').type('Test', { delay: 0 })
      cy.get('#lastName').type('Last')
      cy.get('#email').type('mailtest.com')
      cy.get('#phone').type('0123123')
      cy.get('#open-text-area').type('all good')
      cy.contains('button', 'Send').click()

      cy.get('.error > strong').should('be.visible')
      })
    })

  describe('invalid phone number', () => {
    it('validate that if a non-numeric value is entered, its value will remain empty.', () => {
      cy.get('#firstName').type('Test', { delay: 0 })
      cy.get('#lastName').type('Last')
      cy.get('#email').type('mail@test.com')
      cy.get('#phone')
        .type('qwerty')
        .should('have.value', '')
      cy.get('#open-text-area').type('all good')
      cy.contains('button', 'Send').click()
    })
  })

  describe('phone is required', () => {
    it('displays an error message when the phone becomes required but is not filled in before the form submission.', () => {
      cy.get('#firstName').type('Test', { delay: 0 })
      cy.get('#lastName').type('Last')
      cy.get('#email').type('mail@test.com')
      cy.get('#phone-checkbox').check()
      cy.get('#open-text-area').type('all good')
      cy.contains('button', 'Send').click()

      cy.get('.error').should('be.visible')
    })
  })

  describe('write and clear', () => {
    it('fills and clears the first name, last name, email, and phone fields.', () => {
      cy.get('#firstName')
        .type('Test', { delay: 0 })
        .should('have.value','Test')
        .clear()
        .should('have.value','')
      cy.get('#lastName')
        .type('Last')
        .should('have.value','Last')
        .clear()
        .should('have.value','')
      cy.get('#email')
        .type('mail@test.com')
        .should('have.value','mail@test.com')
        .clear()
        .should('have.value','')
      cy.get('#phone')
        .type('0123123')
        .clear()
        .should('have.value','')
      cy.get('#phone-checkbox')
        .click()
        .uncheck()
        .should('not.be.checked')
      cy.get('#open-text-area')
        .type('all good')
        .should('have.value','all good')
        .clear()
        .should('have.value','')
      //cy.contains('button', 'Send').click()
    })
  })

describe('Validate the required fields!', () => {
  it('displays an error message when submitting the form without filling the required fields', () => {
    cy.contains('button', 'Send')
      .click()

    cy.get('.error > strong')
      .should('be.visible')
      //.should('have.value','Validate the required fields!')
    })
  })

describe('successfully submits the form using a custom command', () => {
  it('successfully submits the form', () => {
    const data = {
      firstName: 'mix',
      lastName: 'mil',
      email: 'mix@mail.com',
      phone: '1234',
      textArea: 'text'
    }

    const data1 = {
      firstName: 'geo',
      lastName: 'geo',
      email: 'geo1@mail.com',
      phone: '777',
      textArea: 'text'
    }
    
    cy.fillMandatoryFieldsAndSubmit()
    cy.fillMandatoryFieldsAndSubmitManual(data)
    cy.fillMandatoryFieldsAndSubmitManualwithDefault()

    cy.get('.success').should('be.visible')
    })
  })

describe('with contains', () => {
  it('replace get with contains', () => {
    cy.get('#firstName').type('Test', { delay: 0 })
    cy.get('#lastName').type('Last')
    cy.get('#email').type('mix@mail.com')
    cy.get('#phone').type('0123123')
    cy.get('#open-text-area').type('all good')
    cy.contains('Send').click()
    })
  })

describe('selects a product (YouTube) by its content', () => {
  it('select youtube', () => {
    cy.get('#product').select('YouTube').should('have.value','youtube')
    })
  })

describe('selects a product (Mentorship) by its value', () => {
  it('select Mentorship', () => {
    cy.get('#product').select('mentorship').should('have.value','mentorship')
    })
  })

describe('selects a product (Blog) by its index.', () => {
  it('select Blog', () => {
    cy.get('#product').select(1).should('have.value','blog')
    })
  })

describe('checks the type of service "Feedback"', () => {
  it('select Blog', () => {
    cy.get('input[type="radio"][value="feedback"]').check().should('be.checked')
    })
  })

describe('checks each type of service', () => {
  it('check all services', () => {
    cy.get('#support-type')
      .find('input[type="radio"]')
      .each((typeOfService) => {
        cy.wrap(typeOfService)
          .check().should('be.checked')
      })
    })
  })

describe('checks both checkboxes, then unchecks the last one.', () => {
  it('check and uncheck', () => {
    cy.get('fieldset.group:nth-child(5)')
      .find('input[type="checkbox"]')
      .each((meansOfContact) => {
        cy.wrap(meansOfContact)
          .check().should('be.checked')
      })
/*    cy.get('#email-checkbox')
      .click()
      .check()
      .should('be.checked')*/
    cy.get('#phone-checkbox')
      .click()
      .uncheck()
      .should('not.be.checked')
    })
  })

describe('checks both checkboxes, then unchecks the last one.', () => {
  it('check and uncheck', () => {
    cy.get('input[type="checkbox"]')
      .check()
      .should('be.checked')
      .last()
      .uncheck()
      .should('not.be.checked')
      })
    })

describe('selects a file from the fixtures folder.', () => {
  it('upload a file', () => {
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
    })
  })

describe('selects a file simulating a drag-and-drop.', () => {
  it('drag and drop upload', () => {
    cy.get('input[type="file"]')
      .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
    })
  })

describe('selects a file using a fixture to which an alias was given', () => {
  it('fixture updload', () => {
    cy.fixture('example.json').as('testFile1')
    cy.get('input[type="file"]')
      .selectFile('@testFile1')
      .should(input => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
    })
  })

  describe('clock ticking', () => {
    it('submits the form with clock ticking', () => {
      const someText = Cypress._.repeat('random text to repeat', 10)
      cy.clock()
      cy.get('#firstName')
        .type('Test', { delay: 0 })
      cy.get('#lastName')
        .type('Last')
      cy.get('#email')
        .type('mail@test.com')
      cy.get('#phone')
        .type('0123123')
      cy.get('#open-text-area')
        .type(someText, { delay: 0 })
      cy.contains('button', 'Send')
        .click()
      //cy.get('button[type="submit"]').click()
      //cy.should('be.visible','Message successfully sent.')

      cy.get('.success').should('be.visible')
      cy.tick(3000)
      cy.get('.success').should('not.be.visible')
    })
  })

  describe('invoke1', () => {
    it('displays and hides the success and error messages using .invoke()', () => {
      const someText = Cypress._.repeat('random text to repeat', 10)
      cy.get('.success')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Message successfully sent.')
        .invoke('hide')
        .should('not.be.visible')
      cy.get('.error')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Validate the required fields!')
        .invoke('hide')
        .should('not.be.visible')
    })
  })

describe('invoke2', () => {
  it('successfully submits the form2', () => {
    cy.get('#firstName')
      .type('Test')
    cy.get('#lastName')
      .type('Last')
    cy.get('#email')
      .type('mail@test.com')
    cy.get('#phone')
      .type('0123123')
    cy.get('#open-text-area')
      .invoke('val','dnasd kdmasdasklmdlm')
    cy.contains('button', 'Send')
      //.click()
    cy.get('#open-text-area').should('have.value','dnasd kdmasdasklmdlm')
    })
  })

  describe('makes an HTTP request', () => {
    it('testing API', () => {
      cy.request({
        method: 'GET',
        url: 'https://tat-csc.s3.sa-east-1.amazonaws.com/index.html'})
        .then((response) => {
        expect(response.status).to.equal(200);
        expect(response.statusText).to.equal('OK')
        expect(response.body).to.contain('TAT CSC')
        })
      })
    })

  describe('makes an HTTP request2', () => {
    it('testing API', () => {
      cy.request('https://tat-csc.s3.sa-east-1.amazonaws.com/index.html')
        .as('getRequest')
        .its('status')
        .should('be.equal', 200)
      cy.get('@getRequest')
        .its('statusText')
        .should('be.equal', 'OK')
      cy.get('@getRequest')
        .its('body')
        .should('include', 'TAT CSC')
        })
      })

  describe('find the #cat', () => {
    it.only('cat', () => {
      cy.get('#cat')
        .invoke('show')
        .should('be.visible')
    })
  })

})