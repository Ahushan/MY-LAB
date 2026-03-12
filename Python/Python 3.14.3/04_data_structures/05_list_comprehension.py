# Basic list comprehension

numbers = [x for x in range(10)]
print(numbers)


# Squares using list comprehension

squares = [x * x for x in range(10)]
print(squares)


# List comprehension with condition

even_numbers = [x for x in range(20) if x % 2 == 0]
print(even_numbers)


# Odd numbers

odd_numbers = [x for x in range(20) if x % 2 != 0]
print(odd_numbers)


# Filtering items from list

numbers = [5, 12, 7, 18, 3, 21]

greater_than_ten = [x for x in numbers if x > 10]
print(greater_than_ten)


# Transform list values

numbers = [1, 2, 3, 4]

doubled = [x * 2 for x in numbers]
print(doubled)


# Convert strings to uppercase

words = ["python", "ai", "developer"]

upper_words = [word.upper() for word in words]
print(upper_words)


# Using condition with else

numbers = [1, 2, 3, 4, 5]

result = ["even" if x % 2 == 0 else "odd" for x in numbers]
print(result)


# Nested list comprehension

matrix = [[1, 2, 3], [4, 5, 6]]

flatten = [num for row in matrix for num in row]
print(flatten)


# Creating matrix using comprehension

matrix = [[i * j for j in range(3)] for i in range(3)]
print(matrix)


# Using comprehension with string

text = "python"

letters = [char for char in text]
print(letters)


# Problem solving: remove duplicates

numbers = [1, 2, 2, 3, 4, 4, 5]

unique = list({x for x in numbers})
print(unique)


# Problem solving: find squares of even numbers

numbers = [1, 2, 3, 4, 5, 6]

result = [x * x for x in numbers if x % 2 == 0]
print(result)


# Practical example: extract usernames

emails = [
    "user1@gmail.com",
    "user2@yahoo.com",
    "user3@company.com"
]

usernames = [email.split("@")[0] for email in emails]
print(usernames)


# Practical example: price with tax

prices = [100, 200, 300]

prices_with_tax = [price * 1.18 for price in prices]
print(prices_with_tax)