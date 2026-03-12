# Definition
# Comments are used to explain code and make programs easier to understand.
# Python ignores comments when executing code.


# Basic Single-Line Comment

# This prints a message
print("Hello Python")


# Comment explaining variables

age = 21  # age of the user
name = "Ahushan"  # user name

print(name, age)


# Intermediate Usage

# Comments used to explain logic

number = 10

# Check if the number is even or odd
if number % 2 == 0:
    print("Even Number")
else:
    print("Odd Number")


# Multi-line comment style
# Python does not have a true multi-line comment syntax,
# but multiple single-line comments can be used together.

# This program calculates
# the sum of two numbers
a = 5
b = 10
print("Sum:", a + b)


# Using triple quotes as documentation string

def greet():
    """
    This function greets the user.
    Docstrings are used for documentation.
    """
    print("Welcome to Python")

greet()


# Advanced Concept

# Docstrings can be accessed using __doc__

def add_numbers(x, y):
    """
    This function returns the sum of two numbers.
    """
    return x + y

print(add_numbers(5, 7))
print(add_numbers.__doc__)


# Problem Solving Example

# Program to check voting eligibility

age = 18

# If age is 18 or above, the person can vote
if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")


# Practical Example

# Banking balance system

balance = 5000  # initial account balance
withdraw = 1200  # withdrawal amount

# Check if balance is sufficient
if withdraw <= balance:
    balance = balance - withdraw
    print("Withdrawal successful")
    print("Remaining Balance:", balance)
else:
    print("Insufficient balance")