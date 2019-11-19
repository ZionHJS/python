'''
sadasdasd
asdaasda
asdsada
asdasd
asdas
asda
asd
as
a
'''
#This program is cool

print("Comments are fun")

try:
    value = 10 / 0
    number = int(input("Enter a number:"))
    print(number)
except ZeroDivisionError as err:
    print(err)
except ValueError:
    print("invalid input")