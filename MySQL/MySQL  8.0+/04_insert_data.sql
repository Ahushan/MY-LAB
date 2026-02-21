-- INSERT DATA
USE student_management_db;

-- INSERT INTO departments
INSERT INTO departments (department_name) VALUES
('Computer Science'),
('Mechanical Engineering'),
('Business Administration'),
('Electrical Engineering');

-- INSERT INTO courses
INSERT INTO courses (course_name, course_code, credits, department_id) VALUES

-- Computer Science
('Database Systems', 'CS101', 4, 1),
('Data Structures', 'CS102', 4, 1),
('Operating Systems', 'CS201', 3, 1),
('Computer Networks', 'CS301', 3, 1),
('Machine Learning', 'CS302', 4, 1),

-- Mechanical Engineering
('Thermodynamics', 'ME101', 3, 2),
('Fluid Mechanics', 'ME201', 4, 2),
('Machine Design', 'ME301', 4, 2),
('Heat Transfer', 'ME302', 3, 2),

-- Business Administration
('Marketing Principles', 'BA101', 3, 3),
('Financial Accounting', 'BA201', 4, 3),
('Human Resource Management', 'BA301', 3, 3),
('Business Analytics', 'BA302', 4, 3),

-- Electrical Engineering
('Circuit Analysis', 'EE101', 4, 4),
('Digital Electronics', 'EE201', 3, 4),
('Power Systems', 'EE301', 4, 4),
('Microprocessors', 'EE302', 3, 4);


-- INSERT INTO students
INSERT INTO students
(first_name, last_name, date_of_birth, gender, email, phone_number, address, enrollment_date, department_id, status)
VALUES

-- Computer Science Students
('John', 'Doe', '2002-05-10', 'Male', 'john.doe@email.com', '9876543210', 'New York', '2023-08-01', 1, 'Active'),
('Emma', 'Smith', '2001-09-15', 'Female', 'emma.smith@email.com', '9123456780', 'California', '2023-08-01', 1, 'Active'),
('Liam', 'Brown', '2003-01-20', 'Male', 'liam.brown@email.com', NULL, 'Texas', '2023-08-01', 1, 'Active'),
('Ethan', 'Harris', '2002-08-12', 'Male', 'ethan.harris@email.com', '9112233445', 'Phoenix', '2022-08-01', 1, 'Active'),
('Charlotte', 'Martin', '2001-10-22', 'Female', 'charlotte.m@email.com', NULL, 'San Diego', '2022-08-01', 1, 'Inactive'),

-- Mechanical Engineering Students
('Olivia', 'Davis', '2002-03-18', 'Female', 'olivia.davis@email.com', '9988776655', 'Florida', '2023-08-01', 2, 'Active'),
('Noah', 'Wilson', '2001-12-25', 'Male', 'noah.wilson@email.com', '8899776655', 'Nevada', '2023-08-01', 2, 'Inactive'),
('Benjamin', 'Clark', '2003-03-14', 'Male', 'ben.clark@email.com', '9776655443', 'Dallas', '2023-08-01', 2, 'Active'),
('Amelia', 'Lewis', '2002-06-19', 'Female', 'amelia.lewis@email.com', '9556677889', 'Houston', '2022-08-01', 2, 'Active'),
('Scarlett', 'Scott', '2001-09-30', 'Female', 'scarlett.scott@email.com', '9119988776', 'Orlando', '2021-08-01', 2, 'Inactive'),

-- Business Administration Students
('Ava', 'Taylor', '2002-07-30', 'Female', 'ava.taylor@email.com', '9001122334', 'Chicago', '2023-08-01', 3, 'Active'),
('William', 'Anderson', '2003-02-11', 'Male', 'will.anderson@email.com', NULL, 'Boston', '2023-08-01', 3, 'Active'),
('Lucas', 'Walker', '2003-01-01', 'Male', 'lucas.walker@email.com', NULL, 'San Jose', '2023-08-01', 3, 'Active'),
('Harper', 'Hall', '2002-04-09', 'Female', 'harper.hall@email.com', '9445566778', 'Miami', '2022-08-01', 3, 'Inactive'),

-- Electrical Engineering Students
('Sophia', 'Thomas', '2002-11-05', 'Female', 'sophia.thomas@email.com', '9345612789', 'Seattle', '2023-08-01', 4, 'Active'),
('James', 'Jackson', '2001-04-14', 'Male', 'james.jackson@email.com', '9234567812', 'Denver', '2023-08-01', 4, 'Inactive'),
('Mia', 'White', '2003-06-09', 'Female', 'mia.white@email.com', NULL, 'Austin', '2023-08-01', 4, 'Active'),
('Henry', 'Allen', '2001-11-18', 'Male', 'henry.allen@email.com', '9334455667', 'Atlanta', '2021-08-01', 4, 'Active'),
('Ella', 'Young', '2003-05-27', 'Female', 'ella.young@email.com', NULL, 'Portland', '2023-08-01', 4, 'Active');