require('dotenv').config();
const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
// Make a class with db as methonds/ do this after it works

// View tables on console
function viewTables(table) {
    switch (table.option) {
        case "View all Departments":
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.log(result);
            })
            break;
    };
    // db.query(`SELECT * FROM ?`, selection, (err, result) => {
    //     if (err) {
    //         console.log(err);
    //     }
    //     console.log(result);
    // })
}

// Connect to database
const db = mysql.createConnection(
    {
        host: "localhost",
        // MySQL username,
        user: "root",
        // MySQL password
        password: "Sh@dow/<night43",
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

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
            viewTables(option);
            // checkBuildStatus();
        });
}

init();