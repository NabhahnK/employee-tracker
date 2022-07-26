const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");

function init() {
    mainOptions();
}

function mainOptions() {
    // First question is askd
    // inquirer
    //     .prompt([
    //         {
    //             name: "managerName",
    //             type: "input",
    //             message: "What is your managers name?",
    //         },
    //         {
    //             name: "managerID",
    //             type: "number",
    //             message: "What is their ID number?"
    //         },
    //         {
    //             name: "managerEmail",
    //             type: "input",
    //             message: "What is their Email?"
    //         },
    //         {
    //             name: "managerOfficeNumber",
    //             type: "number",
    //             message: "What is their office number?"
    //         }
    //     ])
    //     .then((answers) => {
    //         const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
    //         team.push(manager);
    //         console.log(team);
    //         checkBuildStatus();
    //     });
}

init();