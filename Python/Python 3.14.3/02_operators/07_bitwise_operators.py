# Definition
# Bitwise operators perform operations on numbers at the binary level.


# Basic Bitwise Operators

a = 5
b = 3

print("AND:", a & b)
print("OR:", a | b)
print("XOR:", a ^ b)


# Bitwise NOT

x = 5
print("NOT:", ~x)


# Left Shift Operator

num = 5

print("Left Shift:", num << 1)
print("Left Shift:", num << 2)


# Right Shift Operator

num = 20

print("Right Shift:", num >> 1)
print("Right Shift:", num >> 2)


# Intermediate Usage

a = 6
b = 2

print("a & b =", a & b)
print("a | b =", a | b)


# Binary Representation

number = 10

print("Binary:", bin(number))


# Advanced Concept

# Checking if number is even using bitwise operator

number = 8

if number & 1 == 0:
    print("Even Number")
else:
    print("Odd Number")


# Problem Solving Example

# Swap two numbers using XOR

a = 5
b = 10

print("Before Swap:", a, b)

a = a ^ b
b = a ^ b
a = a ^ b

print("After Swap:", a, b)


# Another Problem

# Check if a number is power of 2

n = 8

if n & (n - 1) == 0:
    print("Power of 2")
else:
    print("Not power of 2")


# Practical Example

# Permission system using bitwise flags

READ = 1
WRITE = 2
EXECUTE = 4

user_permission = READ | WRITE

print("Has Read:", user_permission & READ)
print("Has Write:", user_permission & WRITE)
print("Has Execute:", user_permission & EXECUTE)