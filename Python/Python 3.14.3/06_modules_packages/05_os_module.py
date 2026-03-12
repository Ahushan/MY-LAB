# Using os module

import os

# Current working directory
cwd = os.getcwd()
print("Current Directory:", cwd)

# List files and directories
print("Directory contents:", os.listdir(cwd))

# Create new directory
if not os.path.exists("test_dir"):
    os.mkdir("test_dir")
print("Directory created")

# Remove directory
if os.path.exists("test_dir"):
    os.rmdir("test_dir")
print("Directory removed")


# Path operations
print("Join path:", os.path.join(cwd, "sample.txt"))
print("Check if path exists:", os.path.exists("sample.txt"))
print("Is it file?", os.path.isfile("sample.txt"))
print("Is it directory?", os.path.isdir(cwd))


# Rename a file (if exists)
if os.path.exists("output.txt"):
    os.rename("output.txt", "output_renamed.txt")
    print("File renamed")


# Problem solving: count number of files in current directory
files = [f for f in os.listdir(cwd) if os.path.isfile(f)]
print("Number of files:", len(files))


# Practical example: create multiple directories
for i in range(3):
    dirname = f"folder_{i}"
    if not os.path.exists(dirname):
        os.mkdir(dirname)
print("Folders created:", [f"folder_{i}" for i in range(3)])


# Practical example: delete multiple directories
for i in range(3):
    dirname = f"folder_{i}"
    if os.path.exists(dirname):
        os.rmdir(dirname)
print("Folders deleted")