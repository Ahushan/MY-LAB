# Creating dictionaries

student = {
    "name": "Ahushan",
    "age": 21,
    "course": "Computer Science"
}

print(student)


# Dictionary length

print(len(student))


# Accessing dictionary values

print(student["name"])
print(student.get("age"))


# Getting keys and values

print(student.keys())
print(student.values())
print(student.items())


# Check if key exists

if "name" in student:
    print("Name exists")


# Changing dictionary value

student["age"] = 22
print(student)


# Update dictionary

student.update({"course": "AI Engineering"})
print(student)


# Adding new item

student["city"] = "Chennai"
print(student)


# Remove item using pop

student.pop("city")
print(student)


# Remove last inserted item

student.popitem()
print(student)


# Delete item using del

student["country"] = "India"
del student["country"]
print(student)


# Clear dictionary

temp = {"a": 1, "b": 2}
temp.clear()
print(temp)


# Loop through dictionary keys

for key in student:
    print(key)


# Loop through dictionary values

for value in student.values():
    print(value)


# Loop through dictionary items

for key, value in student.items():
    print(key, value)


# Copy dictionary

student_copy = student.copy()
print(student_copy)


# Nested dictionaries

students = {
    "student1": {
        "name": "John",
        "age": 20
    },
    "student2": {
        "name": "Alice",
        "age": 21
    }
}

print(students)


# Access nested dictionary

print(students["student1"]["name"])


# Loop through nested dictionary

for student_id, info in students.items():
    print(student_id)
    for key in info:
        print(key, info[key])


# Problem solving: count word frequency

text = "python ai python data ai python"

words = text.split()

frequency = {}

for word in words:
    if word in frequency:
        frequency[word] += 1
    else:
        frequency[word] = 1

print(frequency)


# Problem solving: find student with highest mark

marks = {
    "John": 85,
    "Alice": 92,
    "Bob": 78
}

top_student = ""
highest = 0

for student in marks:
    if marks[student] > highest:
        highest = marks[student]
        top_student = student

print(top_student, highest)


# Practical example: simple user database

users = {
    "user1": {"name": "John", "role": "admin"},
    "user2": {"name": "Alice", "role": "editor"}
}

for user_id in users:
    print(users[user_id]["name"], users[user_id]["role"])


# Practical example: shopping cart

cart = {
    "laptop": 1,
    "mouse": 2,
    "keyboard": 1
}

total_items = 0

for item in cart:
    total_items += cart[item]

print("Total items:", total_items)