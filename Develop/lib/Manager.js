// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    //super refers to supercalss parent objects, aka employee objects
    console.log(name, id, email);
    console.log("in manager class, after console log of name id and email");
    super(name, id, email);
    // console.log("after super is called");
    console.log(name, id, email);
    this.office = office;
    console.log(this.office);
  }

  getOfficeNumber() {
    console.log(this.office);
    console.log("inside manager.js this.office console.log");
    return this.office;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
