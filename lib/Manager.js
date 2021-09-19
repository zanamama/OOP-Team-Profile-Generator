const Employee = require("./Employee.js");

const Manager = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getOfficeNumber() {
    return this.officeNum;
  }

  getRole() {
    return "Manager";
  }
}

modules.export = Manager;