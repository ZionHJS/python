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

