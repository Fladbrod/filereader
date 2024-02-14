import json

def read_json_file(file_path: str):
    with open(file_path, 'r') as file:
        content = json.load(file)
    return content
