// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        type: 'input',
        name: 'desc',
        message: 'Enter a short description of the project.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    },
    {
        type: 'input',
        name: 'commandIns',
        message: 'What command should be run to install the dependencies?',
    },
    {
        type: 'input',
        name: 'commandTest',
        message: 'What command should be run to run tests?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, generateMarkdown(data), err => {
        if (err) {
            console.error(err);
        } else {
            //file written successfully
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            writeToFile("README.md", answers);
        })

}

// Function call to initialize app
init();
