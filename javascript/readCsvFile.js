const fs = require('fs');
const csv = require('csv-parser');
const path = './sample.csv';

fs.createReadStream(path)
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  })
  .on('error', (err) => {
    console.error('An error occurred:', err);
  });
