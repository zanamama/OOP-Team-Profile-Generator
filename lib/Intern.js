
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

modules.export = Intern;