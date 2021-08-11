const Employee = require("./Emplooyee");

class Engineer extends Employee {
    constructor(name, id, email);
}

const inquirer = require("inquirer");

class Engineer {
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

const engineerQs = [
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
    message: "What is your github username?",
    type: "input",
  },
];

inquirer.prompt(engineerQs).then((answers) => {
  // Use user feedback for... whatever!!
  const engineer1 = new Engineer(answers.fullName, answers.id, answers.email);
  console.log(employee1);
});


modules.export = Engineer;



