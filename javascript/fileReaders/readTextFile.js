import fs from 'fs';

const readTextFile = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error('An error occurred while reading the text file:', err);
        reject(err);
      } else {
        console.log('Text file content:', data);
        resolve(data);
      }
    });
  });
};

export { readTextFile };
