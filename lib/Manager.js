const { moduleExpression } = require("@babel/types");

const Manager = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email);
}

const inquirer = require("inquirer");

class Manager {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }
}

const managerQs = [
  {
    name: "fullName",
    message: "What is your name?",
    type: "input",
  },
  {
    name: "id",
    message: "What is your id?",
    type: "input",
  },
  {
    name: "email",
    message: "What is your email?",
    type: "input",
  },
  {
    name: "email",
    message: "What is your office number?",
    type: "input",
  },
];

inquirer.prompt(managerQs).then((answers) => {
  // Use user feedback for... whatever!!
  const manager = new Manager(answers.fullName, answers.id, answers.email);
  console.log(manager);
});

modules.export = Manager;