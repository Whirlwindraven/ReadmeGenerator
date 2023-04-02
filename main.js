const inquirer = require("inquirer");
const fs = require("fs");
const fsExtra = require("fs-extra");
const markDown = require('./lib/ReadmeGen')

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


// generateREADME functions to generate the answers 
function generateREADME(answers) {
    const licenseBadge = answers.license !== "None"
      ? `![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license.replace(/-/g, "%20")}-blue.svg)`
      : "";
  
    return `
  # ${answers.title} ${licenseBadge}
  
  ## Description
  ${answers.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}
  
  ## License
  This project is covered under the ${answers.license} License.
  
  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}
  
  ## Questions
  For any questions, please reach out to [${answers.github}](https://github.com/${answers.github}) or email me at ${answers.email}.
  `;
  }
  
  inquirer.prompt(questions).then((answers) => {
    const readmeContent = generateREADME(answers);
    fs.writeFile("README.md", readmeContent, (err) => {
      if (err) throw err;
      console.log("README.md has been generated successfully!");
    });
  });