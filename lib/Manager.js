const Employee = require("./Employee.js");

const Manager = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNum) {
    super(name, id, email);
    this.officeNum = officeNum;
  }

  getOfficeNumber() {
    return this.officeNum;
  }

  getRole() {
    return "Manager";
  }
}

modules.export = Manager;
