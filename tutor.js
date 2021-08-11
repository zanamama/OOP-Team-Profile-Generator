const inquirer = require("inquirer");

class Employee {
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

const generalEmployeeQs = [
  {
    name: "fullName",
    message: "What is your name",
    type: "input",
  },
  {
    name: "id",
    message: "What is your id",
    type: "input",
  },
  {
    name: "email",
    message: "What is your email",
    type: "input",
  },
];

inquirer.prompt(generalEmployeeQs).then((answers) => {
  // Use user feedback for... whatever!!
  const employee1 = new Employee(answers.fullName, answers.id, answers.email);
  console.log(employee1);
});

// const engineerQs = [
//   {
//     name: "",
//     message: "what is your github",
//     type: "",
//   },
// ];
