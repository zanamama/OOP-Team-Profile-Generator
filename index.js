// DEPENDENCIES & Packages ===========
const inquirer = require("inquirer");
const fs = require("fs");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
const Manager = require("./lib/Manager.js");
const fileName = "./dist/index.html";

// DATA ===========
let htmlCards = ``;
let job = "Manager";
let finalHtml = ``;

// Questions in Array for User Input
const questions = [
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
];

// Array of team members selected by Manager
const managerQuestions = questions.concat({
  type: "input",
  name: "officeNum",
  message: "What's the Manager's office number?",
});

const engineerQuestions = questions.concat({
  type: "input",
  name: "github",
  message: "What is the GitHub username of this Engineer?",
});

const internQuestions = questions.concat({
  type: "input",
  name: "school",
  message: "What college/university is the Intern currently attending?",
});

// FUNCTIONS

const employeeCard = (employee) => {
  let html = ``;
  const role = employee.getRole();

  switch (role) {
    case "Manager":
      html = `<div class='card m-5 c-${role}'>
                  <div class='card-body'>
                      <h5 class="card-title">${employee.name}</h5>
                      <p class="card-text">${role}</p>
                  </div>
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item">ID: ${employee.id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                      <li class="list-group-item">Office Number: ${employee.officeNum}</a></li>
                    </ul>
                </div>`;
      break;
    case "Engineer":
      html = `<div class='card m-5 c-${role}'>
                  <div class='card-body'>
                      <h5 class="card-title">${employee.name}</h5>
                      <p class="card-text">${role}</p>
                  </div>
                    <u class="list-group list-group-flush"l>
                      <li class="list-group-item">ID: ${employee.id}</li>
                      <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                      <li class="list-group-item">Github: <a href="https://www.github.com/${employee.github}">${employee.github}</a></li>
                    </ul>
                </div>`;
      break;
    case "Intern":
      html = `<div class='card m-5 c-${role}'>
                  <div class='card-body'>
                      <h5 class="card-title">${employee.name}</h5>
                      <p class="card-text">${role}</p>
                  </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                        <li class="list-group-item">University: ${employee.school}</li>
                    </ul>
                </div>`;
      break;
  }
  htmlCards += html;
};

const finalHtmlCreator = (htmlCards) => {
  finalHtml = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossorigin="anonymous"
        />
        <link rel='stylesheet' href='./style.css'>
        <title>Team Profile</title>
    </head>
    <body>
        <header>
            <h1 id='heading'>Team</h1>
        </header>
        <main class='container'>
            ${htmlCards}
        </main>
    </body>
    </html>`;
};

const addEmployee = (answer, job) => {
  const name = answer.name;
  const id = answer.id;
  const email = answer.email;
  const officeNum = answer.officeNum;
  const github = answer.github;
  const school = answer.school;

  switch (job) {
    case "Manager":
      employee = new Manager(name, id, email, officeNum);
      break;
    case "Engineer":
      employee = new Engineer(name, id, email, github);
      break;
    case "Intern":
      employee = new Intern(name, id, email, school);
  }

  employeeCard(employee);
};

const GenerateHtml = (finalHtml) => {
  fs.writeFile(fileName, finalHtml, (err) => {
    err ? console.log("Error!") : console.log("File Created!");
  });
};

const startInquirer = (questions) => {
  inquirer.prompt(questions).then((answers) => {
    inquirer
      .prompt([
        {
          type: "confirm",
          name: "add",
          message: "Would you like to add another employee to the team?",
        },
      ])
      .then((choice) => {
        addEmployee(answers, job);
        if (choice.add) {
          inquirer
            .prompt([
              {
                type: "list",
                name: "newRole",
                message: "Which role would you like to add?",
                choices: ["Engineer", "Intern"],
              },
            ])
            .then((empChoice) => {
              const userChoice = empChoice.newRole;

              job = userChoice;

              init();
            });
        } else {
          finalHtmlCreator(htmlCards);
          GenerateHtml(finalHtml);
        }
      });
  });
};

const init = () => {
  if (job === "Manager") {
    console.log("Lets start by adding the Manager.");
    startInquirer(managerQuestions);
  } else if (job === "Engineer") {
    startInquirer(engineerQuestions);
  } else if (job === "Intern") {
    startInquirer(internQuestions);
  }
};

init();
