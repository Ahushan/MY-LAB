# Basic file reading

# Create a sample file 'sample.txt' with some text before running

file = open("sample.txt", "r")
content = file.read()
print(content)
file.close()


# Read line by line

file = open("sample.txt", "r")
line = file.readline()
while line:
    print(line.strip())
    line = file.readline()
file.close()


# Read all lines into a list

file = open("sample.txt", "r")
lines = file.readlines()
print(lines)
file.close()


# Using 'with' statement for file handling

with open("sample.txt", "r") as file:
    content = file.read()
    print(content)


# Problem solving: count number of lines in file

def count_lines(filename):
    with open(filename, "r") as f:
        return len(f.readlines())

print(count_lines("sample.txt"))


# Practical example: display file in uppercase

with open("sample.txt", "r") as f:
    for line in f:
        print(line.strip().upper())