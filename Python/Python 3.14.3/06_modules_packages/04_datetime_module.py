# Using datetime module

import datetime

# Current date and time
now = datetime.datetime.now()
print(now)

# Current date
today = datetime.date.today()
print(today)

# Current time
current_time = datetime.datetime.now().time()
print(current_time)


# Creating specific date
d = datetime.date(2026, 3, 13)
print(d)

# Creating specific time
t = datetime.time(14, 30, 15)
print(t)


# Formatting date and time
formatted = now.strftime("%Y-%m-%d %H:%M:%S")
print(formatted)

formatted_date = today.strftime("%d/%m/%Y")
print(formatted_date)

formatted_time = current_time.strftime("%H:%M:%S")
print(formatted_time)


# Parsing string to datetime
dt_str = "2026-03-13 12:45:30"
dt_obj = datetime.datetime.strptime(dt_str, "%Y-%m-%d %H:%M:%S")
print(dt_obj)


# Problem solving: calculate difference between two dates
date1 = datetime.date(2026, 3, 1)
date2 = datetime.date(2026, 3, 13)
diff = date2 - date1
print("Difference in days:", diff.days)


# Problem solving: add days to current date
future_date = today + datetime.timedelta(days=10)
print("Future date:", future_date)


# Practical example: countdown timer
def countdown(seconds):
    for i in range(seconds, 0, -1):
        print(i)
    print("Time's up!")

countdown(5)


# Practical example: check if today is weekend
def is_weekend(day):
    return day.weekday() >= 5  # 5: Saturday, 6: Sunday

print("Is today weekend?", is_weekend(today))