// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username? ',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address? ',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your project name? ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please write a short description of your project: ',
        name: 'description'
    },
    {
        type: 'list',
        message: 'What kind of license should your project have? ',
        name: 'license',
        choices: ['MIT License', 'GNU General Public License (GPL)', 'Apache License 2.0', 'BSD 2-Clause License', 'BSD 3-Clause License', 'Mozilla Public License 2.0', 'GNU Affero General Public License (AGPL)']
    },
    {
        type: 'input',
        message: 'What command should be run to install dependencies? ',
        name: 'install'
    },
    {
        type: 'input',
        message: 'What command should be run to run tests? ',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What does the user need to know about using the repo? ',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo? ',
        name: 'contributing'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Generating README...');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions).then((response) => {
            writeToFile('README.md', generateMarkdown(response));
        });
}

// Function call to initialize app
init();