# Definition
# Nested if means an if statement inside another if statement.
# It is used when a condition depends on another condition.


# Basic Nested If Example

age = 20

if age >= 18:
    print("Adult")

    if age >= 21:
        print("Eligible for driving license in some countries")


# Checking number conditions

number = 10

if number > 0:
    print("Positive Number")

    if number % 2 == 0:
        print("Even Number")


# Intermediate Usage

marks = 85
attendance = 90

if marks >= 50:
    if attendance >= 75:
        print("Student passed the course")
    else:
        print("Low attendance")
else:
    print("Failed due to low marks")


# Advanced Concept

# Checking multiple levels of access

user_logged_in = True
is_admin = True

if user_logged_in:
    if is_admin:
        print("Admin dashboard access granted")
    else:
        print("User dashboard access granted")
else:
    print("Please login first")


# Problem Solving Example

# Check if number is positive and divisible by 3

num = 9

if num > 0:
    if num % 3 == 0:
        print("Positive and divisible by 3")
    else:
        print("Positive but not divisible by 3")
else:
    print("Negative number")


# Another Problem

# ATM withdrawal system

balance = 5000
withdraw_amount = 2000

if withdraw_amount <= balance:
    if withdraw_amount > 0:
        balance = balance - withdraw_amount
        print("Withdrawal successful")
        print("Remaining Balance:", balance)
    else:
        print("Invalid amount")
else:
    print("Insufficient balance")


# Practical Example

# Login and permission check

username = "admin"
password = "1234"
is_verified = True

if username == "admin":
    if password == "1234":
        if is_verified:
            print("Login successful and account verified")
        else:
            print("Account not verified")
    else:
        print("Incorrect password")
else:
    print("User not found")