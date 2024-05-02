// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let badge;
    if (license !== "" && license !== null && license !== undefined) {
        switch(license) {
            case "MIT License":
                badge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
                break;
            case "GNU General Public License (GPL)":
                badge = 'https://img.shields.io/badge/License-GPLv3-blue.svg';
                break;
            case "Apache License 2.0":
                badge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
                break;
            case "BSD 2-Clause License":
                badge = 'https://img.shields.io/badge/License-BSD_2--Clause-orange.svg';
                break;
            case "BSD 3-Clause License":
                badge = 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg';
                break;
            case "Mozilla Public License 2.0":
                badge = 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg';
                break;
            case "GNU Affero General Public License (AGPL)":
                badge = 'https://img.shields.io/badge/License-AGPL_v3-blue.svg';
                break;
        }
    } else {
        badge = '';
    }
    return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    let link;
    if (license !== "" && license !== null && license !== undefined) {
        switch(license) {
            case "MIT License":
                link = 'https://opensource.org/licenses/MIT';
                break;
            case "GNU General Public License (GPL)":
                link = 'https://www.gnu.org/licenses/gpl-3.0';
                break;
            case "Apache License 2.0":
                link = 'https://opensource.org/licenses/Apache-2.0';
                break;
            case "BSD 2-Clause License":
                link = 'https://opensource.org/licenses/BSD-2-Clause';
                break;
            case "BSD 3-Clause License":
                link = 'https://opensource.org/licenses/BSD-3-Clause';
                break;
            case "Mozilla Public License 2.0":
                link = 'https://opensource.org/licenses/MPL-2.0';
                break;
            case "GNU Affero General Public License (AGPL)":
                link = 'https://www.gnu.org/licenses/agpl-3.0';
                break;
        }
    } else {
        link = '';
    }
    return link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    let licenseSection;
    if (license !== "" && license !== null && license !== undefined) {
        licenseSection = `### ${license}`;
    } else {
        licenseSection = '';
    }
    return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title} 
[![License](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Install dependencies:

\`\`\`bash
${data.install}
\`\`\`

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
To run tests, use this command: 

\`\`\`bash
${data.tests}
\`\`\`

## Questions
If you have any questions about the project, please feel free to visit my [GitHub](https://github.com/${data.username}) or [email me](mailto:${data.email})!
`;
}

module.exports = generateMarkdown;
