# Definition
# Comparison operators are used to compare two values.
# They return True or False.


# Basic Comparison Operators

a = 10
b = 5

print(a == b)
print(a != b)
print(a > b)
print(a < b)
print(a >= b)
print(a <= b)


# Intermediate Usage

x = 20
y = 20

print("Equal:", x == y)
print("Not Equal:", x != y)


# Comparing strings

name1 = "Python"
name2 = "Python"

print(name1 == name2)


# Advanced Concept

# Comparison in expressions

num = 15

print(num > 10)
print(num < 20)
print(num >= 15)


# Chained comparison

value = 25

print(10 < value < 30)


# Problem Solving Example

# Check if a person can vote

age = 18

if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")


# Another Problem

# Find the largest of two numbers

num1 = 40
num2 = 25

if num1 > num2:
    print("Largest:", num1)
else:
    print("Largest:", num2)


# Practical Example

# Login system

stored_username = "admin"
stored_password = "1234"

input_username = "admin"
input_password = "1234"

if input_username == stored_username and input_password == stored_password:
    print("Login Successful")
else:
    print("Login Failed")