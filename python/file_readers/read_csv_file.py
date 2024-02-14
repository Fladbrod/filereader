import csv

def read_csv_file(file_path: str):
    rows = []
    with open(file_path, 'r') as file:
        content = csv.reader(file)
        header = next(content)
        for row in content:
            rows.append(row)
    return {"header": header, "rows": rows}
