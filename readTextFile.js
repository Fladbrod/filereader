const fs = require('fs');
const path = './sample.txt';

fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err);
        return;
    }
    console.log('Text file content:', data);
});
