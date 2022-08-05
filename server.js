const mysql = require("mysql2");
const cTable = require("console.table");
const inquirer = require("inquirer");
require('dotenv').config();
// Make a class with db as methonds/ do this after it works

// View tables on console
function userAction(table) {
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
            db.query(`SELECT * FROM role`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
            })
            break;
        case "View all Employees":
            db.query(`SELECT * FROM employee`, (err, result) => {
                if (err) {
                    console.log(err);
                }
                console.table(result);
            })
            break;
        case "Add a Department":
            inquirer
                .prompt([
                    {
                        name: "id",
                        type: "input",
                        message: "What is the department ID?"
                    },
                    {
                        name: "name",
                        type: "input",
                        message: "What is the department name?"
                    }

                ])
                .then((answer) => {
                    const option = answer;
                    console.log(option);
                    db.query(`INSERT INTO department
                            VALUES(?,?)`, [option.id, option.name], (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log("Added Department.");
                    })
                });
            break;
        case "Add a Role":
            inquirer
                .prompt([
                    {
                        name: "id",
                        type: "input",
                        message: "What is the role ID?"
                    },
                    {
                        name: "title",
                        type: "input",
                        message: "What is the role title?"
                    },
                    {
                        name: "salary",
                        type: "number",
                        message: "What is the role salary?"
                    },
                    {
                        name: "department_id",
                        type: "input",
                        message: "What is the department ID that the role belongs to?"
                    }

                ])
                .then((answer) => {
                    const option = answer;
                    console.log(option);
                    db.query(`INSERT INTO role
                        VALUES(?,?,?,?)`, [option.id, option.title, option.salary, option.department_id], (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log("Added Role.");
                    })
                });
            break;
        case "Add an Employee":
            inquirer
                .prompt([
                    {
                        name: "id",
                        type: "input",
                        message: "What is the employrr ID?"
                    },
                    {
                        name: "first_name",
                        type: "input",
                        message: "What is the employees first name?"
                    },
                    {
                        name: "last_name",
                        type: "number",
                        message: "What is the employees last name?"
                    },
                    {
                        name: "role_id",
                        type: "input",
                        message: "What is the role ID that the employee belongs to?"
                    },
                    {
                        name: "manager_id",
                        type: "input",
                        message: "What is the manager ID that the employee works for?"
                    }

                ])
                .then((answer) => {
                    const option = answer;
                    console.log(option);
                    db.query(`INSERT INTO employee
                        VALUES(?,?,?,?)`, [option.id, option.first_name, option.last_name, option.role_id, option.manager_id], (err, result) => {
                        if (err) {
                            console.log(err);
                        }
                        console.log("Added employee.");
                    })
                });
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
            userAction(option);
        });
}

init();