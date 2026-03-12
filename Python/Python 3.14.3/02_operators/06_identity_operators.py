# Definition
# Identity operators are used to compare the memory location of two objects.
# They check whether two variables refer to the same object.


# Basic Identity Operators

a = 10
b = 10

print(a is b)
print(a is not b)


# Identity with Lists

list1 = [1, 2, 3]
list2 = [1, 2, 3]

print(list1 is list2)
print(list1 == list2)


# Identity with Same Reference

list3 = list1

print(list1 is list3)
print(list1 == list3)


# Intermediate Usage

x = "Python"
y = "Python"

print(x is y)


# Checking if variable is None

data = None

if data is None:
    print("Data is empty")


# Advanced Concept

# Memory identity using id()

a = [10, 20]
b = a

print(id(a))
print(id(b))

print(a is b)


# Problem Solving Example

# Detect if two variables reference the same object

obj1 = [1, 2, 3]
obj2 = obj1

if obj1 is obj2:
    print("Both refer to the same object")
else:
    print("Different objects")


# Another Problem

# Check if a variable is not None

value = "Hello"

if value is not None:
    print("Value exists")


# Practical Example

# Cache system simulation

cached_data = {"user": "admin"}
request_data = cached_data

if request_data is cached_data:
    print("Using cached data")
else:
    print("Fetching new data")