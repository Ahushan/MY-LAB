# Importing entire module

import math

print(math.sqrt(16))
print(math.pi)


# Importing specific function

from math import factorial, pow

print(factorial(5))
print(pow(2, 3))


# Importing module with alias

import math as m

print(m.sin(m.pi / 2))
print(m.log(100, 10))


# Import all functions (not recommended)

from math import *

print(sqrt(25))
print(cos(pi))


# Creating custom module example

# Save this as my_module.py
# def greet(name):
#     print("Hello", name)

# Importing custom module
# import my_module
# my_module.greet("Ahushan")


# Import custom function directly
# from my_module import greet
# greet("John")


# Problem solving: use math module to calculate hypotenuse

import math

a = 3
b = 4
c = math.hypot(a, b)
print(c)


# Practical example: circle area

radius = 5
area = math.pi * radius ** 2
print(area)