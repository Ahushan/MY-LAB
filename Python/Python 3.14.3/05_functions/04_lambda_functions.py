# Basic lambda function

square = lambda x: x * x
print(square(5))


# Lambda with multiple arguments

add = lambda a, b: a + b
print(add(10, 20))


# Lambda inside list

numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x * x, numbers))
print(squares)


# Lambda with filter

even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers)


# Lambda with reduce

from functools import reduce

product = reduce(lambda x, y: x * y, numbers)
print(product)


# Lambda with conditional

check = lambda x: "Even" if x % 2 == 0 else "Odd"
print(check(7))
print(check(4))


# Using lambda as argument to function

def operate(func, value):
    return func(value)

result = operate(lambda x: x + 10, 5)
print(result)


# Lambda returning multiple operations as tuple

calculate = lambda a, b: (a + b, a - b, a * b)
print(calculate(10, 5))


# Problem solving: double list values

numbers = [2, 4, 6, 8]
doubled = list(map(lambda x: x * 2, numbers))
print(doubled)


# Problem solving: filter words with length > 3

words = ["hi", "python", "ai", "developer"]
filtered = list(filter(lambda w: len(w) > 3, words))
print(filtered)


# Practical example: sort list of tuples by second element

students = [("John", 90), ("Alice", 85), ("Bob", 95)]
students_sorted = sorted(students, key=lambda x: x[1])
print(students_sorted)


# Practical example: compute tax for prices

prices = [100, 200, 300]
taxed_prices = list(map(lambda p: p * 1.18, prices))
print(taxed_prices)