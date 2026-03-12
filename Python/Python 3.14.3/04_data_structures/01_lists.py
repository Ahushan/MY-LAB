# Creating lists

fruits = ["apple", "banana", "mango"]
numbers = [1, 2, 3, 4, 5]
mixed = ["python", 10, True, 3.5]

print(fruits)
print(numbers)
print(mixed)


# List length

print(len(fruits))


# Accessing list items

print(fruits[0])
print(fruits[1])
print(fruits[-1])


# List slicing

print(fruits[0:2])
print(fruits[1:])
print(fruits[:2])


# Check if item exists

if "apple" in fruits:
    print("Apple exists")


# Change list item

fruits[1] = "orange"
print(fruits)


# Change multiple items

fruits[0:2] = ["grape", "pineapple"]
print(fruits)


# Insert item

fruits.insert(1, "apple")
print(fruits)


# Append item

fruits.append("watermelon")
print(fruits)


# Extend list

more_fruits = ["kiwi", "papaya"]
fruits.extend(more_fruits)
print(fruits)


# Remove item

fruits.remove("apple")
print(fruits)


# Remove using pop

fruits.pop()
print(fruits)

fruits.pop(1)
print(fruits)


# Delete using del

del fruits[0]
print(fruits)


# Clear list

temp_list = [1, 2, 3]
temp_list.clear()
print(temp_list)


# Loop through list

colors = ["red", "green", "blue"]

for color in colors:
    print(color)


# Loop using index

for i in range(len(colors)):
    print(colors[i])


# While loop with list

i = 0

while i < len(colors):
    print(colors[i])
    i += 1


# List comprehension

squares = [x * x for x in range(10)]
print(squares)


# List comprehension with condition

even_numbers = [x for x in range(20) if x % 2 == 0]
print(even_numbers)


# Sort list

numbers = [5, 3, 8, 1, 2]
numbers.sort()
print(numbers)


# Sort descending

numbers.sort(reverse=True)
print(numbers)


# Reverse list

numbers.reverse()
print(numbers)


# Copy list

list1 = [1, 2, 3]
list2 = list1.copy()

print(list1)
print(list2)


# Join lists

list_a = [1, 2, 3]
list_b = [4, 5, 6]

joined = list_a + list_b
print(joined)


# Nested lists

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

print(matrix[0])
print(matrix[1][2])


# Iterating nested list

for row in matrix:
    for value in row:
        print(value)


# Problem solving: find max number

numbers = [10, 25, 5, 40, 15]

maximum = numbers[0]

for num in numbers:
    if num > maximum:
        maximum = num

print("Max:", maximum)


# Problem solving: sum of list

numbers = [5, 10, 15, 20]

total = 0

for num in numbers:
    total += num

print("Sum:", total)


# Problem solving: remove duplicates

numbers = [1, 2, 2, 3, 4, 4, 5]

unique = []

for num in numbers:
    if num not in unique:
        unique.append(num)

print(unique)


# Practical example: student marks

marks = [78, 85, 90, 66, 92]

total = 0

for mark in marks:
    total += mark

average = total / len(marks)

print("Average:", average)


# Practical example: shopping cart

cart = ["laptop", "mouse", "keyboard"]

cart.append("monitor")

for item in cart:
    print("Item:", item)