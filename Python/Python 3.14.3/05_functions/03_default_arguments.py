# Function with default argument

def greet(name="Guest"):
    print("Hello", name)

greet("Ahushan")
greet()


# Multiple default arguments

def student(name="Unknown", course="Python"):
    print(name, course)

student("Alice", "AI")
student("Bob")
student()


# Default argument with calculation

def power(base, exponent=2):
    print(base ** exponent)

power(5)
power(5, 3)


# Default arguments with strings

def welcome_message(user="User", platform="Python Learning"):
    print("Welcome", user, "to", platform)

welcome_message("Ahushan", "AI Engineering")
welcome_message("John")
welcome_message()


# Default arguments with boolean

def login(username, is_admin=False):
    print("User:", username)

    if is_admin:
        print("Admin Access")
    else:
        print("Normal User")

login("admin", True)
login("guest")


# Default argument with list

def add_item(cart=None):
    if cart is None:
        cart = []

    cart.append("item")
    print(cart)

add_item()
add_item(["laptop", "mouse"])


# Mixing default and positional arguments

def calculate_price(price, tax=0.18, discount=0):
    final_price = price + (price * tax) - discount
    print(final_price)

calculate_price(1000)
calculate_price(1000, 0.18, 100)
calculate_price(1000, discount=50)


# Problem solving: simple interest

def simple_interest(principal, rate=5, time=1):
    interest = (principal * rate * time) / 100
    print(interest)

simple_interest(10000)
simple_interest(10000, 7, 2)


# Problem solving: multiplication table

def multiplication_table(number, limit=10):
    for i in range(1, limit + 1):
        print(number, "x", i, "=", number * i)

multiplication_table(5)
multiplication_table(3, 5)


# Practical example: order system

def place_order(item, quantity=1, price=100):
    total = quantity * price
    print("Item:", item)
    print("Quantity:", quantity)
    print("Total:", total)

place_order("Laptop", 2, 70000)
place_order("Mouse")


# Practical example: notification system

def send_notification(user="User", message="Welcome to the platform"):
    print("To:", user)
    print("Message:", message)

send_notification("Ahushan", "Your course has started")
send_notification()