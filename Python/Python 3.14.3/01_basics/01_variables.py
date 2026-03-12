# Definition
# Variables are containers used to store data values.
# Python variables do not need explicit declaration and the type is decided automatically.


# Basic Examples

x = 5
y = "Python"
z = 3.14

print(x)
print(y)
print(z)


# Intermediate Usage

# Multiple variables in one line
a, b, c = 10, 20, 30
print(a, b, c)

# Assign same value to multiple variables
m = n = p = 100
print(m, n, p)


# Variable naming rules

myVariable = "Camel Case"
my_variable = "Snake Case"
MyVariable = "Pascal Case"

print(myVariable)
print(my_variable)
print(MyVariable)


# Dynamic Typing (Python decides type automatically)

value = 10
print(value, type(value))

value = "Hello"
print(value, type(value))

value = 3.5
print(value, type(value))


# Casting variables

x = int(3)
y = float(3)
z = str(3)

print(x)
print(y)
print(z)


# Getting the type of variable

age = 25
name = "Ahushan"

print(type(age))
print(type(name))


# Global Variables

global_var = "I am global"

def show_global():
    print(global_var)

show_global()


# Local Variables

def show_local():
    local_var = "I am local"
    print(local_var)

show_local()


# Using global keyword

counter = 0

def update_counter():
    global counter
    counter += 1

update_counter()
print(counter)


# Problem Solving Example

# Swap two variables

a = 5
b = 10

print("Before Swap:", a, b)

a, b = b, a

print("After Swap:", a, b)


# Another Problem

# Calculate total and average

math = 80
science = 90
english = 85

total = math + science + english
average = total / 3

print("Total:", total)
print("Average:", average)


# Practical Example

# Student information system

student_name = "John"
student_age = 21
student_marks = 88

print("Student Name:", student_name)
print("Student Age:", student_age)
print("Student Marks:", student_marks)

if student_marks >= 50:
    print("Result: Pass")
else:
    print("Result: Fail")