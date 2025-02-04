# React Tech Quiz - Cypress Testing
The app was built using the MERN stack with a React front end, MongoDB database, and Node.js/Express.js server and API. It allows users to take a quiz of ten random questions and view their final score.

We are creating testing for the components using Cypress.
The tests validate the core functionality of the quiz, including starting the quiz, answering questions, tracking scores, and restarting.
The tests use Cypress fixtures (questions.json) to mock API responses.

Tests rely on Cypress commands like cy.intercept(), cy.wait(), and cy.get() to handle UI interactions and API calls.

Component tests use cy.mount(), while E2E tests use cy.visit('http://localhost:3001/') to load the full app.

1. Component Testing.
   The component tests validate the Quiz component in isolation using Cypress' **cy.mount(). These tests ensure that the component functions correctly without requiring a full backend.
2. End to end testing.
    The E2E tests verify the full user journey, including API interactions, navigation, and UI updates.


## Table of Contents 
- [React Tech Quiz - Cypress Testing](#react-tech-quiz---cypress-testing)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Demo](#demo)
  - [ScreenShots](#screenshots)
  - [License](#license)
  - [Questions](#questions)

## Installation
1. Clone the repository:
    git clone git@github.com:gitkaviyarasi/QuizUsingReact.git
2. Navigate to the project directory and create a branch and open Code editor.
3. Install the package using npm i
4. setup the MongoDBURI in the .env file
5. then run the code by building using the `npm run build` and `npm run start:dev`  `npm run test`
   
## Usage
Run `npm run test` and navigate to the prompted URL to see your app in Cypress. 


## Demo
Click the below link for a demo of working application.
[(Demo)](https://drive.google.com/file/d/1Gvq23-WPLD1SA3mu_PeYt2UxNoThr4hU/view?usp=sharing)

## ScreenShots
The following image demonstrates the tests.



## License
MIT



## Questions
If you have any questions about this project, feel free to reach out:

GitHub: gitkaviyarasi 
Email: kaviyarasikrishnannj@gmail.com
