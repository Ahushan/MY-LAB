# Definition
# Membership operators are used to check whether a value exists in a sequence.
# They return True or False.


# Basic Membership Operators

text = "Python Programming"

print("Python" in text)
print("Java" in text)


# Using not in

language = "Artificial Intelligence"

print("AI" not in language)
print("Artificial" not in language)


# Membership with Lists

numbers = [10, 20, 30, 40]

print(20 in numbers)
print(50 in numbers)


# Membership with Tuples

values = (5, 10, 15)

print(10 in values)
print(100 not in values)


# Membership with Sets

items = {"apple", "banana", "mango"}

print("apple" in items)
print("grape" in items)


# Membership with Dictionaries

student = {
    "name": "Ahushan",
    "age": 21,
    "course": "Computer Science"
}

print("name" in student)
print("marks" in student)


# Intermediate Usage

username_list = ["admin", "user1", "user2"]

username = "admin"

if username in username_list:
    print("User exists")
else:
    print("User not found")


# Advanced Concept

# Checking membership inside nested structures

data = {
    "skills": ["Python", "AI", "ML"]
}

print("Python" in data["skills"])


# Problem Solving Example

# Check if character exists in a word

word = "Artificial"

character = "t"

if character in word:
    print("Character found")
else:
    print("Character not found")


# Another Problem

# Validate allowed countries

allowed_countries = ["India", "USA", "Canada"]

user_country = "India"

if user_country in allowed_countries:
    print("Access allowed")
else:
    print("Access denied")


# Practical Example

# Email domain check

email = "user@gmail.com"

if "@gmail.com" in email:
    print("Valid Gmail address")
else:
    print("Other email provider")