# Creating tuples

fruits = ("apple", "banana", "mango")
numbers = (1, 2, 3, 4)
mixed = ("python", 10, True, 3.5)

print(fruits)
print(numbers)
print(mixed)


# Tuple length

print(len(fruits))


# Accessing tuple items

print(fruits[0])
print(fruits[1])
print(fruits[-1])


# Tuple slicing

print(fruits[0:2])
print(fruits[1:])
print(fruits[:2])


# Check if item exists

if "apple" in fruits:
    print("Apple exists")


# One item tuple

single = ("apple",)
print(single)


# Tuple packing

person = ("John", 25, "Engineer")
print(person)


# Tuple unpacking

name, age, job = person
print(name)
print(age)
print(job)


# Using * for unpacking

numbers = (1, 2, 3, 4, 5)

a, b, *rest = numbers
print(a)
print(b)
print(rest)


# Loop through tuple

for fruit in fruits:
    print(fruit)


# Loop using index

for i in range(len(fruits)):
    print(fruits[i])


# While loop with tuple

i = 0

while i < len(fruits):
    print(fruits[i])
    i += 1


# Join tuples

tuple1 = (1, 2, 3)
tuple2 = (4, 5, 6)

joined = tuple1 + tuple2
print(joined)


# Multiply tuple

repeated = tuple1 * 3
print(repeated)


# Tuple methods

numbers = (1, 2, 3, 2, 4, 2)

print(numbers.count(2))
print(numbers.index(3))


# Nested tuples

matrix = (
    (1, 2, 3),
    (4, 5, 6),
    (7, 8, 9)
)

print(matrix[0])
print(matrix[1][2])


# Iterating nested tuple

for row in matrix:
    for value in row:
        print(value)


# Problem solving: sum of tuple values

numbers = (5, 10, 15, 20)

total = 0

for num in numbers:
    total += num

print("Sum:", total)


# Problem solving: find max number

numbers = (10, 25, 5, 40, 15)

maximum = numbers[0]

for num in numbers:
    if num > maximum:
        maximum = num

print("Max:", maximum)


# Practical example: coordinates

location = (12.97, 77.59)

lat, lon = location

print("Latitude:", lat)
print("Longitude:", lon)


# Practical example: returning multiple values

def calculate(a, b):
    sum_value = a + b
    product = a * b
    return (sum_value, product)

result = calculate(5, 3)

print(result)
print(result[0])
print(result[1])