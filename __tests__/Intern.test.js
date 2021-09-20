const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("Get School", () => {
    it("Should return the interns school.", () => {
      const school = "Penn State University";

      const obj = new Intern("Sarah", 711427, "sarah@psu.edu", school);

      expect(obj.getSchool()).toEqual(school);
    });
  });

  describe("Get Role", () => {
    it("Should return Intern.", () => {
      const role = "Intern";

      const obj = new Intern(
        "Sarah",
        711254,
        "sarah@psu.edu",
        "Penn State University"
      );

      expect(obj.getRole()).toEqual(role);
    });
  });
});
