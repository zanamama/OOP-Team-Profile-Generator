const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("Get Github", () => {
    it("Should return the engineers github.", () => {
      const github = "zanamama";

      const obj = new Engineer(
        "Makhosazana",
        1,
        "zana@intercomstaffing.com",
        github
      );

      expect(obj.getGithub()).toEqual(github);
    });
  });

  describe("Get Role", () => {
    it("Should return Engineer.", () => {
      const role = "Engineer";

      const obj = new Engineer(
        "Makhosazana",
        711326,
        "zana@intercomstaffing.com",
        "zanamama"
      );

      expect(obj.getRole()).toEqual(role);
    });
  });
});
