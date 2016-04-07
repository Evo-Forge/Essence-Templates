const http = require('http');
const path = require('path');
const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 8080;

app.use('/assets', express.static(path.resolve(__dirname, '../assets')));
app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.all('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../','index.html'));
});

app.all('/:page', function(req, res) {
  res.sendFile(path.resolve(__dirname, '../','index.html'));
});

app.listen(PORT);
console.log('Essence Server on PORT:', PORT);