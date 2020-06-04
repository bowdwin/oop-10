const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//will store all team members
const teamMembers = [];

inquirer
  //prompt user to select who to add
  .prompt([
    {
      type: "list",
      message: "please select a team member to add",
      name: "typeOfTeamMem",
      choices: ["Engineer", "Intern", "Manager", "don't add team members"],
    },
  ])
  .then((choice) => {
    console.log(choice);
    typeOfEmployee(choice);
  });

const typeOfEmployee = (choice) => {
  console.log(choice);
  const choiceSelected = choice.typeOfTeamMem;
  console.log(choiceSelected, "choice selected");

  if (choiceSelected === "Engineer") {
    //do something

    console.log("engineer was selected");
    selectedEngineer(choiceSelected);
  } else if (choiceSelected === "Intern") {
    //do something
    console.log("else if selected for intern");
    selectedIntern(choiceSelected);
  } else if (choiceSelected === "Manager") {
    //do something
    selectedManager(choiceSelected);
    console.log("else if manager was selected");
  } else {
    console.log("else was selected");
    //end
  }
};

const selectedEngineer = (choiceSelected) => {
  console.log("selectedEngConstructor");
  inquirer
    .prompt([
      {
        type: "input",
        message: `Enter name for ${choiceSelected}`,
        name: "name",
      },
      {
        type: "input",
        message: `Enter id for ${choiceSelected}`,
        name: "id",
      },
      {
        type: "input",
        message: `Enter email for ${choiceSelected}`,
        name: "email",
      },
      {
        type: "input",
        message: `Enter github username for ${choiceSelected}`,
        name: "github",
      },
    ])
    .then((engChoice) => {
      console.log(engChoice);
      console.log("right after engineer choice");
      // choice = this.choice;
      // typeOfEmployee(choice);
    });
  //do something
};
const selectedIntern = (choiceSelected) => {
  console.log("selectedEngConstructor");
  inquirer
    .prompt([
      {
        type: "input",
        message: `Enter name for ${choiceSelected}`,
        name: "name",
      },
      {
        type: "input",
        message: `Enter id for ${choiceSelected}`,
        name: "id",
      },
      {
        type: "input",
        message: `Enter email for ${choiceSelected}`,
        name: "email",
      },
      {
        type: "input",
        message: `Enter the school that the ${choiceSelected} is attending`,
        name: "github",
      },
    ])
    .then((intChoice) => {
      console.log(intChoice);
      // choice = this.choice;
      // typeOfEmployee(choice);
    });
  //do something
};

const selectedManager = (choiceSelected) => {
  console.log("selectedEngConstructor");
  inquirer
    .prompt([
      {
        type: "input",
        message: `Enter name for ${choiceSelected}`,
        name: "name",
      },
      {
        type: "input",
        message: `Enter id for ${choiceSelected}`,
        name: "id",
      },
      {
        type: "input",
        message: `Enter email for ${choiceSelected}`,
        name: "email",
      },
      {
        type: "input",
        message: `Enter office number for ${choiceSelected}`,
        name: "officenumber",
      },
    ])
    .then((engChoice) => {
      console.log(engChoice);
      // choice = this.choice;
      // typeOfEmployee(choice);
    });
  //do something
};

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
