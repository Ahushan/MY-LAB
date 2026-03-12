# break example

for i in range(10):
    if i == 5:
        break
    print(i)


# break in while loop

count = 0

while True:
    print(count)
    count += 1
    if count == 5:
        break


# searching an element using break

numbers = [10, 20, 30, 40, 50]
target = 30

for num in numbers:
    if num == target:
        print("Found:", num)
        break


# continue example

for i in range(10):
    if i % 2 == 0:
        continue
    print(i)


# continue in while loop

i = 0

while i < 10:
    i += 1
    if i == 5:
        continue
    print(i)


# skipping negative numbers

numbers = [10, -5, 20, -2, 30]

for num in numbers:
    if num < 0:
        continue
    print(num)


# pass example

for i in range(5):
    if i == 3:
        pass
    print(i)


# pass in function

def future_feature():
    pass


# pass in class

class ExampleClass:
    pass


# problem solving: first even number

numbers = [1, 3, 5, 7, 8, 9]

for num in numbers:
    if num % 2 == 0:
        print("First even:", num)
        break


# problem solving: skip multiples of 3

for i in range(1, 21):
    if i % 3 == 0:
        continue
    print(i)


# practical example: process orders

orders = ["order1", "order2", "cancelled", "order3"]

for order in orders:
    if order == "cancelled":
        continue
    print("Processing:", order)


# practical example: stop system on error

events = ["start", "run", "run", "error", "run"]

for event in events:
    if event == "error":
        print("System stopped due to error")
        break
    print("Event:", event)