const fs = require('fs');
const yaml = require('js-yaml');
const path = './sample.yaml'; 

fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the YAML file:', err);
        return;
    }

    try {
        const doc = yaml.load(data);
        console.log('YAML file content:', doc);
    } catch (e) {
        console.error('An error occurred while parsing the YAML file:', e);
    }
});
