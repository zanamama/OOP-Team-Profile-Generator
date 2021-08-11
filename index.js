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
let teamArray = [generateHTML];

// Questions in Array for User Input
const initialManagerQuestions = [
    {
        type: "input",
        name: "mainName",
        message: "What is your name?",
    },
    {
        type: "input",
        name: "mainID",
        message: "What is your ID?",
    },
    {
        type: "input",
        name: "mainEmail",
        message: "What is your email address?",
    },
    console.log(initialManagerQuestions)
];

// Array of team members selected by Manager
const selectTeamMemberQuestion = [
    {
        type: "list",
        name: "What is your role here?",
        choices: ["Intern", "Engineer", "Manager"],
    }
]



function writeToFile();


const selectTeamMemberQuestion = [

]

function caputreInternInfo() {
    inquirer.prompt(internQuestions).then(function (internInfo))
    }




function init() {
    inquirer
     .prompt
}