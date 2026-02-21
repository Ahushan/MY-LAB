USE student_management_db;

-- VIEWS
-- A view is a virtual table based on a SELECT query.

-- Create a view for active students
CREATE VIEW active_students AS
SELECT 
    student_id,
    CONCAT(first_name, ' ', last_name) AS student_name,
    email,
    department_id
FROM students
WHERE status = 'Active';

-- Use the view
SELECT * FROM active_students;

-- Create view with join
CREATE VIEW student_department_view AS
SELECT 
    s.student_id,
    CONCAT(s.first_name, ' ', s.last_name) AS student_name,
    d.department_name
FROM students s
INNER JOIN departments d
    ON s.department_id = d.department_id;

-- Use the joined view
SELECT * FROM student_department_view;

-- Drop view
-- DROP VIEW active_students;