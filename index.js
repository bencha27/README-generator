// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
  "Enter the title of your project.",
  "Enter a short description of the project.",
  "Enter installation instructions.",
  "Enter usage information.",
  "Choose a license for the project.",
  "Enter contributing guidelines.",
  "Enter test instructions and examples.",
  "Enter your GitHub username.",
  "Enter your email address.",
];

// TODO: Create a function to write README file
function writeToFile(fileName, {title, description, installation, usage, license, contribute, tests, email, github}) {
  const licenseBadge = generateLicenseBadge(license);

  let readmeContent = ``;

  if (title === "") {
    readmeContent += `# Project Title

`;
  } else {
    readmeContent += `# ${title}

`;
  }

  if (description !== "") {
    readmeContent += `## Description
${description}

`;
  }

  readmeContent += `## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)

`;

  if (installation !== "") {
    readmeContent += `## Installation
${installation}

`
  }

  if (usage !== "") {
    readmeContent += `## Usage
${usage}

`;
  }

  if (licenseBadge !== "") {
    readmeContent += `## License
${licenseBadge}

`;
  }

  if (contribute !== "") {
    readmeContent += `## How to Contribute
${contribute}

`;
  }

  if (tests !== "") {
    readmeContent += `## Tests
${tests}

`;
  }

  if (email !== "" && github !== "") {
    readmeContent += `## Questions
If you have any questions, please contact me at [${email}](mailto:${email}).\\
[GitHub](https://github.com/${github})`;
  } else if (email !== "" && github === "") {
    readmeContent += `## Questions
If you have any questions, please contact me at [${email}](mailto:${email}).`;
  } else if (email === "" && github !== "") {
    readmeContent += `## Questions
[GitHub](https://github.com/${github})`;
  }

  fs.writeFile(fileName, readmeContent, (err) => 
     err ? console.error(err) : console.log("Successfully created README.md!"));
};

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        name: "title",
        type: "input",
        message: questions[0],
      },
      {
        name: "description",
        type: "input",
        message: questions[1],
      },
      {
        name: "installation",
        type: "input",
        message: questions[2],
      },
      {
        name: "usage",
        type: "input",
        message: questions[3],
      },
      {
        name: "license",
        type: "list",
        message: questions[4],
        choices: ["MIT License", "Apache License 2.0", "ISC License", "GNU General Public License v3.0", "None"],
      },
      {
        name: "contribute",
        type: "input",
        message: questions[5],
      },
      {
        name: "tests",
        type: "input",
        message: questions[6],
      },
      {
        name: "github",
        type: "input",
        message: questions[7],
      },
      {
        name: "email",
        type: "email",
        message: questions[8],
      },
    ])
    .then((response) => {writeToFile("README.md", response)});
}

function generateLicenseBadge(license) {
  switch (license) {
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "ISC License":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "GNU General Public License v3.0":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    default:
      return "";
  }
}

// Function call to initialize app
init();
