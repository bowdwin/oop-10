// TODO: Write code to define and export the Employee class
class Employee {
  //will run when class is called
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  //create a method
  user() {
    console.log(`${this.name} is the name`);
  }
}

module.exports = Employee;
