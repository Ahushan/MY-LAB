# Create a custom module and use it

# Save this part as my_module.py
# def greet_user(name):
#     return "Hello " + name
#
# def add_numbers(a, b):
#     return a + b
#
# def multiply_numbers(a, b):
#     return a * b

# Using the custom module

import my_module

print(my_module.greet_user("Ahushan"))
print(my_module.add_numbers(10, 20))
print(my_module.multiply_numbers(5, 4))


# Import specific functions

from my_module import greet_user, multiply_numbers

print(greet_user("John"))
print(multiply_numbers(7, 8))


# Import with alias

import my_module as mm

print(mm.add_numbers(100, 200))


# Problem solving: calculate total price

# my_module.py
# def total_price(*prices):
#     total = 0
#     for price in prices:
#         total += price
#     return total

import my_module
print(my_module.total_price(100, 200, 300))


# Practical example: greeting multiple users

users = ["Alice", "Bob", "Charlie"]
for user in users:
    print(my_module.greet_user(user))