# Definition
# A for loop is used to iterate over a sequence such as a list, tuple, string, or range.


# Basic For Loop

for i in range(5):
    print(i)


# Looping through a list

numbers = [10, 20, 30, 40]

for num in numbers:
    print(num)


# Looping through a string

text = "Python"

for letter in text:
    print(letter)


# Looping with range()

for i in range(1, 6):
    print(i)


# Using range with step

for i in range(0, 10, 2):
    print(i)


# Intermediate Usage

# Loop through a dictionary

student = {
    "name": "Ahushan",
    "age": 21,
    "course": "Computer Science"
}

for key in student:
    print(key, student[key])


# Using enumerate()

fruits = ["apple", "banana", "mango"]

for index, fruit in enumerate(fruits):
    print(index, fruit)


# Nested For Loop

for i in range(3):
    for j in range(2):
        print(i, j)


# Advanced Concept

# Iterating over multiple lists using zip()

names = ["John", "Alice", "Bob"]
scores = [90, 85, 88]

for name, score in zip(names, scores):
    print(name, score)


# Problem Solving Example

# Sum of numbers in a list

numbers = [10, 20, 30, 40]

total = 0

for num in numbers:
    total += num

print("Total:", total)


# Another Problem

# Count even numbers in a list

numbers = [1, 2, 3, 4, 5, 6]

count = 0

for num in numbers:
    if num % 2 == 0:
        count += 1

print("Even Numbers:", count)


# Practical Example

# Student marks processing

marks = [78, 85, 90, 66, 92]

total = 0

for mark in marks:
    total += mark

average = total / len(marks)

print("Average Marks:", average)