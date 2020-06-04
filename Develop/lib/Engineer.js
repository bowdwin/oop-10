// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    //super refers to supercalss parent objects, aka employee objects
    console.log(name, id, email);
    console.log("in engineer class, after osole log of name id and email");
    super(name, id, email);
    console.log("after super is called");
    console.log(name, id, email);
    this.github = github;
    console.log(this.github);
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
