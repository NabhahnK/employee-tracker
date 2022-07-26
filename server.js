const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");

// Connect to database
// const db = mysql.createConnection(
//     {
//         host: process.env.DB_LOCATION,
//         // MySQL username,
//         user: process.env.DB_USER,
//         // MySQL password
//         password: process.env.DB_PASSWORD,
//         database: 'employees_db'
//     },
//     console.log(`Connected to the employees_db database.`)
// );

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
                choices: ["View all Departments", "View all Roles", "View all Employees",
                    "Add a Department", "Add a Role", "Add an Employee", "Update an Employee Role"]
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