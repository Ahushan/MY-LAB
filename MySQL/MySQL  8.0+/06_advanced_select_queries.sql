-- ADVANCED SELECT QUERIES

-- WHERE CLAUSE WITH CONDITION
-- Select active Computer Science students
SELECT first_name, last_name, department_id, status
FROM students
WHERE status = 'Active'
  AND department_id = 1;

-- Select female students in Business Administration
SELECT first_name, last_name, department_id, gender
FROM students
WHERE gender = 'Female'
  AND department_id = 3;



-- SQL COMPARISON OPERATORS
-- =    → Equal to
-- <>   → Not equal to (also written as != in some SQL dialects)
-- >    → Greater than
-- >=   → Greater than or equal to
-- <    → Less than
-- <=   → Less than or equal to
-- BETWEEN → Between a range (inclusive)
-- IN   → Value exists in a list
-- LIKE → Pattern matching (%, _)
-- IS NULL / IS NOT NULL → Checks for NULL values

-- Example:
-- SELECT * FROM students WHERE status = 'Active';
-- SELECT * FROM students WHERE department_id <> 4;
-- SELECT * FROM students WHERE enrollment_date BETWEEN '2022-01-01' AND '2023-12-31';
-- SELECT * FROM students WHERE department_id IN (1,3);
-- SELECT * FROM students WHERE first_name LIKE 'J%';
-- SELECT * FROM students WHERE phone_number IS NULL;
-- Select students NOT in Electrical Engineering



SELECT first_name, last_name, department_id
FROM students
WHERE department_id <> 4; 



-- OR CLAUSE
-- Select students in CS or ME departments
SELECT first_name, last_name, department_id
FROM students
WHERE department_id = 1
   OR department_id = 2;


   
-- BETWEEN CLAUSE
-- Students born between 2002-01-01 and 2003-12-31
SELECT first_name, last_name, date_of_birth
FROM students
WHERE date_of_birth BETWEEN '2002-01-01' AND '2003-12-31'; 



-- IN CLAUSE
-- Students in specific departments
SELECT first_name, last_name, department_id
FROM students
WHERE department_id IN (1,3);



-- LIKE CLAUSE
-- Students whose first name starts with 'J'
SELECT first_name, last_name
FROM students
WHERE first_name LIKE 'J%';

-- Students whose last name contains 'son'
SELECT first_name, last_name
FROM students
WHERE last_name LIKE '%son%'; 

-- Students whose first name contains 'a' in second letter
SELECT first_name, last_name
FROM students
WHERE last_name LIKE '_a%'; 



-- LIMIT
-- First 5 students in the database
SELECT * FROM students
LIMIT 5;

-- Skip first 3 students and get next 5
SELECT * FROM students
LIMIT 3,5; 



-- AGGREGATE FUNCTIONS
-- Total number of students
SELECT COUNT(*) AS total_students
FROM students;

-- Average credits of courses
SELECT AVG(credits) AS average_credits
FROM courses;

-- Maximum credits
SELECT MAX(credits) AS max_credits
FROM courses;

-- Minimum credits
SELECT MIN(credits) AS min_credits
FROM courses; 



-- ORDER BY
 -- Students sorted by last name ascending
SELECT first_name, last_name
FROM students
ORDER BY last_name ASC;

-- Students sorted by enrollment date descending
SELECT first_name, last_name, enrollment_date
FROM students
ORDER BY enrollment_date DESC;



-- GROUP BY & HAVING CALUSE
-- Count students per department
SELECT department_id, COUNT(*) AS total_students
FROM students
GROUP BY department_id;

-- Count active students per department (HAVING)
SELECT department_id, COUNT(*) AS active_students
FROM students
WHERE status = 'Active'
GROUP BY department_id
HAVING COUNT(*) > 2; 

-- SQL RULES AND BEST PRACTICES :
--  WHERE clause:
-- - Filters raw rows BEFORE aggregation.
-- - Can use any comparison operator (=, <>, >, >=, <, <=, BETWEEN, IN, LIKE, IS NULL)
-- - Cannot filter aggregated results directly (use HAVING for that).

-- HAVING clause:
-- - Filters AFTER aggregation (i.e., after GROUP BY).
-- - Must be used with GROUP BY or aggregate functions (COUNT, SUM, AVG, MIN, MAX).
-- - Cannot be used to filter raw rows without aggregation.

-- ORDER BY clause:
-- - Sorts the result set (ascending ASC or descending DESC).
-- - Can be used with or without GROUP BY/HAVING.
-- - Comes AFTER SELECT / WHERE / GROUP BY / HAVING.

-- LIMIT clause:
-- - Limits the number of rows returned in the final result.
-- - Always applied at the very end (after ORDER BY / HAVING).

-- Correct Clause Order in SQL:
-- FROM / JOIN   → Fetch tables
-- WHERE         → Filter raw rows
-- GROUP BY      → Aggregate rows
-- HAVING        → Filter aggregated groups
-- SELECT        → Choose columns (after aggregation)
-- ORDER BY      → Sort results
-- LIMIT         → Limit final output