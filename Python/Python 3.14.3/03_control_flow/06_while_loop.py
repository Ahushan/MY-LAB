# Definition
# A while loop repeatedly executes a block of code as long as a condition is true.


# Basic While Loop

i = 0

while i < 5:
    print(i)
    i += 1


# Counting numbers

count = 1

while count <= 5:
    print(count)
    count += 1


# Intermediate Usage

# Sum of numbers using while loop

numbers = [10, 20, 30, 40]

index = 0
total = 0

while index < len(numbers):
    total += numbers[index]
    index += 1

print("Total:", total)


# Reading characters in a string

text = "Python"

i = 0

while i < len(text):
    print(text[i])
    i += 1


# Advanced Concept

# Infinite loop example (controlled with condition)

running = True

while running:
    print("Program running")
    running = False


# While loop with logical condition

balance = 5000
withdraw = 1000

while withdraw <= balance and withdraw > 0:
    balance -= withdraw
    print("Withdrawn:", withdraw)
    print("Remaining balance:", balance)
    break


# Problem Solving Example

# Reverse a number

number = 1234
reverse = 0

while number > 0:
    digit = number % 10
    reverse = reverse * 10 + digit
    number //= 10

print("Reversed number:", reverse)


# Another Problem

# Find factorial using while loop

n = 5
factorial = 1
i = 1

while i <= n:
    factorial *= i
    i += 1

print("Factorial:", factorial)


# Practical Example

# Password retry system

correct_password = "admin123"
attempt = 0

while attempt < 3:
    password = "admin123"

    if password == correct_password:
        print("Login successful")
        break
    else:
        print("Incorrect password")

    attempt += 1

if attempt == 3:
    print("Account locked")