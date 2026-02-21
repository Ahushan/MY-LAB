-- TCL - TRANSACTIONS

-- Start transaction
START TRANSACTION;

-- Insert a new student
INSERT INTO students (
    first_name,
    last_name,
    email,
    phone_number,
    department_id,
    enrollment_date
)
VALUES (
    'Test',
    'Student',
    'test@student.com',
    '9999999999',
    1,
    '2024-02-01'
);

-- If everything is correct
COMMIT;

-- If something goes wrong
-- ROLLBACK;


-- Example with SAVEPOINT
START TRANSACTION;

INSERT INTO students (first_name, last_name, email, phone_number, department_id, enrollment_date)
VALUES ('Temp', 'User', 'temp@email.com', '8888888888', 2, '2024-02-10');

SAVEPOINT before_update;

UPDATE students
SET phone_number = '7777777777'
WHERE email = 'temp@email.com';

-- If update is wrong
-- ROLLBACK TO before_update;

COMMIT;