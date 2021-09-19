// DEPENDENCIES & Packages ===========
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const fileName = "./dist/index.html";

// DATA ===========
const htmlCards = ``;
let job = "Manager";
let finalHtml = ``;

// Questions in Array for User Input
const Questions = [
  {
    type: "input",
    name: "name",
    message: "What is the employee's name?",
  },
  {
    type: "input",
    name: "id",
    message: "What is his/her ID?",
  },
  {
    type: "input",
    name: "email",
    message: "What is the employee's email address?",
  },
  console.log(questions),
];

// Array of team members selected by Manager
const managerQuestions = Questions.concat({
  type: "list",
  name: "officeNum",
  message: "What's the Manager's office number?",
});

const engineerQuestions = Questions.concat({
  type: "list",
  name: "github",
  message: "What is the GitHub username of this Engineer?",
});

const internQuestions = Questions.concat({
  type: "input",
  name: "school",
  message: "What college/university is the Intern currently attending?",
});

init();
