const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const pathToJSON = path.resolve(__dirname, 'index.json');

// Body parser
app.use(bodyParser.json());

// Path logger
app.use((request, response, next) => {
    console.log('Path: ' + request.path);
    response.setHeader('Content-Type', 'application/json');
    next();
});

//GET request
app.get('/items', (req, res) => {
    fs.readFile(pathToJSON, 'utf8', (error, contents) => {
        res.send(contents);
    });
});

//POST request
app.post('/items', (req, res) => {
    fs.readFile(pathToJSON, 'utf8', (error, contents) => {
        const data = JSON.parse(contents);
        data.push(req.body);
        fs.writeFile(pathToJSON, JSON.stringify(data, '', 2), 'utf8', (error, contents) => {
            res.send(req.body);
        });
    });
});

//PUT request
app.put('/items/:id', (req, res) => {
    fs.readFile(pathToJSON, 'utf8', (error, contents) => {
        let data = JSON.parse(contents);
        data = data.map(el => el.id === req.params.id ? req.body : el);
        fs.writeFile(pathToJSON, JSON.stringify(data, '', 2), 'utf8', (error, contents) => {
            res.send(JSON.stringify({ result: 'OK' }));
        });
    });
});

//DELETE request
app.delete('/items/:id', (req, res) => {
    fs.readFile(pathToJSON, 'utf8', (error, contents) => {
        const data = JSON.parse(contents);
        const updatedData = data.filter(el => el.id !== req.params.id);
        fs.writeFile(pathToJSON, JSON.stringify(updatedData, '', 2), 'utf8', (error, contents) => {
            res.send(JSON.stringify({ result: 'OK' }));
        });
    });
});

//Description where API should work
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});