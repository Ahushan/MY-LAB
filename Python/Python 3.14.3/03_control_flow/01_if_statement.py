# Definition
# Operator precedence determines the order in which operations are evaluated in an expression.


# Basic Example

result = 10 + 5 * 2
print(result)


# Using Parentheses to Change Order

result = (10 + 5) * 2
print(result)


# Multiple Operators

value = 20 - 5 * 2 + 10
print(value)


# Division and Multiplication Priority

result = 20 / 5 * 2
print(result)


# Intermediate Usage

a = 10
b = 5
c = 2

result = a + b * c
print(result)

result = (a + b) * c
print(result)


# Logical and Comparison Precedence

x = 10
y = 20
z = 30

print(x < y and y < z)
print(x < y or y > z)


# Advanced Concept

# Combining arithmetic and comparison operators

value = 10 + 5 * 2

if value > 20:
    print("Greater than 20")
else:
    print("Less or equal to 20")


# Problem Solving Example

# Calculate final score

math = 80
science = 90
english = 85

average = (math + science + english) / 3

if average >= 90:
    grade = "A"
elif average >= 75:
    grade = "B"
else:
    grade = "C"

print("Average:", average)
print("Grade:", grade)


# Another Problem

# Determine if a number is within range

number = 25

if 10 < number < 50:
    print("Number is within range")
else:
    print("Number is outside range")


# Practical Example

# Billing system calculation

price = 500
tax = 0.18
discount = 50

total = price + (price * tax) - discount

print("Final Amount:", total)