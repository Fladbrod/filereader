import xml.etree.ElementTree as ET
from typing import List

def read_xml_file(file_path: str, child_tag: str) -> List[str]:
    tree = ET.parse(file_path)
    root = tree.getroot()
    content = []

    for child in root.findall(child_tag):
        content.append(child.text)

    return content
