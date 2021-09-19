const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getrole() {
    return "Engineer";
  }

  getGithub() {
    return this.github;
  }
}

modules.export = Engineer;
