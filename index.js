// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of yout project?'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation??'
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'functionality',
        message: 'What problem does it solve?'
    },
    {
        type: 'input',
        name: 'thoughts',
        message: 'What makes your project stand out?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
      err ? console.error(err) : console.log('README.md generated successfully!')
    );
  }
// TODO: Create a function to initialize app
function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
      })
      .catch((error) => console.error(error));
  }

// Function call to initialize app
init();
