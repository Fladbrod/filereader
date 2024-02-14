import yaml
from typing import Any

def read_yaml_file(file_path: str) -> Any:
    with open(file_path, 'r') as file:
        data = yaml.safe_load(file)
    return data
