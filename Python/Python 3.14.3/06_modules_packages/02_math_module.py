# Using math module basic functions

import math

# Constants
print(math.pi)
print(math.e)


# Square root and power

print(math.sqrt(16))
print(math.pow(2, 5))


# Absolute value

print(math.fabs(-10))
print(abs(-10))


# Rounding functions

print(math.ceil(4.2))
print(math.floor(4.8))
print(round(4.6))


# Trigonometric functions

print(math.sin(math.pi / 2))
print(math.cos(0))
print(math.tan(math.pi / 4))


# Inverse trigonometric functions

print(math.asin(1))
print(math.acos(0))
print(math.atan(1))


# Logarithmic functions

print(math.log(10))          # Natural log
print(math.log10(100))       # Base 10 log
print(math.log2(8))          # Base 2 log


# Factorial and combinatorial

print(math.factorial(5))
print(math.comb(5, 2))
print(math.perm(5, 2))


# Problem solving: calculate circle area

def circle_area(radius):
    return math.pi * math.pow(radius, 2)

print(circle_area(5))


# Problem solving: calculate hypotenuse

def hypotenuse(a, b):
    return math.hypot(a, b)

print(hypotenuse(3, 4))


# Practical example: calculate compound interest

def compound_interest(principal, rate, time):
    amount = principal * math.pow(1 + rate / 100, time)
    return amount

print(compound_interest(10000, 5, 2))


# Practical example: radians to degrees and vice versa

angle_rad = math.pi / 2
angle_deg = math.degrees(angle_rad)
print(angle_deg)

angle_deg = 180
angle_rad = math.radians(angle_deg)
print(angle_rad)