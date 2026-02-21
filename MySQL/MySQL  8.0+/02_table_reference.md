# MySQL Table Creation Reference Guide

Project: student_management_db  
MySQL Version: 8.x  

------------------------------------------------------------
1️⃣ NUMERIC DATA TYPES
------------------------------------------------------------

INT
- Whole numbers
- Range: -2B to 2B (signed)
- Common for IDs

BIGINT
- Very large whole numbers

DECIMAL(p, s)
- Exact numeric values
- p = total digits
- s = digits after decimal
- Example: DECIMAL(10,2)

FLOAT / DOUBLE
- Approximate decimal values


------------------------------------------------------------
2️⃣ STRING DATA TYPES
------------------------------------------------------------

VARCHAR(n)
- Variable-length string
- Efficient storage
- Example: VARCHAR(100)

CHAR(n)
- Fixed-length string

TEXT
- Large text storage


------------------------------------------------------------
3️⃣ DATE & TIME DATA TYPES
------------------------------------------------------------

DATE
- Format: YYYY-MM-DD

DATETIME
- Date + Time

TIMESTAMP
- Stores date & time
- Often used for created_at
- Can auto-store CURRENT_TIMESTAMP


------------------------------------------------------------
4️⃣ ENUM TYPE
------------------------------------------------------------

ENUM('value1', 'value2')
- Restricts allowed values
- Example:
  gender ENUM('Male', 'Female')

Best Practice:
✔ Use ENUM only for small fixed sets


------------------------------------------------------------
5️⃣ CONSTRAINTS
------------------------------------------------------------

PRIMARY KEY
- Unique identifier for each row
- Cannot be NULL

AUTO_INCREMENT
- Automatically increases numeric value

NOT NULL
- Value is mandatory

UNIQUE
- Prevents duplicate values

DEFAULT
- Sets default value if none provided

CHECK (MySQL 8+)
- Enforces logical condition
- Example:
  credits INT CHECK (credits > 0)


------------------------------------------------------------
6️⃣ FOREIGN KEY
------------------------------------------------------------

Creates relationship between tables.

Example:

FOREIGN KEY (department_id)
REFERENCES departments(department_id)
ON DELETE SET NULL
ON UPDATE CASCADE

Common Actions:

ON DELETE CASCADE
- Deletes child rows automatically

ON DELETE SET NULL
- Sets foreign key column to NULL

ON UPDATE CASCADE
- Updates child keys automatically


------------------------------------------------------------
7️⃣ INDEXES
------------------------------------------------------------

INDEX
- Improves SELECT performance

Example:
CREATE INDEX idx_last_name ON students(last_name);

Composite Index:
CREATE INDEX idx_name_email ON students(first_name, email);

UNIQUE INDEX:
CREATE UNIQUE INDEX idx_course_code ON courses(course_code);

Best Practice:
✔ Add indexes on frequently searched columns
✔ Avoid too many indexes (slows inserts)


------------------------------------------------------------
8️⃣ NULL vs NOT NULL
------------------------------------------------------------

NULL
- Value is unknown or missing

NOT NULL
- Value must be provided

Best Practice:
✔ Use NOT NULL wherever possible
✔ Avoid unnecessary NULL columns


------------------------------------------------------------
9️⃣ COMPOSITE PRIMARY KEY
------------------------------------------------------------

Primary key made from multiple columns.

Example:
PRIMARY KEY (student_id, course_id)

Used in:
✔ Many-to-many relationship tables
✔ Junction tables (e.g., enrollments)


------------------------------------------------------------
🔟 STORAGE ENGINE & CHARACTER SET
------------------------------------------------------------

ENGINE=InnoDB
- Supports:
  ✔ Transactions
  ✔ Foreign Keys
  ✔ Row-level locking

DEFAULT CHARSET=utf8mb4
- Supports full Unicode
- Recommended for modern applications

Example:

CREATE TABLE students (
    ...
) ENGINE=InnoDB
DEFAULT CHARSET=utf8mb4;


------------------------------------------------------------
1️⃣1️⃣ TRANSACTIONS
------------------------------------------------------------

Used to maintain data consistency.

START TRANSACTION;

COMMIT;

ROLLBACK;

Used when:
✔ Performing multiple related operations
✔ Ensuring atomicity


------------------------------------------------------------
1️⃣2️⃣ TABLE DESIGN BEST PRACTICES
------------------------------------------------------------

✔ Use consistent naming (snake_case)
✔ Keep table names plural (students, courses)
✔ Always define PRIMARY KEY
✔ Add created_at TIMESTAMP
✔ Use FOREIGN KEY for relationships
✔ Avoid redundant columns
✔ Normalize data properly
✔ Insert parent data before child data
✔ Keep schema clean and readable

------------------------------------------------------------
End of Reference
------------------------------------------------------------