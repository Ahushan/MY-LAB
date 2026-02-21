-- NORMALIZATION EXAMPLES

-- BAD DESIGN (Not Normalized)
-- Violates 1NF (multiple values in one column)

CREATE TABLE unnormalized_students (
    student_id INT,
    student_name VARCHAR(100),
    courses VARCHAR(255)  -- Example: 'Math, Science, Physics'
);

-- Problem:
-- Multiple values in single column
-- Hard to query
-- Data inconsistency risk


-- 1NF (First Normal Form)
-- Each column must contain atomic (single) values

CREATE TABLE students_1nf (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100)
);

CREATE TABLE student_courses_1nf (
    student_id INT,
    course_name VARCHAR(100)
);


-- 2NF (Second Normal Form)
-- Remove partial dependency
-- Every non-key column must depend on whole primary key

CREATE TABLE students_2nf (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    department_id INT
);

CREATE TABLE courses_2nf (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100),
    department_id INT
);


-- 3NF (Third Normal Form)
-- Remove transitive dependency

-- BAD 3NF example:
-- department_name depends on department_id, not student_id

CREATE TABLE students_bad_3nf (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    department_id INT,
    department_name VARCHAR(100)
);

-- Correct 3NF structure:

CREATE TABLE departments_3nf (
    department_id INT PRIMARY KEY,
    department_name VARCHAR(100)
);

CREATE TABLE students_3nf (
    student_id INT PRIMARY KEY,
    student_name VARCHAR(100),
    department_id INT,
    FOREIGN KEY (department_id)
        REFERENCES departments_3nf(department_id)
);