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