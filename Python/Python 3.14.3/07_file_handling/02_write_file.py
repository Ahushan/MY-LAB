# Basic file writing

# Write text to a file (overwrites if exists)
file = open("output.txt", "w")
file.write("Hello Python\n")
file.write("Learning file handling\n")
file.close()


# Using 'with' statement
with open("output.txt", "w") as file:
    file.write("This will overwrite previous content\n")


# Writing multiple lines
lines = ["Line 1\n", "Line 2\n", "Line 3\n"]
with open("output.txt", "w") as file:
    file.writelines(lines)


# Problem solving: write squares of numbers to file

with open("squares.txt", "w") as file:
    for i in range(1, 6):
        file.write(f"{i} squared is {i**2}\n")


# Practical example: write user input to file

user_input = ["Ahushan", "Alice", "Bob"]
with open("users.txt", "w") as file:
    for user in user_input:
        file.write(user + "\n")