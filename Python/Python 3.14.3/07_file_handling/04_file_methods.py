# Using common file methods

# Create sample file
with open("sample_methods.txt", "w") as f:
    f.write("Hello Python\nThis is file methods example.\n")


# Read and tell file pointer position
with open("sample_methods.txt", "r") as f:
    print(f.read(5))  # read first 5 characters
    print(f.tell())   # current pointer position
    f.seek(0)         # move pointer to beginning
    print(f.read())    # read entire file


# readline() and readlines()
with open("sample_methods.txt", "r") as f:
    print(f.readline().strip())
    print(f.readlines())


# Truncate file content
with open("sample_methods.txt", "a") as f:
    f.write("Additional line\n")
with open("sample_methods.txt", "r+") as f:
    f.truncate(20)
with open("sample_methods.txt", "r") as f:
    print(f.read())


# Problem solving: copy file content
with open("sample_methods.txt", "r") as source, open("copy.txt", "w") as dest:
    dest.write(source.read())


# Practical example: check if file is empty
def is_file_empty(filename):
    return os.stat(filename).st_size == 0

import os
print("Is sample_methods.txt empty?", is_file_empty("sample_methods.txt"))
print("Is copy.txt empty?", is_file_empty("copy.txt"))


# Practical example: append and then read last n characters
with open("sample_methods.txt", "a") as f:
    f.write("Appending more content\n")
with open("sample_methods.txt", "r") as f:
    f.seek(-10, os.SEEK_END)
    print(f.read())