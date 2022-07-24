USE employees_db;

INSERT INTO department (id, name)
VALUES
    (5, "The Department Of Stuffs");

INSERT INTO role (id, title, salary, department_id)
VALUES
    (3, "Sammy", 45.00, 5),
    (7, "Dammy", 45.00, 5);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES 
    (4, "The Sammy", "Lost Sammy", 3, NULL),
    (8, "The Dammy", "Lost Dammay", 7, 4);