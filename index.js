const express = require('express');
const app = express();
const fs = require('fs');

app.get('/classList', (req, res) => {
    fs.readFile('./classList.json', (err, data) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'application/json');
        res.send(data);
    });
});


app.get('/chapterList', (req, res) => {
    fs.readFile('./chapterListWrtCLass.json', (err, data) => {
        if (err) throw err;
        const className="class_8";
        res.setHeader('Content-Type', 'application/json');
        const jsonData = JSON.parse(data);
        const specificArray = jsonData[className].subjects;
        res.send(JSON.stringify(specificArray));
    });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});