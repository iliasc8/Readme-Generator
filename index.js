// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const util = require('util')
const writeFileAsync = util.promisify(fs.writeFile);

const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = [`What's the name of your project title?`, `What's the project description?`,
    'What is the license?', `What are the installation instructions?`, `What's the usage description?`, `Who is the contributor?`,
    `What are the tests?`, `What is Github user name?`, `What is your email address?`,];


// TODO: Create a function to write README file


// TODO: Create a function to initialize app





function promptUser() {
    return inquirer.prompt(
        [
            {
                type: "input",
                message: `${questions[0]}`,
                name: "title"
            },

            {
                type: "input",
                message: `${questions[1]}`,
                name: "description"
            },

            {
                type: 'list',
                message: `${questions[2]}`,
                choices: [
                    "Apache",
                    "MIT",
                    "ISC",
                    "GNU GPLv3",
                    "None"
                ],
                name: 'license',
            },

            {
                type: "input",
                message: `${questions[3]}`,
                name: "installation"
            },

            {
                type: "input",
                message: `${questions[4]}`,
                name: "usage"
            },

            {
                type: "input",
                message: `${questions[5]}`,
                name: "contribution"
            },
            {
                type: "input",
                message: `${questions[6]}`,
                name: "test"
            },

            {
                type: "input",
                message: `${questions[7]}`,
                name: "userGithubName"
            },
            {
                type: "input",
                message: `${questions[8]}`,
                name: "GitHubEmail"
            },

        ]
    )

}
async function init() {
    try {
        const response = await promptUser();
        const readMe = generateMarkdown(response);
        await writeFileAsync("README.md", readMe)
        console.log("Success!")
    }
    catch (err) {
        console.log(err)
    }
}

// // Function call to initialize app
init();
