# Function with parameters

def greet(name):
    print("Hello", name)

greet("Ahushan")
greet("John")


# Function with multiple parameters

def add(a, b):
    print(a + b)

add(5, 3)
add(10, 20)


# Positional arguments

def introduce(name, age):
    print("Name:", name)
    print("Age:", age)

introduce("Alice", 25)


# Keyword arguments

def student(name, course):
    print(name, course)

student(course="AI", name="Ahushan")


# Arbitrary arguments (*args)

def total_sum(*numbers):
    total = 0

    for num in numbers:
        total += num

    print(total)

total_sum(10, 20, 30)
total_sum(5, 15)


# Arbitrary keyword arguments (**kwargs)

def user_info(**data):
    for key in data:
        print(key, data[key])

user_info(name="Ahushan", age=21, role="developer")


# Mixing positional and keyword arguments

def order(item, quantity, price):
    print(item, quantity, price)

order("Laptop", quantity=2, price=70000)


# Function with list argument

def print_items(items):
    for item in items:
        print(item)

print_items(["apple", "banana", "mango"])


# Function returning result

def multiply(a, b):
    return a * b

result = multiply(4, 5)
print(result)


# Problem solving: average of numbers

def average(*numbers):
    total = 0

    for num in numbers:
        total += num

    print(total / len(numbers))

average(10, 20, 30, 40)


# Problem solving: find maximum value

def find_max(*numbers):
    maximum = numbers[0]

    for num in numbers:
        if num > maximum:
            maximum = num

    print(maximum)

find_max(5, 8, 2, 20, 7)


# Practical example: shopping cart

def add_to_cart(user, *items):
    print("User:", user)

    for item in items:
        print("Added:", item)

add_to_cart("Ahushan", "Laptop", "Mouse", "Keyboard")


# Practical example: user registration

def register_user(**details):
    print("User Details")

    for key in details:
        print(key, details[key])

register_user(name="John", email="john@mail.com", role="admin")