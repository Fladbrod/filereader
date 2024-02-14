from typing import Dict, Any, List
from fastapi import APIRouter
from file_readers import read_yaml_file, read_txt_file, read_xml_file, read_json_file, read_csv_file

router = APIRouter()

@router.get("/csvFile", response_model=Dict)
async def get_csv_file() -> Dict:
    csv_content = read_csv_file('../sample.csv')
    return csv_content

@router.get("/jsonFile", response_model=Any)
async def get_json_file() -> Any:
    json_content = read_json_file('../sample.json')
    return json_content

@router.get("/txtFile", response_model=str)
async def get_txt_file() -> str:
    txt_content = read_txt_file('../sample.txt')
    return txt_content

@router.get("/xmlFile", response_model=List)
async def get_xml_file() -> List[str]:
    xml_content = read_xml_file('../sample.xml', 'child')
    return xml_content

@router.get("/yamlFile", response_model=Any)
async def get_yaml_file() -> Any:
    yaml_content = read_yaml_file('../sample.yaml')
    return yaml_content