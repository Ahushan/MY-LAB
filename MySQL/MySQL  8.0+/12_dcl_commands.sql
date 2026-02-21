-- DCL COMMANDS
-- Create a new user
CREATE USER 'student_user'@'localhost' IDENTIFIED BY 'password123';

-- Grant select permission on database
GRANT SELECT ON student_management_db.* TO 'student_user'@'localhost';

-- Grant insert permission on students table
GRANT INSERT ON student_management_db.students TO 'student_user'@'localhost';

-- Revoke insert permission
REVOKE INSERT ON student_management_db.students FROM 'student_user'@'localhost';

-- Show grants
SHOW GRANTS FOR 'student_user'@'localhost';