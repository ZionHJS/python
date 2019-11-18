monthConversions = {
    "Jan":"January",
"Feb":"February",
"Mar":"March",
"Apr":"April",
"May":"May",
"Jun":"June",
"Jul":"July",
"Aug":"August",
"Sep":"September",
"Oct":"October",
"Nov":"November",
"Dec":"December",
}

print(monthConversions["Nov"])
print(monthConversions.get("Nov"))
print(monthConversions.get('lk'))
print(monthConversions.get("luk", "Not a Valid-Key"))