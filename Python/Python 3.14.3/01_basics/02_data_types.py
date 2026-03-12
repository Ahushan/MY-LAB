# Definition
# Data types define the type of value a variable can store.
# Python automatically determines the data type.


# Basic Built-in Data Types

# Numeric types
integer_num = 10
float_num = 3.14
complex_num = 2 + 3j

print(integer_num)
print(float_num)
print(complex_num)


# Sequence types

string_value = "Python"
list_value = [1, 2, 3, 4]
tuple_value = (10, 20, 30)

print(string_value)
print(list_value)
print(tuple_value)


# Set type

set_value = {1, 2, 3, 4}
print(set_value)


# Mapping type

dict_value = {
    "name": "Ahushan",
    "age": 21,
    "course": "Computer Science"
}

print(dict_value)


# Boolean type

is_python_fun = True
is_sky_green = False

print(is_python_fun)
print(is_sky_green)


# None type

data = None
print(data)


# Checking Data Types

a = 100
b = "Hello"

print(type(a))
print(type(b))


# Using isinstance()

num = 10

print(isinstance(num, int))
print(isinstance(num, str))


# Type Conversion between data types

x = 5
y = float(x)
z = str(x)

print(x)
print(y)
print(z)


# Intermediate Usage

numbers = [10, 20, 30, 40]

print(type(numbers))
print(len(numbers))

text = "Artificial Intelligence"
print(len(text))


# Advanced Concept

# Python allows mixed data types inside structures

mixed_list = [1, "Python", 3.14, True]

print(mixed_list)


# Nested data structures

student = {
    "name": "Ahushan",
    "marks": [80, 85, 90],
    "details": {
        "age": 21,
        "city": "Chennai"
    }
}

print(student)


# Problem Solving Example

# Check if a number is integer or float

number = 10.5

if isinstance(number, int):
    print("Integer")
elif isinstance(number, float):
    print("Float")
else:
    print("Other Type")


# Another Problem

# Count different types inside a list

items = [10, "Python", 3.5, True, 20]

int_count = 0
str_count = 0

for item in items:
    if isinstance(item, int):
        int_count += 1
    if isinstance(item, str):
        str_count += 1

print("Integers:", int_count)
print("Strings:", str_count)


# Practical Example

# Product data system

product = {
    "name": "Laptop",
    "price": 75000,
    "in_stock": True
}

print("Product Name:", product["name"])
print("Product Price:", product["price"])
print("Available:", product["in_stock"])