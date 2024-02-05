import csv

rows = []
with open('sample.csv', 'r') as file:
    content = csv.reader(file)
    header = next(content)
    for row in content:
        rows.append(row)

print(header)
print(rows)