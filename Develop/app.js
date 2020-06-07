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

// add team members
const addTeamMember = () => {
  inquirer
    //prompt user to select who to add
    .prompt([
      {
        type: "list",
        message: "please select a team member to add",
        name: "typeOfTeamMem",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then((choice) => {
      //call function and pass choice either eng intern or manager
      typeOfEmployee(choice);
    });
};

const typeOfEmployee = (choice) => {
  const choiceSelected = choice.typeOfTeamMem;

  if (choiceSelected === "Engineer") {
    selectedEngineer(choiceSelected);
  } else if (choiceSelected === "Intern") {
    selectedIntern(choiceSelected);
  } else if (choiceSelected === "Manager") {
    selectedManager(choiceSelected);
  }
};
//call addTeamMember for inistial call prompt to add team member
addTeamMember();

const selectedEngineer = (choiceSelected) => {
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
      //create a new engineer and pass all the questions answered from above to class
      const newEngineer = new Engineer(
        engChoice.name,
        engChoice.id,
        engChoice.email,
        engChoice.github
      );
      teamMembers.push(newEngineer);
      addMoreTeamMembers();
    });
  //do something
};
const selectedIntern = (choiceSelected) => {
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
        name: "school",
      },
    ])
    .then((intChoice) => {
      const newIntern = new Intern(
        intChoice.name,
        intChoice.id,
        intChoice.email,
        intChoice.school
      );
      teamMembers.push(newIntern);
      addMoreTeamMembers();
    });
};

const selectedManager = (choiceSelected) => {
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
        name: "officeNumber",
      },
    ])
    .then((manChoice) => {
      const newManager = new Manager(
        manChoice.name,
        manChoice.id,
        manChoice.email,
        manChoice.officeNumber
      );
      teamMembers.push(newManager);
      addMoreTeamMembers();
    });
  //do something
};

const addMoreTeamMembers = () => {
  inquirer
    //prompt user to select who to add
    .prompt([
      {
        type: "list",
        message: "Would you like to add another Team Member?",
        name: "addAnotherTeam",
        choices: ["Yes", "No"],
      },
    ])
    .then((choice) => {
      if (choice.addAnotherTeam === "No") {
        //call render html
        renderHTML();
      } else {
        addTeamMember();
      }
    });
};

const renderHTML = () => {
  let html = render(teamMembers);
  fs.writeFile(outputPath, html, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success writing team.html");
  });
};
