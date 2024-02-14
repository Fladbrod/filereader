import xml.etree.ElementTree as ET

tree = ET.parse('sample.xml')
root = tree.getroot()

for column in root.findall('child'):
    print(column.text)
