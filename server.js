const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");

function init() {
    mainOptions();
}

function mainOptions() {
    // First question is asked
    inquirer
        .prompt([
            {
                name: "option",
                type: "list",
                message: "What do you want to do?",
                choices: [ "View all Departments", "View all Roles", "View all Employees",
                        "Add a Department", "Add a Role", "Add an Employee"]
            }
        ])
        .then((answer) => {
            const option = answer;
            // team.push(manager);
            console.log(option);
            // checkBuildStatus();
        });
}

init();