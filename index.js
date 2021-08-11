// DEPENDENCIES & Packages ===========
const inquirer = require("inquirer");
const fs = require("fs")
const employee = require("./lib/Employee");
const intern = require("./lib/Intern");
const engineer = require("./lib/Engineer");
const manager = require("./lib/Manager");
const genHTML = require("./src/generateHTML");

// DATA ===========
const filename = "index.html";
let teamArray = [];

// Questions in Array for User Input
const initialManagerQuestions = [
    {
        type: "input",
        name: "managerName",
        message: "What is your team Manager's name?",
    },
    {
        type: "input",
        name: "managerID",
        message: "What is your Manager's ID?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is your team Manager's email address?",
    },
    {
        type: "input",
        name: "managerOfficeNumber",
        message: "What is your manager's office number?",
    },
];

// Array of team members selected by Manager
const selectTeamMemberQuestion = [
    {
        type: "list",
        name: "How many years of experience do you have?"
        input: "",
        choices: ["Under 3 years", "3-5 Years", "5-10 Years" , "10+ Years"],
    }
]



function writeToFile


const selectTeamMemberQuestion = [

]

function caputreInternInfo() {
    inquirer.prompt(internQuestions).then(function (internInfo));
}



function init() {
    inquirer
     .prompt
}