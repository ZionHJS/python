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

employee_file = open("employees.txt", "r")
for employee in employee_file.readlines():
    print(employee)
print(employee_file.readlines()[1])
employee_file.close()

employee_file = open("employees.txt", "a")
employee_file.write("Toby - Human Resources")
for employee in employee_file.readlines():
    print(employee)
print(employee_file.readlines()[1])
employee_file.close()

# writing and appending information into files