-- Use the database
USE student_management_db;

-- STORED PROCEDURES AND FUNCTIONS
-- Stored Procedure → A reusable block of SQL statements.
-- Function → A reusable block that returns a single value.

-- STORED PROCEDURE: INSERT NEW STUDENT
-- Purpose: Insert a new student into the students table

DELIMITER $$

CREATE PROCEDURE add_student (
    IN p_first_name VARCHAR(50),
    IN p_last_name VARCHAR(50),
    IN p_email VARCHAR(100),
    IN p_phone VARCHAR(15),
    IN p_department_id INT,
    IN p_enrollment_date DATE
)
BEGIN
    INSERT INTO students (
        first_name,
        last_name,
        email,
        phone_number,
        department_id,
        enrollment_date
    )
    VALUES (
        p_first_name,
        p_last_name,
        p_email,
        p_phone,
        p_department_id,
        p_enrollment_date
    );
END $$

DELIMITER ;

-- Call the procedure
-- Example:
-- CALL add_student('John', 'Doe', 'john.doe@email.com', '9876543210', 1, '2024-01-10');


-- STORED PROCEDURE: GET STUDENTS BY DEPARTMENT
-- Purpose: Retrieve all students from a specific department

DELIMITER $$

CREATE PROCEDURE get_students_by_department (
    IN p_department_id INT
)
BEGIN
    SELECT 
        student_id,
        CONCAT(first_name, ' ', last_name) AS student_name,
        email,
        enrollment_date
    FROM students
    WHERE department_id = p_department_id;
END $$

DELIMITER ;

-- Example:
-- CALL get_students_by_department(1);


-- FUNCTION: GET FULL NAME
-- Purpose: Return full name of a student using student_id

DELIMITER $$

CREATE FUNCTION get_full_name (p_student_id INT)
RETURNS VARCHAR(120)
DETERMINISTIC
BEGIN
    DECLARE full_name VARCHAR(120);

    SELECT CONCAT(first_name, ' ', last_name)
    INTO full_name
    FROM students
    WHERE student_id = p_student_id;

    RETURN full_name;
END $$

DELIMITER ;

-- Example:
-- SELECT get_full_name(1);


-- FUNCTION: COUNT STUDENTS IN DEPARTMENT
-- Purpose: Return total number of students in a department

DELIMITER $$

CREATE FUNCTION count_students_in_department (p_department_id INT)
RETURNS INT
DETERMINISTIC
BEGIN
    DECLARE total_students INT;

    SELECT COUNT(*)
    INTO total_students
    FROM students
    WHERE department_id = p_department_id;

    RETURN total_students;
END $$

DELIMITER ;

-- Example:
-- SELECT count_students_in_department(1);


-- NOTES:
-- 1. Use DELIMITER when creating procedures or functions.
-- 2. Procedures are called using CALL.
-- 3. Functions are used inside SELECT statements.
-- 4. Functions must return a single value.
-- 5. Use DETERMINISTIC when the function always returns the same result for same input.