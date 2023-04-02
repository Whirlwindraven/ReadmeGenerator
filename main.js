const inquirer = require("inquirer");
const fs = require("fs");
const fsExtra = require("fs-extra");
const markDown = require('./lib/ReadmeGen'

// README questions
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    }, 
    {
        type: 'input',
        name: 'description',
        message: 'Project description?'
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the program's intended use?"
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install the program?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How can people contribute to future development of the program?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your contact email address?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username or link?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license does this program fall under?',
        choices: ['MIT', 'ISC', 'GNUPLv3'],
        filter(val) {
            return val.toLowerCase();
        }
    }
];