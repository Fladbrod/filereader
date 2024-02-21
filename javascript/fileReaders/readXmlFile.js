import fs from 'fs';
import xml2js from 'xml2js';

const readXmlFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.error('An error occurred while reading the XML file:', err);
        reject(err);
        return;
      }

      xml2js.parseString(data, (err, result) => {
        if (err) {
          console.error('An error occurred while parsing the XML file:', err);
          reject(err);
        } else {
          console.log('XML file content', JSON.stringify(result, null, 2));
          resolve(result);
        }
      });
    });
  });
};

export { readXmlFile };
