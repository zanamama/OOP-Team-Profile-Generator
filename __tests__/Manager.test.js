const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("Get Office Number", () => {
    it("Should return the managers office number.", () => {
      const officeNum = 2674173600;

      const obj = new Manager(
        "Steve",
        711501,
        "steve@intercomstaffing.com",
        officeNum
      );

      expect(obj.getOfficeNumber()).toEqual(officeNum);
    });
  });

  describe("Get Role", () => {
    it("Should return Intern.", () => {
      const role = "Manager";

      const obj = new Manager(
        "Steve",
        711501,
        "steve@intercomstaffing.com",
        2674173600
      );

      expect(obj.getRole()).toEqual(role);
    });
  });
});
