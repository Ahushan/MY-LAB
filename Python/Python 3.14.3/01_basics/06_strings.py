# Definition
# A string is a sequence of characters used to store text data.


# Basic String Creation

text1 = "Python"
text2 = 'Programming'

print(text1)
print(text2)


# Multi-line strings

message = """Python is powerful
and easy to learn"""

print(message)


# String Length

language = "Artificial Intelligence"
print(len(language))


# String Indexing

word = "Python"

print(word[0])
print(word[1])
print(word[-1])


# String Slicing

text = "Hello Python"

print(text[0:5])
print(text[6:])
print(text[:5])
print(text[-6:])


# Looping Through a String

for letter in "Python":
    print(letter)


# Check if substring exists

sentence = "Python is amazing"

print("Python" in sentence)
print("Java" in sentence)


# String Concatenation

first = "Hello"
second = "World"

result = first + " " + second
print(result)


# String Repetition

word = "AI "
print(word * 3)


# Escape Characters

text = "He said \"Python is great\""
print(text)

path = "C:\\Users\\Python"
print(path)


# String Formatting using f-string

name = "Ahushan"
age = 21

print(f"My name is {name} and I am {age} years old")


# Using format()

product = "Laptop"
price = 75000

print("Product: {} Price: {}".format(product, price))


# Common String Methods

text = "hello python"

print(text.upper())
print(text.lower())
print(text.capitalize())
print(text.title())


# Removing spaces

text = "   Python   "
print(text.strip())


# Replacing text

sentence = "I like Java"
print(sentence.replace("Java", "Python"))


# Splitting strings

data = "AI,ML,Deep Learning"
print(data.split(","))


# Joining strings

words = ["Python", "is", "fun"]
sentence = " ".join(words)

print(sentence)


# Advanced Concept

# Immutable nature of strings

text = "Python"

# Strings cannot be modified directly
# text[0] = "J"  # This would cause an error

new_text = "J" + text[1:]
print(new_text)


# Problem Solving Example

# Reverse a string

text = "Python"

reversed_text = text[::-1]

print("Reversed:", reversed_text)


# Another Problem

# Count vowels in a string

text = "Artificial Intelligence"

vowels = "aeiouAEIOU"
count = 0

for char in text:
    if char in vowels:
        count += 1

print("Vowel Count:", count)


# Practical Example

# Email validation check

email = "user@example.com"

if "@" in email and "." in email:
    print("Valid Email")
else:
    print("Invalid Email")