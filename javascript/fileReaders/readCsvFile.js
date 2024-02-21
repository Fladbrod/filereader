import fs from 'fs';
import csv from 'csv-parser';

const readCsvFile = (filePath) => {
  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        results.push(row);
      })
      .on('end', () => {
        console.log('CSV file successfully processed');
        resolve(results);
      })
      .on('error', (err) => {
        console.error('An error occurred:', err);
        reject(err);
      });
  });
};

export { readCsvFile };
