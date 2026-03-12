# Definition
# Input allows the user to provide data to a program.
# Output displays information from the program to the user.


# Basic Output using print()

print("Hello World")
print("Welcome to Python")


# Printing multiple values

name = "Ahushan"
age = 21

print("Name:", name)
print("Age:", age)


# Taking input from user

user_name = input("Enter your name: ")
print("Hello", user_name)


# Taking numeric input

number = input("Enter a number: ")
print("You entered:", number)


# Converting input to integer

num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))

sum_result = num1 + num2
print("Sum:", sum_result)


# Using float input

price = float(input("Enter product price: "))
quantity = int(input("Enter quantity: "))

total = price * quantity
print("Total:", total)


# Formatted Output using f-strings

name = "Ahushan"
score = 95

print(f"Student {name} scored {score} marks")


# Using format() method

product = "Laptop"
price = 75000

print("Product: {} Price: {}".format(product, price))


# Intermediate Usage

# Taking multiple inputs in one line

a, b = input("Enter two numbers: ").split()

a = int(a)
b = int(b)

print("Addition:", a + b)


# Advanced Concept

# Reading list of numbers from input

numbers = input("Enter numbers separated by space: ").split()

numbers = [int(num) for num in numbers]

print("Numbers:", numbers)
print("Sum:", sum(numbers))


# Problem Solving Example

# Simple calculator

num1 = float(input("Enter number 1: "))
num2 = float(input("Enter number 2: "))

print("Addition:", num1 + num2)
print("Subtraction:", num1 - num2)
print("Multiplication:", num1 * num2)
print("Division:", num1 / num2)


# Another Problem

# Check if number is even or odd

number = int(input("Enter a number: "))

if number % 2 == 0:
    print("Even Number")
else:
    print("Odd Number")


# Practical Example

# Student grading system

student_name = input("Enter student name: ")
marks = int(input("Enter marks: "))

if marks >= 90:
    grade = "A"
elif marks >= 75:
    grade = "B"
elif marks >= 50:
    grade = "C"
else:
    grade = "Fail"

print(f"{student_name} received grade {grade}")