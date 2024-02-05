import json

with open('sample.json', 'r') as file:
    content = json.load(file)
    print(content)
