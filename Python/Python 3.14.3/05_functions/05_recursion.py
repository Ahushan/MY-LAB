# Basic recursion: factorial

def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n - 1)

print(factorial(5))


# Recursion: sum of numbers

def sum_numbers(n):
    if n == 0:
        return 0
    else:
        return n + sum_numbers(n - 1)

print(sum_numbers(10))


# Recursion: fibonacci series

def fibonacci(n):
    if n <= 1:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)

for i in range(10):
    print(fibonacci(i), end=" ")
print()


# Recursion: reverse string

def reverse_string(s):
    if len(s) == 0:
        return s
    else:
        return reverse_string(s[1:]) + s[0]

print(reverse_string("python"))


# Recursion: sum of list elements

def sum_list(lst):
    if not lst:
        return 0
    else:
        return lst[0] + sum_list(lst[1:])

print(sum_list([1, 2, 3, 4, 5]))


# Recursion: find maximum in list

def find_max(lst):
    if len(lst) == 1:
        return lst[0]
    else:
        max_rest = find_max(lst[1:])
        return lst[0] if lst[0] > max_rest else max_rest

print(find_max([10, 5, 8, 20, 3]))


# Recursion: count digits in number

def count_digits(n):
    if n == 0:
        return 0
    else:
        return 1 + count_digits(n // 10)

print(count_digits(12345))


# Recursion: sum of digits

def sum_digits(n):
    if n == 0:
        return 0
    else:
        return n % 10 + sum_digits(n // 10)

print(sum_digits(12345))


# Problem solving: power of number

def power(base, exp):
    if exp == 0:
        return 1
    else:
        return base * power(base, exp - 1)

print(power(2, 5))


# Problem solving: gcd using recursion

def gcd(a, b):
    if b == 0:
        return a
    else:
        return gcd(b, a % b)

print(gcd(48, 18))


# Practical example: binary search (recursive)

def binary_search(arr, target, low, high):
    if low > high:
        return -1

    mid = (low + high) // 2

    if arr[mid] == target:
        return mid
    elif arr[mid] > target:
        return binary_search(arr, target, low, mid - 1)
    else:
        return binary_search(arr, target, mid + 1, high)

numbers = [1, 3, 5, 7, 9, 11]
print(binary_search(numbers, 7, 0, len(numbers) - 1))