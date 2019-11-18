is_male = True
is_tall = True

if is_male or is_tall:
   print("You are a male")
   print("You are tall")
elif is_male and not(is_tall):
   print("You are a short male")
elif not(is_male) and is_tall:
   print("You are not a male but are tall")
else:
   print("You are not a male")
   print("You are not tall")

def max_num(num1, num2, num3):
   if num1 >= num2 and num1 >= num3:
      return num1
   elif num2 >= num1 and num2 >= num3:
      return num2
   else:
      return num3

print(max_num(3,4,5))

num1 = float(input("Enter first number:"))
op = input("Enter operator")
num2 = float(input("Enter second number:"))

if op == "+":
   print(num1 + num2)
elif op == "-":
   print(num1 - num2)
elif op == "/":
   print(num1 / num2)
elif op == "*":
   print(num1 * num2)
else:
   print("Invalid Operator")