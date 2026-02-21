-- SELECT STATEMENTS

-- Select all columns from students
SELECT * FROM students; 

-- Select specific columns
SELECT first_name, last_name
FROM students;

-- Concatenate first and last name (Alias Example)
SELECT 
    CONCAT(first_name, ' ', last_name) AS student_name
FROM students;


-- Select multiple specific columns
SELECT 
    student_id,
    CONCAT(first_name, ' ', last_name) AS student_name,
    department_id
FROM students;

-- Get distinct department IDs from students
SELECT DISTINCT department_id
FROM students;