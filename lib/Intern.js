
const Employee = require("./Emplooyee");

class Intern extends Employee {
    constructor(name, id, email);
}

const inquirer = require("inquirer");

class Intern {
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
    message: "What is the name of your school?",
    type: "input",
  },
];

inquirer.prompt(internQs).then((answers) => {
  // Use user feedback for... whatever!!
  const intern = new Intern(answers.fullName, answers.id, answers.email);
  console.log(employee1);
});


modules.export = Intern;