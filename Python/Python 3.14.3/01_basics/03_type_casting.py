# Definition
# Type casting means converting one data type into another data type.
# Python supports implicit (automatic) and explicit (manual) type conversion.


# Basic Examples

x = 5
y = 2.5

# implicit conversion
result = x + y
print(result)
print(type(result))


# Explicit Type Casting

a = "10"
b = int(a)

print(b)
print(type(b))


# Casting to Integer

x = int(3.7)
y = int("8")

print(x)
print(y)


# Casting to Float

a = float(5)
b = float("3.14")

print(a)
print(b)


# Casting to String

num = 100
text = str(num)

print(text)
print(type(text))


# Casting to Boolean

print(bool(1))
print(bool(0))
print(bool("Hello"))
print(bool(""))


# Intermediate Usage

# Converting user input (string) into integer

age = "21"
age_number = int(age)

print(age_number + 5)


# Converting numeric values to string for printing

price = 250
message = "Price is " + str(price)

print(message)


# Advanced Concepts

# Type conversion inside calculations

num1 = "20"
num2 = "30"

total = int(num1) + int(num2)

print("Total:", total)


# Converting list values

numbers = ["1", "2", "3", "4"]

int_numbers = [int(n) for n in numbers]

print(int_numbers)


# Problem Solving Example

# Convert temperature from string to float

temperature = "36.5"

temp_float = float(temperature)

if temp_float > 37:
    print("Fever")
else:
    print("Normal Temperature")


# Another Problem

# Calculate total price from string values

price1 = "100"
price2 = "250"

total_price = int(price1) + int(price2)

print("Total Price:", total_price)


# Practical Example

# Shopping cart system

product_name = "Headphones"
product_price = "1500"
quantity = "2"

total_cost = int(product_price) * int(quantity)

print("Product:", product_name)
print("Total Cost:", total_cost)