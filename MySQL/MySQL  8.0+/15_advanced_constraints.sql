-- ADVANCED CONSTRAINTS

-- Example table with advanced constraints
CREATE TABLE IF NOT EXISTS student_profiles (
    profile_id INT AUTO_INCREMENT,
    student_id INT NOT NULL,
    gender ENUM('Male', 'Female', 'Other') NOT NULL,
    date_of_birth DATE NOT NULL,
    gpa DECIMAL(3,2) DEFAULT 0.00,
    
    -- PRIMARY KEY
    CONSTRAINT pk_student_profiles PRIMARY KEY (profile_id),

    -- UNIQUE (one profile per student)
    CONSTRAINT uq_student_profile UNIQUE (student_id),

    -- CHECK constraint (GPA range)
    CONSTRAINT chk_gpa CHECK (gpa BETWEEN 0.00 AND 10.00),

    -- FOREIGN KEY with actions
    CONSTRAINT fk_profile_student
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

-- Composite UNIQUE example
CREATE TABLE IF NOT EXISTS course_enrollments (
    enrollment_id INT AUTO_INCREMENT,
    student_id INT NOT NULL,
    course_id INT NOT NULL,
    enrollment_date DATE NOT NULL,

    CONSTRAINT pk_course_enrollment PRIMARY KEY (enrollment_id),

    -- Prevent duplicate enrollment
    CONSTRAINT uq_student_course UNIQUE (student_id, course_id),

    CONSTRAINT fk_enroll_student
        FOREIGN KEY (student_id)
        REFERENCES students(student_id)
        ON DELETE CASCADE,

    CONSTRAINT fk_enroll_course
        FOREIGN KEY (course_id)
        REFERENCES courses(course_id)
        ON DELETE CASCADE
);