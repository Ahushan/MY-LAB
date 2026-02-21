-- Use the database
USE student_management_db;

-- SUBQUERIES AND SET OPERATIONS

-- SUBQUERY IN SELECT
-- Purpose: Use a subquery to calculate a value for each row in the main query
-- Example: Get student name and the total number of courses in their department
SELECT 
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    (
        SELECT COUNT(*) 
        FROM courses c
        WHERE c.department_id = s.department_id
    ) AS total_courses_in_department
FROM students s;

-- SUBQUERY IN FROM
-- Purpose: Use a subquery as a temporary table to join with other tables
-- Example: Count how many students are in each department
SELECT 
    dept_counts.department_id, 
    d.department_name, 
    dept_counts.total_students
FROM
    (
        SELECT department_id, COUNT(*) AS total_students
        FROM students
        GROUP BY department_id
    ) AS dept_counts
INNER JOIN departments d
    ON dept_counts.department_id = d.department_id;

-- SUBQUERY IN WHERE
-- Purpose: Filter main query results based on a condition from another query
-- Example: Select students whose department has more than 2 courses
SELECT 
    student_id, 
    CONCAT(first_name, ' ', last_name) AS student_name, 
    department_id
FROM students
WHERE department_id IN 
    (
        SELECT department_id
        FROM courses
        GROUP BY department_id
        HAVING COUNT(*) > 2
    );

-- EXISTS
-- Purpose: Check if a condition exists in a subquery (returns TRUE/FALSE)
-- Example: List students who have at least one course in their department
SELECT 
    student_id, 
    CONCAT(first_name, ' ', last_name) AS student_name
FROM students s
WHERE EXISTS
    (
        SELECT 1
        FROM courses c
        WHERE c.department_id = s.department_id
    );

-- NOT EXISTS
-- Purpose: Check if a condition does NOT exist
-- Example: List students whose department has no courses
SELECT 
    student_id, 
    CONCAT(first_name, ' ', last_name) AS student_name
FROM students s
WHERE NOT EXISTS
    (
        SELECT 1
        FROM courses c
        WHERE c.department_id = s.department_id
    );

-- UNION
-- Purpose: Combine results from two queries into a single result set, removing duplicates
-- Example: Combine student IDs and course IDs into one list
SELECT student_id AS id, CONCAT(first_name, ' ', last_name) AS name
FROM students
UNION
SELECT course_id AS id, course_name AS name
FROM courses;

-- UNION ALL
-- Purpose: Combine results from two queries, keeping duplicates
SELECT student_id AS id, CONCAT(first_name, ' ', last_name) AS name
FROM students
UNION ALL
SELECT course_id AS id, course_name AS name
FROM courses;

-- ANY
-- Purpose: Compare a value to **any** value returned by a subquery
-- Example: Find students in departments that have at least one course with more than 3 credits
SELECT 
    student_id, 
    CONCAT(first_name, ' ', last_name) AS student_name
FROM students
WHERE department_id = ANY
    (
        SELECT department_id
        FROM courses
        WHERE credits > 3
    );

-- ALL
-- Purpose: Compare a value to **all** values returned by a subquery
-- Example: Find students in departments where **all courses** have at least 3 credits
SELECT 
    student_id, 
    CONCAT(first_name, ' ', last_name) AS student_name
FROM students
WHERE department_id = ALL
    (
        SELECT department_id
        FROM courses
        WHERE credits >= 3
    );