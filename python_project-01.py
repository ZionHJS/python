from math import *

character_name: str = "Tom"
character_age = "50"
isMale = True

phrase = "Giraffe Academy"

print("Giraffe\"Academy")
print(phrase.upper().isupper())
print(len(phrase))
print(phrase[0])
print(phrase.index('Academy'))
print(phrase.replace("Giraffe", "Elephant"))

print("There once was a man named " + character_name + ",")
print("He was " + character_age + "years old" + ".")

character_name = "Mike"

print("He really liked the name " + character_name + ",")
print("But didn't like being " + character_age + ".")

my_num = -5
print(my_num/5 + 10)
print(abs(my_num))
print(pow(4, 6))
print(max(4, 6))
print(min(4, 6))
print(round(3.2))
print(round(3.8))
print(floor(3.7))
print(ceil(3.6))
print(sqrt(36))