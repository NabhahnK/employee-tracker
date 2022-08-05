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
                console.table(result);
            })
            break;
        case "View all Roles":
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
            })
            break;
        case "View all Employees":
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
            })
            break;
        case "Add a Department":
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
            })
            break;
        case "Add a Role":
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
            })
            break;
        case "Add an Employee":
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
            })
            break;
        case "Update an Employee Role":
            db.query(`SELECT * FROM department`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
            })
            break;
    }
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
            console.log(option);
            viewTables(option);
        });
}

init();