const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Get Name", () => {
    it("Should return the name of the employee.", () => {
      const name = "Harvey";

      const obj = new Employee(name, 711254, "harvey@howard.edu");

      expect(obj.getName()).toEqual(name);
    });
  });

  describe("Get ID", () => {
    it("Should return the ID of the employee.", () => {
      const ID = 711254;

      const obj = new Employee("Harvey", ID, "harvey@howard.edu");

      expect(obj.getID()).toEqual(ID);
    });
  });

  describe("Get Email", () => {
    it("Should Return the email of the employee.", () => {
      const email = "harvey@howard.edu";

      const obj = new Employee("Harvey", 1, email);

      expect(obj.getEmail()).toEqual(email);
    });
  });

  describe("Get Role", () => {
    it("Should return the email of the employee.", () => {
      const role = "Employee";

      const obj = new Employee("Harvey", 1, "harvey@howard.edu");

      expect(obj.getRole()).toEqual(role);
    });
  });
});
