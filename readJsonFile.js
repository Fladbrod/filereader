const fs = require('fs');
const path = './sample.json'; 

fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the JSON file:', err);
        return;
    }

    const jsonObj = JSON.parse(data);
    console.log('JSON file content:', jsonObj);
});
