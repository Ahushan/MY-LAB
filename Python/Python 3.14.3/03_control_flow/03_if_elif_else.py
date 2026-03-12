# Definition
# The if-else statement allows a program to execute one block of code if a condition is true
# and another block if the condition is false.


# Basic If-Else Example

age = 16

if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")


# Simple numeric decision

number = 7

if number % 2 == 0:
    print("Even number")
else:
    print("Odd number")


# Intermediate Usage

temperature = 28

if temperature > 30:
    print("Hot weather")
else:
    print("Pleasant weather")


balance = 1000
withdraw = 1500

if withdraw <= balance:
    print("Withdrawal successful")
else:
    print("Insufficient balance")


# Advanced Concept

# Checking string condition

password = "admin123"

if password == "admin123":
    print("Access granted")
else:
    print("Access denied")


# Multiple logical checks

age = 20
citizen = True

if age >= 18 and citizen:
    print("Allowed to vote")
else:
    print("Not allowed to vote")


# Problem Solving Example

# Find the larger number

a = 15
b = 25

if a > b:
    print("Largest:", a)
else:
    print("Largest:", b)


# Another Problem

# Check if a number is positive or negative

num = -5

if num >= 0:
    print("Positive number")
else:
    print("Negative number")


# Practical Example

# Online order approval system

order_amount = 1200

if order_amount >= 1000:
    print("Order approved")
else:
    print("Order rejected")