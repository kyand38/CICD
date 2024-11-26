# TestMyQuiz
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


## Description
This project is a MERN (MongoDB, Express.js, React, Node.js) web application that includes end-to-end (E2E) and component testing using Cypress. The app allows users to take a quiz of random programming questions.


## Table of Contents
- [Features](#Features)
- [Technologies Used](#Technologies-Used)
- [Installation](#Installation)
- [Usage](#Usage)
- [Testing](#Testing)
- [Cypress Folder Structure](#Cypress-Folder-Structure)
- [License](#License)
- [Question](#Questions)


## Features
 - User-Friendly Interface: Built with React for smooth navigation and interactivity.
 - Dynamic Backend: Node.js and Express handle API requests and routes.
 - Cypress Testing: Provides reliable E2E and component tests for quality assurance.


## Technologies Used
 - Frontend: React
 - Backend: Node.js, Express
 - Database: MongoDB
 - CSS Framework: Bootstrap
 - Testing: Cypress
 - Other Tools: Vite (React setup)


## Installation
1. Clone the repository:
```bash
git clone git@github.com:kyand38/TestMyQuiz.git
```
2. Install dependencies:
```bash 
cd client
npm install
cd ../server
npm install
```
3. Set up the database:
 -  Add an environment variable in server/.env
```makefile
MONGODB_URI='mongodb://127.0.0.1:27017/techquiz'
```
4. Start the application:
```bash
cd TestMyQuiz
npm run build
npm run seed
npm run start:dev
```
5. Open the application in your browser at:
```arduino
http://localhost:3001
```


## Usage
Once it's running on local host hit start quiz and answer questions about Python programming.  
You can answer 10 questions and get a score then start again.

## Testing

 - **[Demo](https://drive.google.com/file/d/1ZkMCIdbTCo3SmoWixAlTIR6NVijpO6Sh/view?usp=sharing)**

### This project uses Cypress for both end-to-end (E2E) and component testing.
1. Open your terminal in the root directory of the project
```bash
npm run cypress
```
2. Run the tests
 - In the Cypress UI, select the desired test suite (component or e2e).
![Cypress UI](<Screenshots/Screenshot 2024-11-25 173744.png>)

 - Choose the browser you'd like to use. (I prefer Electron.)
![Browser Choice](<Screenshots/Screenshot 2024-11-25 173933.png>)

 - Click on individual test files to execute them.
![Choose Test Files](<Screenshots/Screenshot 2024-11-25 173950.png>)


## Cypress Folder Structure
 - /cypress/component: Contains component tests (e.g., Quiz.cy.jsx).
 - /cypress/e2e: Contains E2E tests (e.g., quiz.cy.js).
 - /cypress/fixtures: Stores mock data for testing (e.g., questions.json).
 - /cypress/support: Custom commands and utilities for Cypress tests.


## License
This application is covered under the following license: [MIT License](https://www.gnu.org/licenses/gpl-3.0)


## Questions
 - https://github.com/kyand38  
 - kyand2024@gmail.com
 - https://www.linkedin.com/in/kyle-anderson-595841338/
 - https://reactportfoliopro.netlify.app/