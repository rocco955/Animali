var express = require('express');
var path = require('path');

const PORT = 3000;
var animali = require('./animali').animali
var app = express();

app.use('/bootstrap', express.static(path.join(__dirname, '..', 'node_modules', 'bootstrap', 'dist')));
app.use('/jquery', express.static(path.join(__dirname, '..', 'node_modules', 'jquery', 'dist')));
app.use('/popper', express.static(path.join(__dirname, '..', 'node_modules', 'popper.js', 'dist')));

app.use('/js', express.static(path.join(__dirname, '..', 'public', 'js')));
app.use('/images', express.static(path.join(__dirname, '..', 'public', 'images')));
app.use('/css', express.static(path.join(__dirname, '..', 'public', 'css')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
})

var gatti = require('./gatti');
var cani = require('./cani');


app.use('/gatti', gatti); //inizio della rotta, e chi la gestisce
app.use('/cani', cani); //inizio della rotta, e chi la gestisce

app.get('/animali', function (req, res){
    res.json(animali)
})

app.listen(PORT, function () {
    console.log("Server in esecuzione")
})