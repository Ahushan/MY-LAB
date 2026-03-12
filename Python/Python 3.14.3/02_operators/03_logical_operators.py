# Definition
# Logical operators are used to combine conditional statements.
# They return True or False based on the logical relationship.


# Basic Logical Operators

a = True
b = False

print(a and b)
print(a or b)
print(not a)


# Using logical operators with numbers

x = 10
y = 20

print(x > 5 and y > 15)
print(x > 15 or y > 15)
print(not (x > 5))


# Intermediate Usage

age = 25
has_license = True

if age >= 18 and has_license:
    print("Eligible to drive")
else:
    print("Not eligible to drive")


# Using OR operator

day = "Saturday"

if day == "Saturday" or day == "Sunday":
    print("Weekend")
else:
    print("Weekday")


# Advanced Concept

# Combining multiple conditions

marks = 85
attendance = 90

if marks >= 80 and attendance >= 75:
    print("Excellent student")
else:
    print("Needs improvement")


# Nested logical conditions

temperature = 30
is_raining = False

if temperature > 25 and not is_raining:
    print("Good weather for outing")


# Problem Solving Example

# Check if number is between 10 and 50

number = 35

if number >= 10 and number <= 50:
    print("Number is in range")
else:
    print("Number is out of range")


# Another Problem

# Determine discount eligibility

price = 5000
is_member = True

if price > 3000 and is_member:
    print("Eligible for discount")
else:
    print("No discount")


# Practical Example

# Login access system

username = "admin"
password = "1234"
is_active = True

if username == "admin" and password == "1234" and is_active:
    print("Access granted")
else:
    print("Access denied")