# Basic docstring example

def greet(name):
    """
    Function to greet a person.
    Parameters:
    name (str): Name of the person
    Returns:
    str: Greeting message
    """
    return "Hello " + name

print(greet("Ahushan"))


# Docstring with multiple lines

def add(a, b):
    """
    Function to add two numbers.
    
    Parameters:
    a (int): First number
    b (int): Second number
    
    Returns:
    int: Sum of a and b
    """
    return a + b

print(add(10, 20))


# Docstring with default parameters

def power(base, exponent=2):
    """
    Function to calculate power of a number.
    
    Parameters:
    base (int or float): Base number
    exponent (int or float, optional): Exponent value (default is 2)
    
    Returns:
    int or float: Result of base ** exponent
    """
    return base ** exponent

print(power(5))
print(power(2, 3))


# Docstring with arbitrary arguments

def total_sum(*numbers):
    """
    Function to calculate sum of arbitrary numbers.
    
    Parameters:
    *numbers: Variable length argument list of numbers
    
    Returns:
    int: Sum of all numbers
    """
    total = 0
    for num in numbers:
        total += num
    return total

print(total_sum(10, 20, 30))


# Docstring with arbitrary keyword arguments

def user_info(**data):
    """
    Function to display user information.
    
    Parameters:
    **data: Arbitrary keyword arguments for user details
    
    Returns:
    None
    """
    for key in data:
        print(key, data[key])

user_info(name="Ahushan", age=21, role="developer")


# Problem solving: factorial with docstring

def factorial(n):
    """
    Function to calculate factorial of a number using recursion.
    
    Parameters:
    n (int): Non-negative integer
    
    Returns:
    int: Factorial of n
    """
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))


# Problem solving: fibonacci with docstring

def fibonacci(n):
    """
    Function to calculate nth Fibonacci number using recursion.
    
    Parameters:
    n (int): Position in Fibonacci sequence
    
    Returns:
    int: Fibonacci number at position n
    """
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i), end=" ")
print()


# Practical example: area of rectangle with docstring

def rectangle_area(length, width):
    """
    Function to calculate area of a rectangle.
    
    Parameters:
    length (float): Length of rectangle
    width (float): Width of rectangle
    
    Returns:
    float: Area of rectangle
    """
    return length * width

print(rectangle_area(10.5, 5.2))


# Practical example: login check with docstring

def login(username, password):
    """
    Function to verify user login credentials.
    
    Parameters:
    username (str): Username input
    password (str): Password input
    
    Returns:
    bool: True if login successful, False otherwise
    """
    if username == "admin" and password == "1234":
        return True
    else:
        return False

print(login("admin", "1234"))
print(login("guest", "0000"))