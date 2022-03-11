const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/Portfolio'));
app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: '/dist/Portfolio/' }));

app.listen(process.env.PORT || 8080);
