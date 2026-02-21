-- Use the database
USE student_management_db;

-- INDEXES AND PERFORMANCE
-- Indexes improve query performance by allowing faster data retrieval.
-- Types of indexes:
-- 1. PRIMARY KEY → Unique identifier for table rows, automatically indexed
-- 2. UNIQUE → Ensures unique values in a column, automatically indexed
-- 3. INDEX / KEY → Custom index for frequently searched columns
-- 4. COMPOSITE INDEX → Index on multiple columns for complex queries

-- PRIMARY KEY
-- Already exists in tables:
-- students(student_id), departments(department_id), courses(course_id)

-- UNIQUE INDEX
-- Already exists in tables:
-- students(email), students(phone_number), departments(department_name), courses(course_code)

-- CREATING A SIMPLE INDEX
-- Example: Add an index on students' last_name to speed up searches
CREATE INDEX idx_students_last_name
ON students(last_name);

-- COMPOSITE INDEX
-- Example: Index on department_id and enrollment_date to speed up multi-column filtering
CREATE INDEX idx_students_department_enroll
ON students(department_id, enrollment_date);

-- QUERY PERFORMANCE EXAMPLES
-- Query without index
SELECT *
FROM students
WHERE last_name = 'Smith';

-- Query using index (faster for large tables)
SELECT *
FROM students
WHERE last_name = 'Smith'
  AND department_id = 2;

-- DROPPING AN INDEX
-- Example: Remove an index if it's no longer needed
-- DROP INDEX idx_students_last_name ON students;

-- NOTES AND BEST PRACTICES:
-- 1. Primary keys and unique constraints automatically create indexes.
-- 2. Index columns that are frequently searched in WHERE, JOIN, ORDER BY clauses.
-- 3. Avoid indexing columns that are rarely used in queries; too many indexes can slow down INSERT/UPDATE.
-- 4. Composite indexes are effective when queries filter or sort by multiple columns.