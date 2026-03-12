# Basic range usage

print(range(5))

for i in range(5):
    print(i)


# Range with start and stop

for i in range(1, 6):
    print(i)


# Range with step

for i in range(0, 10, 2):
    print(i)


# Reverse range using negative step

for i in range(10, 0, -1):
    print(i)


# Converting range to list

numbers = list(range(5))
print(numbers)


numbers = list(range(1, 11))
print(numbers)


# Generating even numbers

even_numbers = list(range(0, 21, 2))
print(even_numbers)


# Generating odd numbers

odd_numbers = list(range(1, 20, 2))
print(odd_numbers)


# Using range with string length

for i in range(len("python")):
    print(i)


# Accessing string characters using range

text = "python"

for i in range(len(text)):
    print(text[i])


# Using range with list indexing

numbers = [10, 20, 30, 40]

for i in range(len(numbers)):
    print(numbers[i])


# Nested loop with range

matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for i in range(len(matrix)):
    for j in range(len(matrix[i])):
        print(matrix[i][j])


# Problem solving example: sum of list

numbers = [5, 10, 15, 20]

total = 0

for i in range(len(numbers)):
    total += numbers[i]

print(total)


# Problem solving example: find largest number

numbers = [3, 7, 2, 9, 4]

largest = numbers[0]

for i in range(1, len(numbers)):
    if numbers[i] > largest:
        largest = numbers[i]

print(largest)


# Practical example: multiplication table

for i in range(1, 11):
    print("5 x", i, "=", 5 * i)


# Pattern printing using range

size = 5

for i in range(size):
    for j in range(i + 1):
        print("*", end="")
    print()


# Reverse pattern

for i in range(size):
    for j in range(size - i):
        print("*", end="")
    print()