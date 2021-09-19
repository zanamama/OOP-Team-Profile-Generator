const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Get School", () => {
    it("Should return the interns school.", () => {
      const school = "Howard University";

      const obj = new Intern("Harvey", 1, "harvey@howard.edu", school);

      expect(obj.getSchool()).toEqual(school);
    });
  });

  describe("Get Role", () => {
    it("Should return Intern.", () => {
      const role = "Intern";

      const obj = new Intern(
        "Harvey",
        711254,
        "harvey@howard.edu",
        "Howard University"
      );

      expect(obj.getRole()).toEqual(role);
    });
  });
});
