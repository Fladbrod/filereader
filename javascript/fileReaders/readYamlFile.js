import fs from 'fs';
import yaml from 'js-yaml';

const readYamlFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('An error occurred while reading the YAML file:', err);
        reject(err);
      } else {
        try {
          const doc = yaml.load(data);
          console.log('YAML file content:', JSON.stringify(doc, null, 2));
          resolve(doc); // Resolve with the parsed YAML document
        } catch (e) {
          console.error('An error occurred while parsing the YAML file:', e);
          reject(e);
        }
      }
    });
  });
};

export { readYamlFile };
