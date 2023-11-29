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
      name: 'description',
      message: 'Provide a brief description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How do you install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'How do you run tests for your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'None'],
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
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
