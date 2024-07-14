// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenses = {
  MIT: {
      badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
      link: 'https://opensource.org/licenses/MIT'
  },
  'Apache 2.0': {
      badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
      link: 'https://opensource.org/licenses/Apache-2.0'
  },
  'GPL 3.0': {
      badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      link: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  'None':
   {
      badge: '',
      link: ''
  }
};

function renderLicenseBadge(license) {
  return licenses[license].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'None') {
    return '';
  } 

  return licenses[license].link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
      return '';
  } 

  return `This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

## Description
${response.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
<a id="installation"></a>
${response.installation}

## Usage
<a id="usage"></a>
${response.usage}

## License
<a id="license"></a>
${renderLicenseBadge(response.license)}
${renderLicenseSection(response.license)}

## Contributing
<a id="contributing"></a>
${response.contributing}

## Tests
<a id="tests"></a>
${response.tests}

## Questions
<a id="questions"></a>
For questions about this project, please reach out to [${response.githubUsername}](https://github.com/${response.githubUsername}) or contact ${response.email}.
`;
}


module.exports = generateMarkdown;
