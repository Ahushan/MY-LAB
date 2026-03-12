# Definition
# Arithmetic operators are used to perform mathematical operations.


# Basic Arithmetic Operators

a = 10
b = 5

print("Addition:", a + b)
print("Subtraction:", a - b)
print("Multiplication:", a * b)
print("Division:", a / b)


# Modulus Operator

x = 10
y = 3

print("Remainder:", x % y)


# Exponent Operator

base = 2
power = 3

print("Exponent:", base ** power)


# Floor Division

num1 = 10
num2 = 3

print("Floor Division:", num1 // num2)


# Intermediate Usage

length = 20
width = 10

area = length * width
perimeter = 2 * (length + width)

print("Area:", area)
print("Perimeter:", perimeter)


# Average calculation

a = 10
b = 20
c = 30

average = (a + b + c) / 3

print("Average:", average)


# Advanced Concept

# Order of arithmetic operations

result = 10 + 5 * 2
print("Result:", result)

result2 = (10 + 5) * 2
print("Result with parentheses:", result2)


# Problem Solving Example

# Calculate total bill with tax

price = 1000
tax_rate = 0.18

tax_amount = price * tax_rate
total_bill = price + tax_amount

print("Tax:", tax_amount)
print("Total Bill:", total_bill)


# Another Problem

# Check if a number is divisible by another

number = 20
divisor = 4

if number % divisor == 0:
    print("Divisible")
else:
    print("Not Divisible")


# Practical Example

# Simple interest calculation

principal = 10000
rate = 5
time = 2

interest = (principal * rate * time) / 100

print("Simple Interest:", interest)