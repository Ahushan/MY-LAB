# Creating sets

fruits = {"apple", "banana", "mango"}
numbers = {1, 2, 3, 4, 5}

print(fruits)
print(numbers)


# Sets automatically remove duplicates

duplicate_numbers = {1, 2, 2, 3, 3, 4}
print(duplicate_numbers)


# Length of set

print(len(fruits))


# Accessing items using loop

for fruit in fruits:
    print(fruit)


# Check if item exists

if "apple" in fruits:
    print("Apple exists")


# Add item

fruits.add("orange")
print(fruits)


# Add multiple items using update

more_fruits = {"grape", "pineapple"}
fruits.update(more_fruits)
print(fruits)


# Update set with list

colors = {"red", "blue"}
colors.update(["green", "yellow"])
print(colors)


# Remove item

fruits.remove("banana")
print(fruits)


# Remove item using discard

fruits.discard("apple")
print(fruits)


# Pop random item

items = {"pen", "pencil", "eraser"}

removed = items.pop()
print("Removed:", removed)
print(items)


# Clear set

temp = {1, 2, 3}
temp.clear()
print(temp)


# Join sets using union

set1 = {1, 2, 3}
set2 = {3, 4, 5}

union_set = set1.union(set2)
print(union_set)


# Join sets using update

set1.update(set2)
print(set1)


# Intersection

a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

common = a.intersection(b)
print(common)


# Intersection update

a.intersection_update(b)
print(a)


# Difference

x = {1, 2, 3, 4}
y = {3, 4, 5}

diff = x.difference(y)
print(diff)


# Difference update

x = {1, 2, 3, 4}
y = {3, 4, 5}

x.difference_update(y)
print(x)


# Symmetric difference

a = {1, 2, 3}
b = {3, 4, 5}

sym = a.symmetric_difference(b)
print(sym)


# Check subset

a = {1, 2}
b = {1, 2, 3, 4}

print(a.issubset(b))


# Check superset

print(b.issuperset(a))


# Check disjoint

a = {1, 2}
b = {3, 4}

print(a.isdisjoint(b))


# Problem solving: remove duplicates from list

numbers = [1, 2, 2, 3, 3, 4, 5]

unique = set(numbers)
print(unique)


# Problem solving: common elements in two lists

list1 = [1, 2, 3, 4]
list2 = [3, 4, 5, 6]

common = set(list1).intersection(set(list2))
print(common)


# Practical example: unique visitors

visitors = ["user1", "user2", "user1", "user3"]

unique_visitors = set(visitors)

print("Unique visitors:", unique_visitors)


# Practical example: tags in blog system

tags = {"python", "ai", "machinelearning"}

tags.add("datascience")

for tag in tags:
    print(tag)