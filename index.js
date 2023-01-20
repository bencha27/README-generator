// Packages for the application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
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

// Function to write README file
function writeToFile(data) {
  fs.writeFile("./dist/README.md", generateMarkdown(data), (err) => 
     err ? console.error(err) : console.log("Successfully created README.md!"));
};

// Function to initialize app
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
    .then((response) => {writeToFile(response)});
}

// Function call to initialize app
init();
