# Basic function definition

def greet():
    print("Hello, welcome to Python")

greet()


# Function with multiple calls

def show_message():
    print("Learning Python Functions")

show_message()
show_message()


# Function returning value

def add_numbers():
    a = 5
    b = 10
    return a + b

result = add_numbers()
print(result)


# Function with local variables

def calculate_area():
    length = 10
    width = 5
    area = length * width
    print("Area:", area)

calculate_area()


# Function calling another function

def say_hello():
    print("Hello")

def start_program():
    say_hello()
    print("Program Started")

start_program()


# Function returning multiple values

def math_operations():
    a = 8
    b = 4
    return a + b, a - b, a * b

sum_value, diff_value, product_value = math_operations()

print(sum_value)
print(diff_value)
print(product_value)


# Function with loop inside

def print_numbers():
    for i in range(1, 6):
        print(i)

print_numbers()


# Function with conditional logic

def check_even_odd():
    number = 7

    if number % 2 == 0:
        print("Even")
    else:
        print("Odd")

check_even_odd()


# Function returning boolean

def is_adult():
    age = 20

    if age >= 18:
        return True
    else:
        return False

print(is_adult())


# Problem solving: sum of numbers

def calculate_sum():
    numbers = [10, 20, 30, 40]
    total = 0

    for num in numbers:
        total += num

    return total

print(calculate_sum())


# Problem solving: find maximum number

def find_max():
    numbers = [5, 12, 8, 21, 3]

    maximum = numbers[0]

    for num in numbers:
        if num > maximum:
            maximum = num

    return maximum

print(find_max())


# Practical example: login check

def login():
    username = "admin"
    password = "1234"

    if username == "admin" and password == "1234":
        print("Login successful")
    else:
        print("Invalid credentials")

login()


# Practical example: order processing

def process_order():
    orders = ["laptop", "mouse", "keyboard"]

    for order in orders:
        print("Processing:", order)

process_order()