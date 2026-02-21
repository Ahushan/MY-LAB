-- TRIGGERS

-- A trigger automatically executes before or after
-- INSERT, UPDATE, or DELETE on a table.

-- BEFORE INSERT TRIGGER
-- Purpose: Automatically set status to 'Active' if not provided

DELIMITER $$

CREATE TRIGGER before_student_insert
BEFORE INSERT ON students
FOR EACH ROW
BEGIN
    IF NEW.status IS NULL THEN
        SET NEW.status = 'Active';
    END IF;
END $$

DELIMITER ;

-- BEFORE UPDATE TRIGGER
-- Purpose: Prevent changing email once created

DELIMITER $$

CREATE TRIGGER before_student_update_email
BEFORE UPDATE ON students
FOR EACH ROW
BEGIN
    IF OLD.email <> NEW.email THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Email cannot be changed once set';
    END IF;
END $$

DELIMITER ;

-- AFTER DELETE TRIGGER
-- Purpose: Log deleted students into audit table

-- First create audit table
CREATE TABLE IF NOT EXISTS students_audit (
    audit_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DELIMITER $$

CREATE TRIGGER after_student_delete
AFTER DELETE ON students
FOR EACH ROW
BEGIN
    INSERT INTO students_audit (
        student_id,
        first_name,
        last_name
    )
    VALUES (
        OLD.student_id,
        OLD.first_name,
        OLD.last_name
    );
END $$

DELIMITER ;

-- DROP TRIGGER (if needed)

-- DROP TRIGGER before_student_insert;
-- DROP TRIGGER before_student_update_email;
-- DROP TRIGGER after_student_delete;