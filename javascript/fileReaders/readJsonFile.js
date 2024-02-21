import fs from 'fs';

const readJsonFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('An error occurred while reading the JSON file:', err);
        reject(err);
        return;
      }

      try {
        const jsonData = JSON.parse(data);
        resolve(jsonData);
      } catch (parseErr) {
        console.error('An error occurred while parsing the JSON file:', parseErr);
        reject(parseErr);
      }
    });
  });
};

export { readJsonFile };
