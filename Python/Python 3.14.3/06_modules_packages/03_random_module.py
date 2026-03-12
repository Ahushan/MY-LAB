# Using random module

import random

# Random integer between two numbers
print(random.randint(1, 10))

# Random float between 0 and 1
print(random.random())

# Random choice from a list
fruits = ["apple", "banana", "mango", "orange"]
print(random.choice(fruits))

# Random sample of 2 elements
print(random.sample(fruits, 2))

# Shuffle list
random.shuffle(fruits)
print(fruits)

# Uniform random float between two numbers
print(random.uniform(1.5, 5.5))

# Problem solving: random password generator

def generate_password(length=8):
    chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
    password = "".join(random.choice(chars) for _ in range(length))
    return password

print(generate_password())
print(generate_password(12))


# Practical example: simulate dice roll

def roll_dice():
    return random.randint(1, 6)

print(roll_dice())


# Practical example: pick a random winner

participants = ["Alice", "Bob", "John", "Ahushan"]
winner = random.choice(participants)
print("Winner:", winner)


# Practical example: random coordinates

def random_coordinates(x_range, y_range):
    x = random.randint(*x_range)
    y = random.randint(*y_range)
    return x, y

print(random_coordinates((0, 100), (0, 50)))