const fs = require('fs');
const xml2js = require('xml2js');
const path = './sample.xml';

fs.readFile(path, (err, data) => {
    if (err) {
        console.error('An error occurred while reading the XML file:', err);
        return;
    }

    xml2js.parseString(data, (err, result) => {
        if (err) {
            console.error('An error occurred while parsing the XML file:', err);
            return;
        }

        console.log('XML file content', result);
    });
});
