import express from 'express';
import { readCsvFile } from '../fileReaders/readCsvFile.js';
import { readJsonFile } from '../fileReaders/readJsonFile.js';
import { readTextFile } from '../fileReaders/readTextFile.js';
import { readXmlFile } from '../fileReaders/readXmlFile.js';

const app = express();
const port = 3000;

app.get('/read-csv', async (req, res) => {
    try {
        const path = '../sample.csv';
        const csvData = await readCsvFile(path);
        res.json(csvData);
    } catch (err) {
        console.error('Failed to read CSV:', err);
        res.status(500).send('Failed to read CSV file.');
    }
});

app.get('/read-json', async (req, res) => {
    try {
        const path = '../sample.json';
        const jsonData = await readJsonFile(path);
        res.json(jsonData);
    } catch (err) {
        console.error('Failed to read JSON:', err);
        res.status(500).send('Failed to process JSON file.');
    }
});

app.get('/read-text', async (req, res) => {
    try {
        const path = '../sample.txt';
        const textData = await readTextFile(path);
        res.send(textData);
    } catch (err) {
        console.error('Failed to read text file:', err);
        res.status(500).send('Failed to process text file.');
    }
});

app.get('/read-xml', async (req, res) => {
    try {
      const path = '../sample.xml'; 
      const xmlData = await readXmlFile(path);
      res.json(xmlData);
    } catch (err) {
      console.error('Failed to read XML file:', err);
      res.status(500).send('Failed to process XML file.');
    }
  });

  app.get('/read-yaml', async (req, res) => {
    try {
      const path = '../sample.yaml';
      const yamlData = await readYamlFile(path);
      res.json(yamlData);
    } catch (err) {
      console.error('Failed to read YAML file:', err);
      res.status(500).send('Failed to process YAML file.');
    }
  });

  app.get('/requestFastAPI', async (req, res) => {
    const response = await fetch('http://127.0.0.1:8000/jsonFile', {
        method: 'GET',
    });
    const result = await response.json();
    res.send({ data: result });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
