# Basic file append

# Append text to a file
with open("output.txt", "a") as file:
    file.write("Appending this line\n")
    file.write("Another line appended\n")


# Append user input to file
user_inputs = ["Ahushan", "Alice", "Bob"]
with open("users.txt", "a") as file:
    for user in user_inputs:
        file.write(user + "\n")


# Problem solving: append squares of numbers to file

with open("squares.txt", "a") as file:
    for i in range(6, 11):
        file.write(f"{i} squared is {i**2}\n")


# Practical example: log messages to file

logs = ["Server started", "User logged in", "Error occurred"]
with open("logs.txt", "a") as file:
    for log in logs:
        file.write(log + "\n")


# Practical example: append CSV-like data to file

data = [["John", 25], ["Alice", 30], ["Bob", 22]]
with open("data.txt", "a") as file:
    for item in data:
        file.write(",".join(map(str, item)) + "\n")