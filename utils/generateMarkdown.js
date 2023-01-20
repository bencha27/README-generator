// Function that returns the title section
function renderTitleSection(title) {
  if (title !== "") {
    return `# ${title}

`;
  } else {
    return `# Project Title

`;
  }
}

// Function that returns the description section
function renderDescriptionSection(description) {
  if (description !== "") {
    return `## Description
${description}
`;
  } else {
    ``;
  }
}

// Function that returns the table of contents section
function renderTableOfContents(installation, usage, license, contribute, tests, email, github) {
  let tableOfContents = `## Table of Contents`;
  if (installation !== "") {
    tableOfContents += `
- [Installation](#installation)`;
  }

  if (usage !== "") {
    tableOfContents += `
- [Usage](#usage)`;
  }

  if (license !== "") {
    tableOfContents += `
- [License](#license)`;
  }

  if (contribute !== "") {
    tableOfContents += `
- [How to Contribute](#how-to-contribute)`;
  }

  if (tests !== "") {
    tableOfContents += `
- [Tests](#tests)`;
  }

  if (email !== "" || github !== "") {
    tableOfContents += `
- [Questions](#questions)`;
  }
  tableOfContents += `
`
  return tableOfContents;
}

// Function that returns the installation section
function renderInstallationSection(installation) {
  if (installation !== "") {
    return `## Installation
${installation}
`;
  } else {return ``}
}

// Function that returns the usage section
function renderUsageSection(usage) {
  if (usage !== "") {
    return `## Usage
${usage}
`;
  } else {return ""}
}

// Function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "None") {
    return "";
  } else {
    renderLicenseLink(license);
  }

  switch (license) {
    case "MIT License":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Apache License 2.0":
      return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    case "ISC License":
      return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
    case "GNU General Public License v3.0":
      return "![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)";
    default:
      return "";
  }
}

// Function that returns the license link
function renderLicenseLink(license) {
  switch (license) {
    case "MIT License":
      return "https://opensource.org/licenses/MIT";
    case "Apache License 2.0":
      return "https://opensource.org/licenses/Apache-2.0";
    case "ISC License":
      return "https://opensource.org/licenses/ISC";
    case "GNU General Public License v3.0":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    default:
      return "";
  }
}

// Function that returns the license section of README
function renderLicenseSection(license) {
  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);

  if (license !== "None") {
    return `## License
[${licenseBadge}](${licenseLink})
`;
  } else {return ``}
}

// Function that returns the contribute section
function renderContributeSection(contribute) {
  if (contribute !== "") {
    return `## How to Contribute
${contribute}
`;
  } else {return ``}
}

// Function that returns the tests section
function renderTestsSection(tests) {
  if (tests !== "") {
    return `## Tests
${tests}
`;
  } else {return ``}
}

// Function that returns the email address
function renderEmail(email) {
  if (email !== "") {
    return `If you have any questions, please contact me at [${email}](mailto:${email}).\\`
  } else {return ``}
}

// Function that returns the GitHub link
function renderGithub(github) {
  if (github !== "") {
    return `[GitHub](https://github.com/${github})`
  } else {return ``}
}

// Function that returns the questions section
function renderQuestionsSection(email, github) {
  if (email !== "" || github !== "") {
    return `## Questions
${renderEmail(email)}
${renderGithub(github)}`;
  } else {return ``}
}

// Function to generate markdown for README
function generateMarkdown({title, description, installation, usage, license, contribute, tests, email, github}) {
  let readmeText = `${renderTitleSection(title)}
${renderDescriptionSection(description)}
${renderTableOfContents(installation, usage, license, contribute, tests, email, github)}
${renderInstallationSection(installation)}
${renderUsageSection(usage)}
${renderLicenseSection(license)}
${renderContributeSection(contribute)}
${renderTestsSection(tests)}
${renderQuestionsSection(email, github)}`;
  return readmeText;
}

module.exports = generateMarkdown;
