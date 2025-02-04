import Quiz from "../../client/src/components/Quiz"
//      // Start the quiz, which triggers the first API call
describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', {
      fixture: 'questions.json',
      statusCode: 200,
    }).as('getRandomQuestion');

    cy.mount(<Quiz />);
  });
// mounts the Quiz component, and then checks that the button with the text "Start Quiz" is visible
  it('should start the quiz and display the first question', () => {
 
    cy.get('button').contains('Start Quiz').click();
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });

  it('should answer questions and complete the quiz', () => {

    cy.get('button').contains('Start Quiz').click();

    // Answer questions
    cy.get('button').contains('1').click();
    cy.get('button').contains('2').click();

    // Verify the quiz completion
    cy.get('.alert-success').should('be.visible').and('contain', 'Your score');
  });

  it('should restart the quiz after completion', () => {
  
    cy.get('button').contains('Start Quiz').click();

    // Answer questions
    cy.get('button').contains('1').click();
    cy.get('button').contains('2').click();

    // Restart the quiz
    cy.get('button').contains('Take New Quiz').click();

    // Verify the quiz is restarted
    cy.get('.card').should('be.visible');
    cy.get('h2').should('not.be.empty');
  });
});
