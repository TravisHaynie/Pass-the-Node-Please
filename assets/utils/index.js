// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generalMark = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: [
            'MIT',
            'Apache 2.0',
            'GPL 3.0',
            'BSD 3',
            'None'
        ]
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`${fileName} has been generated successfully!`);
    });
}

// TODO: Create a function to initialize app
function init() {
    // Prompt user for input
    inquirer.prompt(questions)
        .then(answers => {
            // Generate README content
            const readmeContent = generalMark(answers);
            
            // Write to README file
            writeToFile('README.md', readmeContent);
        })
        .catch(error => {
            console.error('Error generating README:', error);
        });
}

// Function call to initialize app
init();
