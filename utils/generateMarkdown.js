// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return `![GitHub license](https://img.shields.io/badge/license-${license}2.0-blue.svg)\n`;
    }
    return '';
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "None") {
        return `\n* [License](#license) \n`
    }
    return ``
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'None') {
        return `## License
        This project is licensed under the ${license} license.

        Copyright (c) 2011-2020 Ilias Chowdhury

        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
        to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
        and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES 
        OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE 
        LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN 
        CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`
    }
    return '';
}



function generateMarkdown(data) {
    return `
<h1> #${data.title} </h1>\n
${renderLicenseBadge(data.license)}
<h1>  Table of Contents </h1>\n
* [Description](#description) \n
* [Installation](#installation) \n
* [Usage](#usage) \n
* [Contributing](#contributing) \n
* [Test](#test) \n
${renderLicenseLink(data.license)}
  
## Description
    ${data.description}
## Installation:
    ${data.installation}    
## Usage:
    ${data.usage}   
## Contributing:
    ${data.contribution} 
## Test:
    ${data.test}
 

${renderLicenseSection(data.license)}
     
## Questions:
    For questions about the Generator you can go to my 
    GitHub page at the following Link:
    -[GitHub Profile](https://github.com/${data.userGithubName})    
    For additional questions please reach out to my eamil at: ${data.GitHubEmail}
 

`;
}

module.exports = generateMarkdown;
