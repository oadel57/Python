letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
symbols = ['!', '#', '$', '%', '&', '(', ')', '*', '+']

print("Welcome to the PyPassword Generator!")
nr_letters = int(input("How many letters would you like in your password?\n"))
nr_symbols = int(input(f"How many symbols would you like?\n"))
nr_numbers = int(input(f"How many numbers would you like?\n"))

# Easy Level
# import random
#
# l=''
# for n in range(0,nr_letters):
#     l = l + random.choice(letters)
#
# sym=''
# for n in range(0,nr_symbols):
#     sym = sym + random.choice(symbols)
#
# numb=''
# for n in range(0,nr_numbers):
#     numb = numb + random.choice(numbers)
#
# print(f'{l}{sym}{numb}')

# Hard Level
import random

password=[]
for n in range(0,nr_letters):
    password.append(random.choice(letters))

for n in range(0,nr_symbols):
    password.append(random.choice(symbols))

for n in range(0,nr_numbers):
    password.append(random.choice(numbers))

complex_password=''
for n in range(0,len(password)):
    complex_password+=random.choice(password)

print(f'Your password is: {complex_password}')
