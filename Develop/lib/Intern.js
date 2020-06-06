// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    //super refers to supercalss parent objects, aka employee objects
    console.log(name, id, email);
    console.log("in Intern class, after console log of name id and email");
    super(name, id, email);
    // console.log("after super is called");
    console.log(name, id, email);
    this.school = school;
    console.log(this.school);
  }

  getSchool() {
    console.log(this.school);
    console.log("after school this.school in js");
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
