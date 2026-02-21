-- Use the database
USE student_management_db;

-- SQL JOIN TYPES REFERENCE:
-- INNER JOIN → Returns only matching rows from both tables
-- LEFT JOIN  → Returns all rows from the left table, matching rows from right table (NULL if no match)
-- RIGHT JOIN → Returns all rows from the right table, matching rows from left table (NULL if no match)
-- FULL JOIN  → Returns all rows from both tables (MySQL: emulate using UNION)
-- SELF JOIN  → Join table with itself
-- CROSS JOIN → Cartesian product of two tables

-- INNER JOIN
-- Example: Students with their department names
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    d.department_name
FROM students s
INNER JOIN departments d
    ON s.department_id = d.department_id;

-- LEFT JOIN
-- Example: All students, even if they have no department
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    d.department_name
FROM students s
LEFT JOIN departments d
    ON s.department_id = d.department_id;

-- RIGHT JOIN
-- Example: All departments, including ones without students
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    d.department_name
FROM students s
RIGHT JOIN departments d
    ON s.department_id = d.department_id;

-- FULL OUTER JOIN
-- Example: All students and all departments
-- Note: MySQL does not support FULL JOIN natively; emulate with UNION of LEFT JOIN + RIGHT JOIN
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    d.department_name
FROM students s
LEFT JOIN departments d ON s.department_id = d.department_id
UNION
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    d.department_name
FROM students s
RIGHT JOIN departments d ON s.department_id = d.department_id;

-- SELF JOIN
-- Example: Students in the same department (pairs of students)
SELECT 
    s1.student_id AS student1_id,
    CONCAT(s1.first_name, ' ', s1.last_name) AS student1_name,
    s2.student_id AS student2_id,
    CONCAT(s2.first_name, ' ', s2.last_name) AS student2_name,
    s1.department_id
FROM students s1
INNER JOIN students s2
    ON s1.department_id = s2.department_id
    AND s1.student_id < s2.student_id;

-- CROSS JOIN
-- Example: Cartesian product between students and courses
-- Note: Produces all combinations; use carefully
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    c.course_id,
    c.course_name
FROM students s
CROSS JOIN courses c;

-- JOIN WITH ADDITIONAL CONDITIONS
-- Example: Students enrolled in courses of their own department
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    c.course_name,
    d.department_name
FROM students s
INNER JOIN courses c ON s.department_id = c.department_id
INNER JOIN departments d ON s.department_id = d.department_id;