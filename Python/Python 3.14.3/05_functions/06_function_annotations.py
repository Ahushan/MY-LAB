# Basic function annotations

def greet(name: str) -> str:
    return "Hello " + name

print(greet("Ahushan"))


# Function with multiple type annotations

def add(a: int, b: int) -> int:
    return a + b

print(add(10, 20))


# Function with float annotation

def area(radius: float) -> float:
    import math
    return math.pi * radius ** 2

print(area(5.0))


# Function with default value and annotation

def power(base: int, exponent: int = 2) -> int:
    return base ** exponent

print(power(5))
print(power(2, 3))


# Function with arbitrary arguments and annotation

def total_sum(*numbers: int) -> int:
    total = 0
    for num in numbers:
        total += num
    return total

print(total_sum(10, 20, 30))


# Function with arbitrary keyword arguments and annotation

def user_info(**data: str) -> None:
    for key in data:
        print(key, data[key])

user_info(name="Ahushan", course="AI", role="Developer")


# Function with mixed annotations

def calculate(a: int, b: int, c: float = 1.0) -> float:
    return (a + b) * c

print(calculate(5, 10))
print(calculate(5, 10, 2.5))


# Problem solving: annotate factorial function

def factorial(n: int) -> int:
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))


# Problem solving: annotate fibonacci function

def fibonacci(n: int) -> int:
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i), end=" ")
print()


# Practical example: annotate function for area of rectangle

def rectangle_area(length: float, width: float) -> float:
    return length * width

print(rectangle_area(10.5, 5.2))


# Practical example: annotate function for user login check

def login(username: str, password: str) -> bool:
    if username == "admin" and password == "1234":
        return True
    else:
        return False

print(login("admin", "1234"))
print(login("guest", "0000"))